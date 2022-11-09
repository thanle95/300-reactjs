import { createRef, useEffect, useRef, useState } from "react";
import "./style.css";
function Navigation() {
 
  return (
    <ul>
      <li className="navigation">Mountains</li>
      <li className="navigation">Beaches</li>
      <li className="navigation">Girls</li>
      <li className="navigation">Foods</li>
    </ul>
  );
}

export default Navigation;
