import React from "react";
import AddCityForm from "./AddCityForm";
// make a class, set state to be empty string

// onsubmit function}
//use compnent did update
//onChange for lette rin puts

//use cokmponent did update - check if the new props are different to the old props only do a request to the api if they're difference;
//access the old stuff with prevProps.searchTerm or whatever you have preProps has access to previous props
const Citys = ({ citys, changeCity, addCity }) => {
  const handleClick = event => {
    const { name } = event.target;
    changeCity(name);
  };

  return (
    <div key="citysList">
      <AddCityForm addCity={addCity} />

      <ul>
        {citys.map(city => {
          return (
            <button onClick={handleClick} name={city}>
              {city}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Citys;
