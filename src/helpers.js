const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function dayOfWeek(date){
    return daysOfWeek[date.getDay()]
}

export function monthOfYear(date){
    return monthsOfYear[date.getMonth()];
}

export function collateGrids(grids){
    grids.map((grid)=>{
        grid.performaces.map((show)=>{
            console.log(show.band, show.dateShow);
        })
    })
    return grids;
}