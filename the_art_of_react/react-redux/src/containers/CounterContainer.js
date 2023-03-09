import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  //redux상태조회
  const number = useSelector((state) => state.counter.number);
  //dispatch
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// export default connect((state) => ({ number: state.counter.number }), {
//   increase,
//   decrease,
// })(CounterContainer);

export default React.memo(CounterContainer);
