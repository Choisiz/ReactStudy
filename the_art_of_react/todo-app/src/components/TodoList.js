import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "../css/TodoList.scss";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List
      className="TodoList"
      width={512} //전체크기
      height={513} //전체높이
      rowCount={todos.length} //항목개수
      rowHeight={57}
      rowRenderer={rowRenderer} //렌더링함수
      list={todos} //리스트
      style={{ outline: "none" }}
    />
  );
};

export default React.memo(TodoList);
