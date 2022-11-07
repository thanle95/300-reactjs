import { useState } from "react";
import ForecastDay from "./ForecastDay";
import ForecastHour from "./ForecastHour";
import "./style.css";
import useFetch from "./useFetch";
function WeatherApp() {
  const [location, setLocation] = useState("")
  const [days, setDays] = useState(1)
  const [url, setUrl]= useState("")
  const [selectedDate, setSelectedDate]= useState("")
  const [data] = useFetch(url);
  const handleForecast= ()=>{
    setUrl(`http://api.weatherapi.com/v1/forecast.json?key=e0eecb964303463dbeb81526220411&q=${location}&days=${days}&aqi=no&alerts=no`)
  }
  const handleChangeDate= (date)=>{
    setSelectedDate(date)
  }
  console.log(data)
  return (
    <div id="container">
      <div>
        <span>Location</span>
        <input value={location} onChange={(e)=> setLocation(e.target.value)} placeholder="Enter the location"/>
      </div>
      <div>
        <span>Number of days</span>
        <input value={days} onChange={(e)=> setDays(e.target.value)} placeholder="Enter the number of days"/>
      </div>
      <div>
        <button onClick={handleForecast}>Get forecast</button>
      </div>
      <div className="forecast">
        <ul>
      {data && data.forecast.forecastday.map(item => <ForecastDay key={item.date} value={item} selectedDate={selectedDate} handleChangeDate={handleChangeDate}/>)}
      </ul>
      <ul>
      {selectedDate && data.forecast.forecastday.find(f=> f.date === selectedDate).hour.map(item => <ForecastHour key={item.time} value={item}/>)}
      </ul>
      </div> 
    </div>
  );
}

export default WeatherApp;
