import React from 'react';


class Weather extends React.Component {
  constructor ()  {
    super();
    this.getWeather = this.getWeather.bind(this);
    this.state = {location: "", temperature: "", isLoaded: false };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather({coords: {latitude, longitude}}) {
    const xhr = new XMLHttpRequest;
    const url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&APPID=ed139757ea45509d2d618e8cf478a824`;

    xhr.addEventListener('load', () => {
      this.handleWeather(JSON.parse(xhr.response));
    });
    xhr.open('GET', url);
    xhr.send();
  }

  handleWeather(response) {
    const location = response.name;
    const temperature = response.main.temp;
    this.setState({location, temperature, isLoaded: true});
  }

  render() {

    return (
      <div>
        <h1>Weather</h1>
        <section className="widget-weather">
          <div>
            {this.state.location}
          </div>
          <div>
            {this.state.temperature}
          </div>
          {this.state.isLoaded ||
            <div className="loading">
              Loading...
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Weather;
