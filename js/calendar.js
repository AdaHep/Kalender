

class Calendar {
    constructor() {
        this.data = [];
    }
    /**
     * Render month containing selected date.
     */
    render(){
        let dayCards;
        let year = selectedDate.getFullYear(), month = selectedDate.getMonth();
        
        
        /* let length = selectedDate.monthDays();
        let firstMon = selectedDate.getFirstOfDay(1);
        for (let i = 0; i < firstMon + length; i++) {
            dayCards.push(new DayCard(i >= firstMon));
        } */
    }
    getTodos(year, month, day) {
        return this.data.magicGet(year).magicGet(month).magicGet(day);
    }
}

/**
 * Get this[i]. If empty, set to def before returning.
 * @param {number} i - Index.
 * @param {*} [def=[]] - Default value to add if this[i] is empty.
 * @returns {*} - 
 */
Array.prototype.magicGet = function (i, def = []) {
    if (this[i] === undefined) {
        this[i] = def;
    }
    return this[i];
}