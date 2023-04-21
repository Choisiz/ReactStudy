const { createStore, applyMiddleware } = require("redux");
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

//미드웰어 만들기
const firstMiddleware = (store) => (next) => (action) => {
  console.log(action);
  console.log(next);
  console.log(action);
  next(action);
};

//redux-thunk
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //함수를 액션으로 둔다: 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); //dispatch
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

console.log("1st", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "choi",
    admin: false,
  })
);

// store.dispatch({
//   type: "LOG_IN",
//   data: {
//     id: 1,
//     name: "choisis",
//     admin: true,
//   },
// });
console.log("2st", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "hello",
//   })
// );
// console.log("3st", store.getState());

// store.dispatch(logOut());
// console.log("4cst", store.getState());
