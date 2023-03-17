const { createStore } = require("redux");
const reducer = require("./reducers/reducer");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");
//init
const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("change");
});

store.dispatch(logIn({ id: 1, name: "dd", admin: true }));
console.log("2st", store.getState());
store.dispatch(addPost({ userId: 1, id: 1, content: "hello" }));
console.log("3st", store.getState());
store.dispatch(logOut());
console.log("4cst", store.getState());
