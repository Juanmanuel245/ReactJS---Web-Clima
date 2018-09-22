import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';
import { store } from './store';
import { setCity } from './actions';


const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Paris,fr',
  'Milan,it',
  'Madrid,es',
  'Miami,us',
  'Lima,pe'
];





class App extends Component {

  constructor() {
    super();
    this.state = { city: null};
  }
  handleSelectionLocation = city => {
    this.setState({ city })
    console.log(`hundleSelectionLocation ${city}`);
    
    store.dispatch(setCity(city));
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <header className="App-header">
              <img src='./images/logo.png' className="App-logo" alt="logo" />
              <h1 className="App-title">eCocina.com</h1>
            </header>
            
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  ecoCocina
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}  onSelectedLocation={this.handleSelectionLocation}  />
          </Col>
          <Col zs={12} md={6}>
            <Paper elevation={4}>
              <div className="details text-white">
                {
                    city === null ?
                      null :
                      <ForecastExtended city={city} />
                    
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid> 
    );
  };
}

export default App;
