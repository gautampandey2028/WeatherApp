import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const [city,setCity] = useState("")
    const [weather,setWeather] = useState()
    const handleChange = (e)=>{
        setCity(e.target.value) 
    }
      
      const fetchWeather= async()=>{
       try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d4441b930bf027e14bf7a2d77acd3620'}`)
            setWeather(response)
            console.log(response);    
       } catch (error) {
        console.log("ERROR",error);
        
       }
      }
     const handleClick= ()=>{
       
        fetchWeather()
        setCity("")
     }
  return (
    <>
    
     <div className='weather' >
        <h1>WEATHER APP</h1>
        <input type="text" value={city} placeholder='ENTER CITY NAME' onChange={handleChange} className='input' />
        <br />
        <button className='button' onClick={handleClick} >GET WETHER</button>
       {
        weather && <>
        <div className='weather-info' >
            <h2> {weather.data.name} </h2>
           <p>Temperature is {weather.data.main.temp}</p>
           <p> Humidity  is {weather.data.main.humidity}</p>

        </div>
        </>
       }
     </div>
    </>
  )
}

export default Weather