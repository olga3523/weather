import ForecastItem from "../ForecastItem"
function ForecastWrapper(props) {
    
    function filterWeather(item) {
        console.log(item.weather.icon)
        const date=new Date(Date.parse(item.dt_txt))
        if (date.getHours() == 12) {
            return <ForecastItem item={item} key={item.dt} date={date}/>
        }

    }
    return <ul>
        {console.log(props.weatherForecast?.list)}
        {props.weatherForecast?.list?.map((item) => filterWeather(item))}
       
    </ul>
}
export default ForecastWrapper;