// define the Node "process" object. If it is defined (@types/node) by another module you installed,
// then you can delete this file

// eslint-disable-next-line no-unused-vars
declare const process: {
  env: {
    NODE_ENV: string;
  };
};
