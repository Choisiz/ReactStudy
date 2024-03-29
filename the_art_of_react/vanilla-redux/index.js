import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//action function
const toggleSwitch = () => ({ type: "TOGGLE_SWITCH" });
const increase = (difference) => ({ type: "INCREASE", difference });
const decrease = () => ({ type: "DECREASE" });

//init
const initialState = {
  toggle: false,
  counter: 0,
};

//reducer
function reducer(state = initialState, action) {
  //action.type
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
  }
}

//action 발생
divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
