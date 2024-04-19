import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Focus on Code",
      dueDate: "5/04/2024",
    },

    {
      name: "Learn React",
      dueDate: "5/04/2024",
    },
    {
      name: "Movie",
      dueDate: "5/04/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
