
import { useRef } from "react";
import Counter from "./Counter";
import "./style.css";
function ForwardingRef() {
  const localRef= useRef(null)
  return (
    <div id="container">
      <Counter ref={localRef} />
      <button onClick={() => { console.log(localRef) }}>
          Ref
        </button>
    </div>
  );
}

export default ForwardingRef;
