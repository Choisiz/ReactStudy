//비동기
const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "choisis",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};
//요청
const logInRequest = (data) => {
  return {
    type: "LOGIN_REQUEST",
    data,
  };
};
//성공
const logInSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    data,
  };
};
//실패
const logInFailure = (data) => {
  return {
    type: "LOGIN_FAILURE",
    data,
  };
};
//-----------
// const logIn = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
