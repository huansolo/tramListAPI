module.exports = class {
  constructor({ number, stops, intervals, weekdays, saturdays, sundays }) {
    this.number = number;
    this.stops = this.processStops(stops);
    this.intervals = this.processIntervals(intervals);
    this.weekdays = this.processDepartures(weekdays.departures);
    this.saturdays = saturdays.departures
      ? this.processDepartures(saturdays.departures)
      : null;
    this.sundays = sundays.departures
      ? this.processDepartures(sundays.departures)
      : null;
  }

  processStops(stops = "") {
    stops = stops.split(",").map(stop => stop.trim());
    const forward = stops;
    const back = [...stops].reverse();
    return { forward, back };
  }
  processIntervals(intervals = []) {
    let forward = intervals;
    let back = [...intervals].reverse();
    return { forward, back };
  }
  processDepartures({ forward = [], back = [] }) {
    const stringToHours = string => {
      let departures = string.split(",").map(item => {
        let HoursMinutes = item.split("-").map(item => parseInt(item));
        return HoursMinutes;
      });
      return departures;
    };
    return {
      forward: stringToHours(forward),
      back: stringToHours(back)
    };
  }
};
