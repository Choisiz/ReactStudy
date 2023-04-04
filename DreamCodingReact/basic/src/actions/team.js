const Info = (data) => {
  return {
    type: "ADD_PROFILE",
    payload: data,
  };
};

module.exports = {
  Info,
};
