import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스 스토어의 state를 컴포넌트의 props로 넘겨줌
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

//action function을 컴포넌트의 props로 넘겨줌
//스토어의 dispatch를 props로 받아옴
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase()); //action function을 호출하고 디스패치
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect((state) => ({ number: state.counter.number }), {
  increase,
  decrease,
})(CounterContainer);
