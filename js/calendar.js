class Calendar {
    constructor() {
        this.data = [];
    }
    /**
     * Render month containing selected date.
     */
    render(selectedDate) {
        let dayCards = [];
        let { year: year, month: month, date: selectedDay } = selectedDate.extract();
        let length = selectedDate.getMonthDays();
        let firstMon = selectedDate.getFirstOfDay(1);
        //Clone selectedDate for iteration
        let itDate = new Date(selectedDate);

        for (let i = -firstMon; i < length; i++) {
            itDate.setDate(i);
            let card = new DayCard(itDate, i);
            dayCards.push(card);
            
        }
    }
    getTodos(date) {
        let { year: year, month: month, date: dateNum } = date.extract();
        return this.data.magicGet(year).magicGet(month).magicGet(dateNum); //TODO: Kinda stupid to create all these empty arrays if there's nothing there
    }
    addTodo(todo, date){
        let { year: year, month: month, date: dateNum } = date.extract();
        let todos = this.data.magicGet(year).magicGet(month).magicGet(dateNum);
        todos.push(todo);
    }
}