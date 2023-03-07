import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  insert,
  changeInput,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

// const mapStateToProps = (state) => ({
//   input: state.todos.input,
//   todos: state.todos.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeInput: () => {
//     dispatch(changeInput());
//   },
//   insert: () => {
//     dispatch(insert());
//   },
//   toggle: () => {
//     dispatch(toggle());
//   },
//   remove: () => {
//     dispatch(remove());
//   },
// });

//export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default connect(
  (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
