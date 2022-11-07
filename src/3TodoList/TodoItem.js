function ToDoItem({ item, onCompleteTodo, onDelete }) {
  return (
    <li key={item.name} className="todo">
      <div>
        <span
          className="todo-item"
          style={{
            textDecoration: item.isCompleted ? "line-through" : "",
            cursor: item.isCompleted ? "" : "pointer",
          }}
          onClick={() => onCompleteTodo(item.name)}
        >
          {item.name}
        </span>
      </div>
      <button
        onClick={() => {
          onDelete(item.name);
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default ToDoItem;
