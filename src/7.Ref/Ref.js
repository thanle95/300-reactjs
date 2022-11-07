
import { createRef, useRef, useState } from "react";
import "./style.css";
function Ref() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef(null);
  const refFromCreateRef = createRef();
  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }
  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }
  return (
    <div className="App">
      Current render index: {renderIndex}
      <br />
      First render index remembered within refFromUseRef.current:
      {refFromUseRef.current}
      <br />
      First render index unsuccessfully remembered within
      refFromCreateRef.current:
      {refFromCreateRef.current}
      <br />
      <button onClick={() => setRenderIndex((prev) => prev + 1)}>
        Cause re-render
      </button>
    </div>
  );
}

export default Ref;
