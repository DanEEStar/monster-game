import Phaser from "phaser";

export interface MarioInput {
  left: boolean;
  right: boolean;
  run: boolean;
  jumpDown: boolean;
  jumpPressed: boolean;
}

export type MovementState =
  | "idle"
  | "walking"
  | "running"
  | "skidding"
  | "rising"
  | "falling";

export type AccelerationMode =
  | "idle"
  | "ground acceleration"
  | "air acceleration"
  | "friction"
  | "air momentum"
  | "skid";

export interface MarioMovementConfig {
  walkSpeed: number;
  runSpeed: number;
  maxHorizontalSpeed: number;
  groundAcceleration: number;
  airAcceleration: number;
  groundFriction: number;
  skidAcceleration: number;
  jumpVelocities: number[];
  heldJumpGravity: number;
  normalGravity: number;
  heldGravityVelocityThreshold: number;
  maxFallSpeed: number;
  coyoteTime: number;
  jumpBufferTime: number;
}

export const DEFAULT_MARIO_MOVEMENT: MarioMovementConfig = {
  walkSpeed: 90,
  runSpeed: 150,
  maxHorizontalSpeed: 240,
  groundAcceleration: 225,
  airAcceleration: 225,
  groundFriction: 225,
  skidAcceleration: 450,
  jumpVelocities: [-210, -217.5, -225, -240],
  heldJumpGravity: 225,
  normalGravity: 1125,
  heldGravityVelocityThreshold: -120,
  maxFallSpeed: 240,
  coyoteTime: 0.06,
  jumpBufferTime: 0.08,
};

export interface MarioMovementDebugState {
  velocityX: number;
  velocityY: number;
  targetVelocityX: number;
  grounded: boolean;
  accelerationMode: AccelerationMode;
  movementState: MovementState;
}

export function moveTowards(
  current: number,
  target: number,
  maxChange: number,
): number {
  if (current < target) {
    return Math.min(current + maxChange, target);
  }

  if (current > target) {
    return Math.max(current - maxChange, target);
  }

  return target;
}

export default class MarioMovementController {
  readonly player: Phaser.Physics.Arcade.Sprite;
  readonly config: MarioMovementConfig;

  private static readonly GROUND_SNAP_VELOCITY = 1;

  private currentVelocityX = 0;
  private targetVelocityX = 0;
  private grounded = false;
  private coyoteTimer = 0;
  private jumpBufferTimer = 0;
  private accelerationMode: AccelerationMode = "idle";
  private movementState: MovementState = "idle";

  constructor(
    player: Phaser.Physics.Arcade.Sprite,
    config: Partial<MarioMovementConfig> = {},
  ) {
    this.player = player;
    this.config = {
      ...DEFAULT_MARIO_MOVEMENT,
      ...config,
      jumpVelocities: config.jumpVelocities ?? DEFAULT_MARIO_MOVEMENT.jumpVelocities,
    };

    this.getBody().allowGravity = false;
  }

  update(deltaMs: number, input: MarioInput): void {
    const dt = Math.min(Math.max(deltaMs, 0) / 1000, 1 / 30);
    const body = this.getBody();

    if (body.blocked.left && this.currentVelocityX < 0) {
      this.currentVelocityX = 0;
    }

    if (body.blocked.right && this.currentVelocityX > 0) {
      this.currentVelocityX = 0;
    }

    const hasGroundContact = body.blocked.down || body.touching.down;

    if (hasGroundContact) {
      this.coyoteTimer = this.config.coyoteTime;
    } else {
      this.coyoteTimer = Math.max(0, this.coyoteTimer - dt);
    }

    this.grounded = hasGroundContact;

    if (input.jumpPressed) {
      this.jumpBufferTimer = this.config.jumpBufferTime;
    } else {
      this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - dt);
    }

    const axis = Number(input.right) - Number(input.left);
    const requestedSpeed = input.run ? this.config.runSpeed : this.config.walkSpeed;

    this.targetVelocityX = Phaser.Math.Clamp(
      axis * requestedSpeed,
      -this.config.maxHorizontalSpeed,
      this.config.maxHorizontalSpeed,
    );

    const reversing =
      Math.abs(this.currentVelocityX) > 0.01 &&
      axis !== 0 &&
      Math.sign(this.currentVelocityX) !== axis;

    if (reversing) {
      this.currentVelocityX = moveTowards(
        this.currentVelocityX,
        this.targetVelocityX,
        this.config.skidAcceleration * dt,
      );
      this.accelerationMode = "skid";
    } else if (axis !== 0) {
      this.currentVelocityX = moveTowards(
        this.currentVelocityX,
        this.targetVelocityX,
        (this.grounded ? this.config.groundAcceleration : this.config.airAcceleration) *
          dt,
      );
      this.accelerationMode = this.grounded
        ? "ground acceleration"
        : "air acceleration";
    } else if (this.grounded) {
      this.currentVelocityX = moveTowards(
        this.currentVelocityX,
        0,
        this.config.groundFriction * dt,
      );
      this.accelerationMode = "friction";
    } else {
      this.accelerationMode = "air momentum";
    }

    this.currentVelocityX = Phaser.Math.Clamp(
      this.currentVelocityX,
      -this.config.maxHorizontalSpeed,
      this.config.maxHorizontalSpeed,
    );

    let velocityY = body.velocity.y;

    if (this.jumpBufferTimer > 0 && this.coyoteTimer > 0) {
      const jumpBucket = Phaser.Math.Clamp(
        Math.floor(Math.abs(this.currentVelocityX) / 60),
        0,
        this.config.jumpVelocities.length - 1,
      );

      velocityY = this.config.jumpVelocities[jumpBucket];
      this.jumpBufferTimer = 0;
      this.coyoteTimer = 0;
      this.grounded = false;
    }

    if (this.grounded) {
      // Keep a small downward motion so Arcade rechecks the tile contact each step.
      velocityY = MarioMovementController.GROUND_SNAP_VELOCITY;
    } else {
      const heldJump =
        input.jumpDown && velocityY < this.config.heldGravityVelocityThreshold;
      const gravity = heldJump
        ? this.config.heldJumpGravity
        : this.config.normalGravity;

      velocityY = Math.min(velocityY + gravity * dt, this.config.maxFallSpeed);
    }

    body.setVelocity(this.currentVelocityX, velocityY);
    this.movementState = this.getMovementState(input, axis, velocityY);
  }

  reset(): void {
    this.currentVelocityX = 0;
    this.targetVelocityX = 0;
    this.grounded = false;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
    this.accelerationMode = "idle";
    this.movementState = "idle";
    this.getBody().setVelocity(0, 0);
  }

  getDebugState(): MarioMovementDebugState {
    const body = this.getBody();

    return {
      velocityX: this.currentVelocityX,
      velocityY: this.grounded ? 0 : body.velocity.y,
      targetVelocityX: this.targetVelocityX,
      grounded: this.grounded,
      accelerationMode: this.accelerationMode,
      movementState: this.movementState,
    };
  }

  private getMovementState(
    input: MarioInput,
    axis: number,
    velocityY: number,
  ): MovementState {
    if (!this.grounded) {
      return velocityY < 0 ? "rising" : "falling";
    }

    if (this.accelerationMode === "skid") {
      return "skidding";
    }

    if (Math.abs(this.currentVelocityX) <= 0.01) {
      return "idle";
    }

    if (input.run && axis !== 0) {
      return "running";
    }

    return "walking";
  }

  private getBody(): Phaser.Physics.Arcade.Body {
    const body = this.player.body;

    if (!body || body instanceof Phaser.Physics.Arcade.StaticBody) {
      throw new Error(
        "MarioMovementController requires a dynamic Arcade Physics body.",
      );
    }

    return body;
  }
}
