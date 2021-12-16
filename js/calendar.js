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
        let firstDay = (selectedDate.getDayOfDate(1) + 6) % 7; //Extra math in order to convert Sun-Mon into Mon-Sun

        this.calArea.innerHTML = '';
        document.getElementById('month-title').innerHTML = selectedDate.getMonthName() + ' ' + selectedDate.getFullYear();

        for (let i = 0; i < firstDay; i++) {
            this.calArea.insertAdjacentHTML('beforeend', '<div class="empty-card"></div>');
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

        this.renderTodos();

        //Set holidays and red days (this is done separately so calendar can be rendered without having to wait for sholiday)
        fetch('https://sholiday.faboul.se/dagar/v2.1/' + year + '/' + (month + 1))
            .then((response) => { return response.json(); })
            .then((data) => {
                let days = data.dagar;
                for (let i in days) {
                    let day = days[i], card = dayCards[i];
                    let holiday = day.helgdag;

                    if (holiday) {
                        card.setHoliday(holiday);
                    }
                    if (day['röd dag'] == 'Ja') {
                        card.setRedDay();
                    }
                }
            })
    }
    renderTodos() {

        document.getElementById('todolist').innerHTML = '';
        let todos = this.getTodos(selectedDate);
        if (todos) {
            let i = 0;
            for (let todo of todos) {
                todo.render('td' + i++);
            }
        }
    }
    getTodos(date) {
        let { year: year, month: month, date: dateNum } = date.extract();
        return this.data.magicGet(year).magicGet(month)[dateNum]; //Last one is ordinary [] in order to prevent incorrect usage such as trying to add stuff to the actual data this way. That is, getTodos is guaranteed to return undefined if there's no array for date.
    }
    addTodo(todo) {
        let { year: year, month: month, date: dateNum } = todo.date.extract();
        let todos = this.data.magicGet(year, true).magicGet(month, true).magicGet(dateNum, true);
        todos.push(todo);
    }
}