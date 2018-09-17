import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <h2>{ weekDay } Hora: {hour} hs</h2><br />
        <WeatherData data={data} />
    </div>
)


ForecastItem.proptypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        }),
}

export default ForecastItem;