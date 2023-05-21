import styles from "./styles.module.css"
function WeatherWrapper(props) {
    function convertKelvinToCelsius(tempKelvin){
        return Number.parseFloat(tempKelvin-273.15).toFixed(0)

    }
    function getDate(){
         const date=new Date(Date.now())
         const month= date.getMonth() +1;
        const day= date.getDate();
        const year= date.getFullYear() 
        return `${month}/${day}/${year}`
    }
    function getIcon(){
        if(props.weatherData.weather){
            return <img src={`https://openweathermap.org/img/wn/${props?.weatherData?.weather[0]?.icon}.png`} alt="picture" />
        }
    }
    
    return <header className={styles.default_weather}>
        <div className={styles.city}>
            {props.weatherData?.name}{getIcon()}           
        </div>
        <div className={styles.date}>
         <span>{getDate()}</span> 
         <div className={styles.data_weather}>
        <span>Temp:{convertKelvinToCelsius(props.weatherData?.main?.temp)}</span>
        <span>Humidity:{props.weatherData?.main?.humidity}</span>
        <span>Pressure:{props.weatherData?.main?.pressure}</span>
        </div>
        </div>
    </header>
}
export default WeatherWrapper;