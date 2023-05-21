import { API_KEY } from "../constants"  

export async function getWeatherApi(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        
        if(!response.ok)throw response.error
        return await response.json();
            
    } catch (error) {
        console.log(error)
    }
}



export async function getForecastApi(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        if (!response.ok) throw response.error
        return  await response.json()

    } catch (error) {
        console.log(error)
        
    }
}
