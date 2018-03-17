class Clock {
  constructor() {
    const now = new Date();
    this.hours = now.getHours() % 12;
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let timeArr = [this.hours, this.minutes, this.seconds];
    console.log(timeArr.map(this._doubleDigitDisplay).join(":"));
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1;
      this.minutes = 0;
    }
    if (this.minutes === 60 ) {
      this.hours = (this.hours + 1) % 12;
      this.minutes = 0;
    }

    this.printTime();
  }

  _doubleDigitDisplay(num) {
    return ('0' + num).slice(-2);
  }
}
