import React from "react";
import { Provider } from "react-redux";
import TodoContainer from "@/sections/todos/todo-container/todo-container.component";
import { store } from "@/store/store";
import Logout from "@/components/navbar/navbar-logout.component";

const TodosPage = () => {
  return (
    <Provider store={store}>
      <Logout/>
      <TodoContainer />
    </Provider>
  );
}

export default TodosPage;
