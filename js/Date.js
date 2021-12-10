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
    return (day - d.getDay() + 7) % 7; //+7 necassary to avoid nedagtive numbers
}


Date.prototype.extract = function () {
    return {
        year: this.getFullYear(),
        month: this.getMonth(),
        date: this.getDate(),
        day: this.getDay(),
        hour: this.getHours(),
        minutes: this.getMinutes()
    };
}