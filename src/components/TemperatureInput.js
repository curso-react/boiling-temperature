import React from 'react';

export default class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: ''
    }
  }

  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  handleChange(e) {
    // this.setState(
    //   {
    //     temperature: e.target.value
    //   },
    //   () => console.log('temp input in component state', this.state)
    // )
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter the temperature in {this.scaleNames[scale]}</legend>
        <input 
          name="temperature" 
          value={temperature} 
          onChange={event => this.handleChange(event)}
        />
      </fieldset>
    )
  }
}