import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
  helloReducer: {
    message: string;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
  }
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  }
}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;

