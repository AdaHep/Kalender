let selectedDate = new Date();
let allTime = [];
// GENERATE CALENDAR
let calArea = document.getElementById('calArea');







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

/**
 * Get this[key]. If empty, set to def before returning.
 * @param {number} key - Index.
 * @param {*} [def=new this.constructor()] - Default value to add if this[i] is empty.
 * @returns {*} - this[key] or def
 */
 Object.prototype.magicGet = function (key, def = new this.constructor()) {
    if (this[key] === undefined) {
        this[key] = def;
    }
    return this[key];
}