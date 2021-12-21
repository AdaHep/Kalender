let calendar;
let selectedDate = new Date();
let selectedCard;
const monthNames = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December'
];

let verbs = ['tvätta'], nouns = ['katt'];
fetch('verbs.txt')
    .then(response => response.text())
    .then((data) => {
        verbs = data.split('\n');
    });
fetch('nouns.txt')
    .then(response => response.text())
    .then((data) => {
        nouns = data.split('\n');
    });

window.onload = function () {
    // Create and render calendar
    let calArea = document.getElementById('calArea');
    calendar = new Calendar(calArea);
    calendar.render(selectedDate);
    setEvents();
}

/**
 * Convert num to string of length characters by adding zeros or cutting.
 * @param {number|string} num 
 * @param {number} [length]
 * @returns {string}
 */
function numToStr(num, length) {
    let baseStr = '' + num;
    let str = '';
    length = length === undefined ? baseStr.length : length;
    for (let i = baseStr.length - 1; str.length < length; i--) {
        str = (baseStr[i] || 0) + str;
    }
    return str;
}

/**
 * Get this[key]. If empty, set to def before returning.
 * @param {number} key - Index.
 * @param {Boolean} [addDef=false] - Given that this[key]===undefined: Whether or not to set this[key] to def.
 * @param {*} [def=new this.constructor()] - Default value to add if this[i] is empty.
 * @returns {*} - this[key] or def
 */
Object.prototype.magicGet = function (key, addDef = false, def = new this.constructor()) {
    let val = this[key];
    if (val === undefined) {
        val = def;
        if (addDef) this[key] = def;
    }
    return val;
}


Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}