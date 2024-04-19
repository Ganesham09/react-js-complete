function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "4/03/2034";

  return (
    <div class="container ">
      <div class="row gp-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger gp-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
