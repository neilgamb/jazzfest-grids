const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function dayOfWeek(date){
    return daysOfWeek[date.getDay()]
}

export function monthOfYear(date){
    return monthsOfYear[date.getMonth()];
}

export function collateGrids(grids){
    grids.map(grid => {
        let dates = [];
        grid.performances.map(show => {
            dates.push(show.dateShow)
        })
        console.log(new Date(Math.min(...dates)));
    });
    return grids;
}