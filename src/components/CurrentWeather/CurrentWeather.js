import React from 'react'
import toMetric from '../../modules/toMetric'

const CurrentWeather = ({isImperial, currentWeather}) => {

  return (
    <div>
      <div id='currentWeatherContainer'>
      <p>Date: {currentWeather.datetime}</p>
      <p>Temp: {isImperial 
                 ? currentWeather.temp
                 : toMetric.toCelcius(currentWeather.temp)
               } 
      </p>
      <p>Weather: {currentWeather.weather.description}</p>
      <img 
        src={`/images/${currentWeather.weather.icon}.png`}
        alt={`${currentWeather.weather.icon} + image.`}
      />
      <p>Wind spd: {isImperial
                     ? currentWeather.wind_spd
                     : toMetric.toMetersPerSecond(currentWeather.wind_spd)
                    }
      </p>
      <p>Precip: {currentWeather.precip}</p>
    </div>  
    </div>
  )
}

export default CurrentWeather