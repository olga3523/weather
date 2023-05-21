import { useState,useEffect } from "react";
import styles from "./styles.module.css"

function Search(props) {
    const [cityName, setCityName] = useState("Miami")

    function getReqwest() {
        props.getWeather(cityName)
        props.getForecast(cityName)
        setCityName("")
    }

    useEffect(()=>{
        getReqwest()
    },[])

    
    
    
    /*
    useEffect(() => {
        getWeather(cityName).then((weather)=>console.log(weather))//if we will delete "=>console.log(weather)" it will still work? i mean :  getWeather(cityName).then((weather)
        console.log(cityName)
    },[cityName])*/
    /*
    function handleChange(e) {
        setCityName(e.target.value)
    }*/
    
    //const [weather,setWeather]=useState({})
    //useEffect(() => {
        //getWeather("New York").then((weather)=>setWeather(weather)) //???????? getWeather(cityName) it will still work?
      
    //},[????cityName])
       
    return (
        <div className={styles.search}>
            <input  value={cityName} onChange={(e) => setCityName(e.target.value)} type="text" />
            <button onClick={getReqwest}>get weather</button>
        </div>
    )       
}

export default Search;

