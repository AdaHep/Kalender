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
 * @param {number} day - 0-6 for Sunday-Monday.
 * @returns {number} Date of month.
 */
Date.prototype.getFirstOfDay = function (day) {
    //Create Date object for first day of month
    let d = new Date(this.getFullYear(), this.getMonth(), 1);
    return (day - d.getDay() + 7) % 7; //+7 necassary to avoid nedagtive numbers
}
/**
 * Get weekday of the dateNumth of current month.
 * @param {number} dateNum 
 * @returns {number} 0-6 for Sunday-Monday.
 */
Date.prototype.getDayOfDate=function(dateNum){
    let d = new Date(this.getFullYear(), this.getMonth(), dateNum);
    return d.getDay();
}

/**
 * Extracts year, month, date, day, hours and minutes into an object.
 * Convenient for assigning multiple variables at a time without having to to call all or some of these functions separately.
 * @returns {Object}
 */
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


Date.prototype.incrementMonth = function (i){
    let newMonth = this.getMonth() +i;
    this.setMonth(newMonth);
}