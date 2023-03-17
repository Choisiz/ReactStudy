const initState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (prevState = initState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUt":
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
