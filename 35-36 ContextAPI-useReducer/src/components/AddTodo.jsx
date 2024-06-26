import { useContext, useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({}) {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row gp-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="`text`"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success gp-button"
            // onClick={handleAddButtonClicked}
          >
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
