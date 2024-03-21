import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;
