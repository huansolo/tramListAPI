const tram1 = require("./tram_timetable/trams/tram1");
const tram2 = require("./tram_timetable/trams/tram2");
const tram2a = require("./tram_timetable/trams/tram2a");
const tram3 = require("./tram_timetable/trams/tram3");
const tram4 = require("./tram_timetable/trams/tram4");
const tram4a = require("./tram_timetable/trams/tram4a");
const tram7 = require("./tram_timetable/trams/tram7");

const trams = [tram1, tram2, tram2a, tram3, tram4, tram4a, tram7];

tramsMap = {};
trams.forEach((item, i) => {
  tramsMap[`tram${item.number}`] = i;
});

module.exports = trams;
