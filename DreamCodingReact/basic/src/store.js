const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers/index");
const initialState = {
  team: [
    {
      name: "maria",
      job: "front dev",
      career: "3year",
      link:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    },
    {
      name: "james",
      job: "dev dev",
      career: "5year",
      link:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      name: "lon",
      job: "qa",
      career: "new",
      link:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
  ],
};
const store = createStore(reducer, initialState);
module.exports = store;
