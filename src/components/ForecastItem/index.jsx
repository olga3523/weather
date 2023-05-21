import React from "react"
import styles from "./styles.module.css"

function ForecastItem(props) {
    function convertKelvinToCelsius(tempKelvin){
        return Number.parseFloat(tempKelvin-273.15).toFixed(0)
           

    }

    function getDate(date){
        const month= date.getMonth() +1;
        const day= date.getDate();
        const year= date.getFullYear() 
        return `${month}/${day}/${year}`
    }

    return  <React.Fragment>

    <li className={styles["itemElement"]}>
        {console.log(props.item.weather[0].icon)}
        <span>{getDate(props.date)}</span>
        <span>Temp:{convertKelvinToCelsius(props.item.main.temp)}</span> 
        <img src={`https://openweathermap.org/img/wn/${props.item.weather[0].icon}.png`} alt="" />
        
    </li>
    
    </React.Fragment> 
   
}
export default ForecastItem;