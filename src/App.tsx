import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";
import { addTodo, toggleCompleted, removeTodo } from "./store/todo/actions";
import { AppState } from "./store";

const App: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todoModule.todos);
  const dispatch = useDispatch();

  // to avoid re-rendering, wrapping under usecallback
  const onInput = React.useCallback(
    function(name: string) {
      dispatch(addTodo(name));
    },
    [dispatch]
  );

  // to avoid re-rendering, wrapping under usecallback
  const onToggleComplete = React.useCallback(
    function(id: number) {
      dispatch(toggleCompleted(id));
    },
    [dispatch]
  );

  // to avoid re-rendering, wrapping under usecallback
  const onDelete = React.useCallback(
    function(id: number) {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <div className="App">
      <TodoList todoItems={todos} onAdd={onInput} onEdit={onToggleComplete} onDelete={onDelete} />
    </div>
  );
};

export default App;
