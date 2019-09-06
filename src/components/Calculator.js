import React from 'react';
import BoilingVeredict from './BoilingVeredict';
import TemperatureInput from './TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from './ConversionFunction'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  // handleChange(e) {
  //   this.setState({
  //     temperature: e.target.value
  //   })
  // }

  handleScaleChange = (temperature, scale) => {
    this.setState({
      scale,
      temperature
    })
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    // return (
    //   <fieldset>
    //     <legend>Enter Temperature</legend>
    //     <input
    //       value={temperature}
    //       name='temperature'
    //       onChange={ event => this.handleChange(event) }
    //     />
    //     <BoilingVeredict
    //       celsius={parseFloat(temperature)}
    //     />
    //   </fieldset>
    // )
    return (
      <div>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={temperature => this.handleScaleChange(temperature, 'c')}
        />
        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleScaleChange(temperature, 'f')}
        />
        <BoilingVeredict
          celsius={parseFloat(temperature)}
        />
      </div>
    )
  }
}