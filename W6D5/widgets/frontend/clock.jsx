import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  tick() {
    this.setState({ time: new Date() });
  }

  padTime(number) {
    return number < 10 ? "0" + number : number;
  }

  render() {
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const time = this.state.time;

    return (
      <div>
        <h1>Clock</h1>
        <section className="widget-clock">
          <section>
            <p>
              Time:
            </p>
            <p>
              Date:
            </p>
          </section>
          <section>
            <p>
              {this.padTime(time.getHours())}:{this.padTime(time.getMinutes())}:{this.padTime(time.getSeconds())}
            </p>
            <p>
              {daysArr[time.getDay()]} {monthArr[time.getMonth()]} {time.getDate()} {time.getFullYear()}
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default Clock;
