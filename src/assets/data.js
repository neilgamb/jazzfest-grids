import { venues } from "./venues.js";

export const data = {
  dates: [
    { date: new Date(2019, 3, 25), period: 0 },
    { date: new Date(2019, 3, 26), period: 0 },
    { date: new Date(2019, 3, 27), period: 0 },
    { date: new Date(2019, 3, 28), period: 0 },
    { date: new Date(2019, 3, 29), period: 1 },
    { date: new Date(2019, 3, 30), period: 1 },
    { date: new Date(2019, 4, 1), period: 1 },
    { date: new Date(2019, 4, 2), period: 2 },
    { date: new Date(2019, 4, 3), period: 2 },
    { date: new Date(2019, 4, 4), period: 2 },
    { date: new Date(2019, 4, 5), period: 2 }
  ],
  grids: [
    {
      venue: venues["cafeIstanbul"],
      performances: [
        {
          band: "Honey Island Swamp Band",
          dateShow: new Date(2019, 3, 25, 22),
          dateDoors: null,
          tixPrice: 25,
          tixLink: "https://www.brownpapertickets.com/event/4082197"
        },
        {
          band:
            "Golden Gate Wingmen featuring John Kadlecik, Jeff Chimenti, Reed Mathis, Jay Lane",
          dateShow: new Date(2019, 3, 26, 1, 30),
          dateDoors: new Date(2019, 3, 25, 23, 59),
          tixPrice: 40,
          tixLink: "https://www.brownpapertickets.com/event/4048894"
        }
      ]
    },
    {
      venue: venues["maison"],
      performances: [
        {
          band:
            "Blue Plate Special featuring Will Bernard, Stanton Moore, John Medeski, Andy Hess, Skerik and DJ Logic",
          dateShow: new Date(2019, 3, 28, 1, 30),
          dateDoors: new Date(2019, 3, 27, 23, 45),
          tixPrice: 35,
          tixLink:
            "https://www.eventbrite.com/e/boom-boom-room-presents-blue-plate-special-tickets-55809445554"
        },
        {
          band: "Chance Bushman & The Ibervillianaires",
          dateShow: new Date(2019, 3, 27, 13),
          dateDoors: null,
          tixPrice: null,
          tixLink: null
        },
        {
          band: "Smokin' Time Jazz Club",
          dateShow: new Date(2019, 3, 27, 19),
          dateDoors: null,
          tixPrice: null,
          tixLink: null
        }
      ]
    }
  ]
};
