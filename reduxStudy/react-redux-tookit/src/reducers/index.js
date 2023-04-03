const { combineReducers } = require("redux");
const userSlice = null;
const postSlice = null;

module.exports = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
});
