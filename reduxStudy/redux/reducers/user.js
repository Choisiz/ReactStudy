const initState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (prevState = initState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      console.log(" loading....");
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case "LOGIN_FAILURE":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    case "LOG_OUT":
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
