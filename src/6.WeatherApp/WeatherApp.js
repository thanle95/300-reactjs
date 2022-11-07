import { useRef, useState } from "react";
import ForecastDay from "./ForecastDay";
import ForecastHour from "./ForecastHour";
import "./style.css";
import useFetch from "./useFetch";
function WeatherApp() {
  const locationRef = useRef(null);
  const daysRef = useRef(null);
  const [url, setUrl] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [data] = useFetch(url);
  const handleForecast = (e) => {
    e.preventDefault();
    if (locationRef?.current?.value && daysRef?.current?.value)
      setUrl(
        `http://api.weatherapi.com/v1/forecast.json?key=e0eecb964303463dbeb81526220411&q=${locationRef.current.value}&days=${daysRef.current.value}&aqi=no&alerts=no`
      );
    else alert("Vui lòng nhập đúng thông tin");
  };
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };
  console.log(data);
  return (
    <div id="container">
      <form>
        <div>
          <span>Location</span>
          <input ref={locationRef} placeholder="Enter the location" />
        </div>
        <div>
          <span>Number of days</span>
          <input
            ref={daysRef}
            type="number"
            placeholder="Enter the number of days"
          />
        </div>
        <div>
          <button onClick={(e)=> handleForecast(e)}>Get forecast</button>
        </div>
      </form>
      <div className="forecast">
        <ul>
          {data &&
            data.forecast.forecastday.map((item) => (
              <ForecastDay
                key={item.date}
                value={item}
                selectedDate={selectedDate}
                handleChangeDate={handleChangeDate}
              />
            ))}
        </ul>
        <ul>
          {selectedDate &&
            data.forecast.forecastday
              .find((f) => f.date === selectedDate)
              .hour.map((item) => (
                <ForecastHour key={item.time} value={item} />
              ))}
        </ul>
      </div>
    </div>
  );
}

export default WeatherApp;
