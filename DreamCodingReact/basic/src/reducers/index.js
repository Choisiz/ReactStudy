const initialState = {};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return {
        ...state,
        team: [...state.team, action.payload],
      };
    default:
      return state;
  }
};

module.exports = teamReducer;
