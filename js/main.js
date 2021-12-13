let selectedDate = new Date();
let allTime = [];
// GENERATE CALENDAR
let calArea = document.getElementById('calArea');




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