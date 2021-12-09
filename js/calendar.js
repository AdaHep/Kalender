
// GENERATE CALENDAR
let calArea = document.getElementById('calArea');
let dayCards;

/**
 * Render month containing selected date.
 * @param {Date} date - Selected date.
 */
function renderCalendar(date) {
    dayCards = [];
    let length = date.monthDays();
    let firstMon = date.getFirstOfDay(1);
    for (let i = 0; i < firstMon + length; i++) {
        dayCards.push(new DayCard(i >= firstMon));
    }

}


/** Class keeping track of html and events of a day card. */
class DayCard {
    /**
     * Create new day card and render it to calendar.
     * @param {boolean} active - Is in current month.
     */
    constructor(active = true) {

    }
    /**
     * Add event to day.
     * @param {Todo} todo
     */
    addTodo(todo){

    }
    /**
     * Update html according to card data.
     */
    refresh(){

    }
}

/**
 * Get number of days in current month.
 * @returns {number}
 */
Date.prototype.getMonthDays = function () {
    var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    return d.getDate();
}
/**
 * Get the date of the first instance of specified weekday in current month.
 * @param {number} day - 0-6 for Sunday-Monday
 * @returns {number} Date of month.
 */
Date.prototype.getFirstOfDay = function (day) {
    //Create Date object for first day of month
    var d = new Date(this.getFullYear(), this.getMonth(), 1);
    return (day - d.getDay()) % 7; //TODO: Plus or minus 1 or something? Should it be %6?
}