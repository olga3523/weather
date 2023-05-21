import Search from "../../components/Search";
import WeatherWrapper from "../../components/WeatherWrapper";
import ForecastWrapper from "../../components/ForecastWrapper";
import { getWeatherApi,getForecastApi } from "../../api/weatherApi"
import { useState } from "react";
import styles from "./styles.module.css"
function Weather() {
    const [weatherData, setWeatherData] = useState({})
    const [forecastData,setForcastData]=useState({})
    
    async function getWeather(cityName) {
        const weatherData = await getWeatherApi(cityName)
        console.log("Weather",weatherData)
        setWeatherData(weatherData)
        
    }
    async function getForecast(cityName) {
        const forecastData = await getForecastApi(cityName)
        setForcastData(forecastData)
        //console.log(forecastData)

        
    }
    
    return <section className={styles.weather}>
        <Search getWeather={getWeather} getForecast={getForecast } />
        {weatherData && <WeatherWrapper weatherData={weatherData}  />}
                    
        {forecastData ? <ForecastWrapper weatherForecast={forecastData}/>: <h3>Not Found</h3>}
    </section>
    
}
export default Weather;
