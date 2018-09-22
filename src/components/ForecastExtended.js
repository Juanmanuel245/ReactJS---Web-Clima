import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ForecastItem from './ForecastItem';
import { api_key} from './../constants/api_url';
import weather_data from './WeatherLocation/WeatherData';
import transformForecast from './../services/transformForecast';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: '10 m/s'
};

const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.updateCity);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({ forecastData: null})
            this.updateCity(nextProps.city); 
        }
    }


    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }

    


    
    

    renderForecastItemDays(forecastData){
        return forecastData.map(  forecast => (
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour} 
            data={forecast.data} />));
        
    }

    renderProgress = () => {
        return "Cargando pronostico extendido...";
    }

    render(){
        const {city} = this.props;
        const { forecastData } = this.state;
        return(
                <div>
                    <h4 className='forecast-title'>Pronostico Extendido - {city}</h4>
                    { forecastData ?
                        this.renderForecastItemDays(forecastData) :
                        this.renderProgress()
                    }
                </div>
            );
    }
}


export default ForecastExtended;