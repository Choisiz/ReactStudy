const { configureStore, getDefaultMiddleWare } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

const firstMiddleWare = () => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleWare, ...getDefaultMiddleWare()],
  devTools: process.env.NODE_ENV !== "production",
});

module.exports = store;
