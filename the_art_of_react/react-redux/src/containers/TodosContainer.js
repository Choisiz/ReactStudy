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

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

//아래는 다 같은동작임
const mapDispatchToProps = {
  changeInput,
  insert,
  toggle,
  remove,
};

// const mapDispatchToProps = (dispatch) => ({
//   changeInput: (input) => {
//     dispatch(changeInput(input));
//   },
//   insert: (text) => {
//     dispatch(insert(text));
//   },
//   toggle: (id) => {
//     dispatch(toggle(id));
//   },
//   remove: (id) => {
//     dispatch(remove(id));
//   },
// });

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

// export default connect(
//   (state) => ({
//     input: state.todos.input,
//     todos: state.todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);
