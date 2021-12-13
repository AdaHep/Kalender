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
            let card = new DayCard(i >= firstMon);
            dayCards.push(card);
            card.render();
        }
    }
    getTodos(date) {
        let { year: year, month: month, dateNum: date } = date.extract();
        return this.data.magicGet(year).magicGet(month).magicGet(dateNum); //TODO: Kinda stupid to create all these empty arrays if there's nothing there
    }
    addTodo(todo, date) {
        let { year: year, month: month, dateNum: date } = date.extract();
        let todos = this.data.magicGet(year).magicGet(month).magicGet(dateNum);
        todos.push(todo);
    }
}