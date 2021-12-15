class Calendar {
    constructor(calArea) {
        this.calArea = calArea;
        this.data = [];
    }
    /**
     * Render month containing selected date.
     */
    render(selectedDate) {

        let dayCards = [];
        let { year: year, month: month, date: selectedDay } = selectedDate.extract();
        let length = selectedDate.getMonthDays() + 1;
        let firstDay = selectedDate.getDayOfDate(1);

        this.calArea.innerHTML = '';
        document.getElementById('month-title').innerHTML = selectedDate.getMonthName() + ' ' + selectedDate.getFullYear();
        
        for (let i = 1; i < firstDay; i++) {
            this.calArea.insertAdjacentHTML('beforeend','<div class="empty-card"></div>');
        }
        for (let i = 1; i < length; i++) {
            //Clone selectedDate for iteration
            let itDate = new Date(selectedDate);
            itDate.setDate(i);
            let card = new DayCard(itDate, 'day' + i);
            dayCards.push(card);
            if (i === selectedDay) {
                card.select();
            }
        }
    }
    getTodos(date) {
        let { year: year, month: month, date: dateNum } = date.extract();
        return this.data.magicGet(year).magicGet(month).magicGet(dateNum); //TODO: Kinda stupid to create all these empty arrays if there's nothing there
    }
    addTodo(todo, date) {
        let { year: year, month: month, date: dateNum } = date.extract();
        let todos = this.data.magicGet(year).magicGet(month).magicGet(dateNum);
        todos.push(todo);
    }
}