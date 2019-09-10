import React from "react";
import "./App.css";
import Citys from "./components/Citys";
import WeatherCards from "./components/WeatherCard";
import * as api from "./components/api";

class App extends React.Component {
  state = {
    citys: ["Liverpool", "Chester", "Manchester"],
    currentCity: "Manchester"
  };

  //this function will populate the state citys list with the new city value
  addCity = city => {
    console.log(city, "<---Cityyyyyyyy");
    this.setState(currentState => {
      return { citys: [...currentState.citys, city], currentCity: city };
    });
  };

  //This function will change the city, depending on the buttons pressed
  changeCity = city => {
    this.setState({ currentCity: city });
  };

  render() {
    const { citys, currentCity } = this.state;
    return (
      <div className="App">
        <Citys
          citys={citys}
          changeCity={this.changeCity}
          addCity={this.addCity}
        />
        <WeatherCards currentCity={currentCity} />
      </div>
    );
  }
}

export default App;

//updateCity
