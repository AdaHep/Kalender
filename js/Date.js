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
    return (day - d.getDay() + 7) % 7; //+7 necessary to avoid negative numbers
}
/**
 * Get weekday of the dateNumth of current month.
 * @param {number} dateNum 
 * @returns {number} 0-6 for Sunday-Monday.
 */
Date.prototype.getDayOfDate = function (dateNum) {
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
        hours: this.getHours(),
        minutes: this.getMinutes()
    };
}

/**
 * Increments month by i. Keeps date of month if possible, otherwise sets it to last of new month.
 * @param {Number} i - Increment.
 * @returns {Date} This Date object.
 */
Date.prototype.incrementMonth = function (i) {
    let date = this.getDate()
    let newMonth = this.getMonth() + i;

    //Temporarily set to first day of month to make sure we end up in the correct month
    this.setDate(1);
    this.setMonth(newMonth);
    //If date is not available for new month, set it to last day instead
    this.setDate(Math.min(date, this.getMonthDays()));
    return this;
}

/**
 * Get name of month from monthNames.
 * @returns {String}
 */
Date.prototype.getMonthName = function () {
    return monthNames[this.getMonth()];
}

/**
 * Quick way to copy multiple attributes from from to this.
 * @param {Date} from - Date to steal from.
 * @param {String[]} attribs - Names of get/set methods for attributes, excluding 'get'/'set'.
 */
Date.prototype.steal = function (from, attribs) {
    for (let att of attribs) {
        this['set' + att](from['get' + att]());
    }
}