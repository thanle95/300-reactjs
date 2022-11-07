import { useState } from "react";
import Comments from "./Comments";
import Posts from "./Posts";
import "./style.css";
function FetchData() {
  const tabs = ["Posts", "Comments", "Albums", "Photos", "Todos", "Users"];
  const [selectedTab, setSelectedTab] = useState("");
  const handleChangeTab = (tab) => {
    setSelectedTab(tab)
  };
  return (
    <div id="container">
      <ul>
        {tabs.map((tab) => (
          <button key={tab} className={selectedTab === tab? "selected": ""} onClick={() => handleChangeTab(tab)}>
            {tab}
          </button>
        ))}
      </ul>
      {/* IIFE */}
      {(() => {
        switch (selectedTab) {
          case "Posts": return <Posts/>
          case "Comments": return <Comments/>
          default:
            return <div></div>;
        }
      })()}
    </div>
  );
}

export default FetchData;
