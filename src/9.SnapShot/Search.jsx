import { useContext, useRef } from "react";
import { ImageContext } from "./ImageContext";
import "./style.css";
function Search() {
  const [, search] = useContext(ImageContext)
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    search(inputRef.current.value)
    
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input ref={inputRef} placeholder="Search..." type="text" />
    </form>
  );
}

export default Search;
