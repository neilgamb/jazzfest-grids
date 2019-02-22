import { data } from "./assets/data";
import moment from "moment";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function dayOfWeek(date) {
  return daysOfWeek[date.getDay()];
}

export function monthOfYear(date) {
  return monthsOfYear[date.getMonth()];
}

export function collateGrids(grids) {
  grids.map(grid => {
    let dates = [];

    grid.performances.map(show => {
      dates.push(show.dateShow);
    });

    let minDate = new Date(Math.min(...dates));

    if (minDate.getHours() <= 12) {
      minDate = moment(minDate).subtract(1, "days");
    }

    data.dates.map((date, i) => {
      if (moment(date.date).isSame(minDate, "day")) {
        grid.period = date.period;
        grid.day = i;
      }
    });
  });
  return grids;
}
