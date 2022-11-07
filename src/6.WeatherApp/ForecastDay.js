import moment from "moment/moment";
import ForecastItem from "./ForecastItem";
import "./style.css";
function ForecastDay({value, selectedDate, handleChangeDate}) {

  const handleClick=()=>{
    handleChangeDate(value.date)
  }
  return (
    <ForecastItem selected={selectedDate === value.date} title={moment(value.date).format("MMM Do")} icon={value.day.condition.icon} min={value.day.mintemp_c} max={value.day.maxtemp_c}
    handleClick={handleClick}/>
  );
}

export default ForecastDay;
