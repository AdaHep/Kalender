class Calendar {
    constructor() {
        this.data = [];
    }
    /**
     * Render month containing selected date.
     */
    render() {
        let dayCards;
        let year = selectedDate.getFullYear(), month = selectedDate.getMonth();


        let length = selectedDate.getMonthDays();
        let firstMon = selectedDate.getFirstOfDay(1);
        for (let i = 0; i < firstMon + length; i++) {
            dayCards.push(new DayCard(i >= firstMon));
        }
    }
    getTodos(date) {
        let { year: year, month: month, dateNum: date } = date.extract();
        return this.data.magicGet(year).magicGet(month).magicGet(dateNum);
    }
    addTodo(date) {

    }
}