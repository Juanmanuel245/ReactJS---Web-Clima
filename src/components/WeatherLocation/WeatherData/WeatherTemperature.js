import React from 'react';
import WeatherIcons from 'react-weathericons';
import { SUN, CLOUD, RAIN, SNOW, DRYZZLE, THUNDER } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRYZZLE]: "day-showers",
    [THUNDER]: "day-thunderstorm"
};

const getWeatherIcon = weatherState => {
        const icon = icons[weatherState];
        
        const sizeIcon = "4x";

        if (icon)
            return <WeatherIcons name={icon} className="wicon" size={sizeIcon} /> ;
        else
            return <WeatherIcons name={"day-sunny"} size="2x" /> ;
}

const WeatherTemperature = ({ temperature, weatherState}) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span> 
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.prototype = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;