const { createStore } = require("redux");

//reducer
const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUt":
      return {
        ...prevState,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

//init
const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
};

//action func
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
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
