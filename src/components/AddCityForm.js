import React from "react";

class AddCityForm extends React.Component {
  state = {
    addedCity: ""
  };
  render() {
    const { addedCity } = this.state;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleClick(this.state.addedCity);
          }}
        >
          <input name={addedCity} onChange={this.handleChange}></input>
          <button type="submit">Add City</button>
        </form>
      </div>
    );
  }

  handleClick = newCity => {
    this.props.addCity(newCity);
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ addedCity: value });
    console.log(value, "<-- this is whats being added to the value");
  };
}

export default AddCityForm;
