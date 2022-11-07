import moment from "moment/moment";
import ForecastItem from "./ForecastItem";
import "./style.css";
function ForecastHour({value}) {
  return (
    <ForecastItem title={moment(value.time).format("HH:mm")} icon={value.condition.icon} min={`Temp: ${value.temp_c}`} max={`Hum: ${value.humidity}`} handleClick={()=>{}}/>
  );
}

export default ForecastHour;
