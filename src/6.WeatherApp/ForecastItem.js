import "./style.css";
function ForecastItem({title, icon, min, max, handleClick, selected}) {
  return (
    <li className={`forecast-item ${selected? 'selected': ''}`} onClick={handleClick}>
      <span>{title}</span>
      <img src={icon}></img>
      <div className="temperature">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </li>
  );
}

export default ForecastItem;
