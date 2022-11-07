function ToDoItem({ item: {name, isCompleted}, onCompleteTodo, onDelete }) {
  
  return (
    <li key={name} className="todo">
      <div>
        <span
          className="todo-item"
          style={{
            textDecoration: isCompleted ? "line-through" : "",
            cursor: isCompleted ? "" : "pointer",
          }}
          onClick={() => onCompleteTodo(name)}
        >
          {name}
        </span>
      </div>
      <button
        onClick={() => {
          onDelete(name);
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default ToDoItem;
