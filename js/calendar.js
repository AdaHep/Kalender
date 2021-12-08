// CHECK LEAP YEAR


// GENERATE CALENDAR
let calArea = document.getElementById('calArea');
function renderCalendar(date) {
    let length = date.monthDays();
    let firstMon = date.getFirstOfDay(1);
    for (let i = 0; i < firstMon; i++) {

    }
    for (let i = firstMon; i < firstMon + length; i++) {

    }

}

class DayCard {
    constructor() {

    }
}


Date.prototype.getMonthDays = function () {
    var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    return d.getDate();
}

Date.prototype.getFirstOfDay = function (day) {
    //Create Date object for for first day of month
    var d = new Date(this.getFullYear(), this.getMonth(), 1);
    return (day - d.getDay()) % 7; //TODO: Plus or minus 1 or something? Should it be %6?
}