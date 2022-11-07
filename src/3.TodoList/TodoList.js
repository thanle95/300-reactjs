import { useEffect, useRef, useState } from "react";
import "./style.css";
import ToDoItem from "./TodoItem";
const key = "toDoes";
function TodoList() {
  const [toDo, setToDo] = useState("");
  const [isDisabledAdd, setIsDisabledAdd] = useState(false);
  const [toDoes, setToDoes] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return [];
  });
  const [filterToDoes, setFilterToDoes] = useState([]);
  const handleAdd = () => {
    setToDoes((prev) => [{ name: toDo, isCompleted: false }, ...prev]);
    setToDo("");
  };
  const handleDelete = (item) => {
    if (window.confirm(`Are you sure want to delete item '${item}'?`)) {
      const newToDoes = [...toDoes].filter((f) => f.name != item)
      console.log({toDoes, newToDoes})
      setToDoes([...toDoes].filter((f) => f.name != item));
    }
  };
  const handleChangeInput = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setToDo(value);
  };
  useEffect(() => {
    
    if (toDoes.length > 0) localStorage.setItem(key, JSON.stringify(toDoes));
    setFilterToDoes(toDoes);
  }, [toDoes]);
  useEffect(() => {
    if (toDo.length) {
      setFilterToDoes(toDoes.filter((f) => f.name.includes(toDo)));
      if (toDoes.filter((f) => f.name === toDo).length) setIsDisabledAdd(true);
      else setIsDisabledAdd(false);
    } else {
      setFilterToDoes(toDoes);
      setIsDisabledAdd(true);
    }
  }, [toDo]);
  const handleKeyUp = (e) => {
    e.preventDefault();
    if (e.keyCode === 13)
      if (toDoes.filter((f) => f.name === toDo).length == 0) handleAdd();
  };
  const handleCompleteTodo = (toDoName) => {
    const index = toDoes.findIndex((f) => f.name === toDoName);
    if (index >= -1) {
      const tmpToDoes = [...toDoes];
      tmpToDoes[index].isCompleted = true;
      setToDoes(tmpToDoes);
    }
  };
  console.log({ toDoes });
  return (
    <div id="container">
      <div className="todo">
        <input
          type="text"
          value={toDo}
          onChange={(e) => handleChangeInput(e)}
          placeholder="Add your new to-do"
          onKeyUp={(e) => handleKeyUp(e)}
        ></input>
        <button onClick={handleAdd} disabled={isDisabledAdd}>
          + Add
        </button>
      </div>
      <ul style={{ width: "100%" }}>
        {filterToDoes &&
          filterToDoes.map((item) => (
            <ToDoItem
              item={item}
              onCompleteTodo={handleCompleteTodo}
              onDelete={handleDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
