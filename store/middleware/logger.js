export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("\ntype: ", action.type);
  console.log("\npayload: ", action.payload);
  console.log("\ncurrentState: ", store.getState());

  next(action);

  console.log("\nnext state: ", store.getState());
};
