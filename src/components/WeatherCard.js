import React from "react";
import * as api from "./api.js";

class WeatherCards extends React.Component {
  state = {
    iconImages: [],
    weatherData: null
  };

  componentDidMount = () => {
    this.addData();
    console.log("Mounting");
  };

  componentDidUpdate = prevProps => {
    if (prevProps.currentCity !== this.props.currentCity) this.addData();
  };

  addData = () => {
    api.fetchData(this.props.currentCity).then(data => {
      this.setState({ weatherData: data });
    });
  };

  render() {
    console.log("Rendering inside weatherCard");
    if (!this.state.weatherData) return <p>LOADING</p>;
    else {
      return (
        <div key="WeatherCard">
          <h3>{this.props.currentCity}</h3>
          <div key="weather">IconImg</div>
          <div key="description">Windy</div>
          <div key="temperature">Temp: {this.state.weatherData.main.temp}˚</div>
          <div key="windSpeed">
            WindSpeed: {this.state.weatherData.wind.speed}km
          </div>
          <div key="Description">
            Description:
            {this.state.weatherData.weather.map(weatherInfo => {
              return <div>{weatherInfo.description}</div>;
            })}
          </div>
        </div>
      );
    }
  }
}

export default WeatherCards;
