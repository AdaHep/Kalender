function setEvents() {
    const btnPrevMonth = document.getElementById('previous-month');
    const btnNextMonth = document.getElementById('next-month');
    const btnAddTodo = document.getElementById('add-todo-btn');
    const lblDay = document.getElementById('day');

    function prevMonth() {
        selectedDate.incrementMonth(-1);
        calendar.render(selectedDate);
    }
    function nextMonth() {
        selectedDate.incrementMonth(1);
        calendar.render(selectedDate);
    }
    function selectToday() {
        selectedDate = new Date();
        calendar.render(selectedDate);
    }
    function addTodo() {
        let todo = new Todo();
        calendar.addTodo(todo, selectedDate);
        calendar.render(selectedDate);
    }

    btnPrevMonth.addEventListener('click', prevMonth);
    btnNextMonth.addEventListener('click', nextMonth);
    lblDay.addEventListener('click', selectToday);
    btnAddTodo.addEventListener('click', addTodo);

    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowLeft':
                prevMonth();
                break;
            case 'ArrowRight':
                nextMonth();
                break;
            case 'Home':
                selectToday();
                break;
            case '+':
                addTodo();
                break;
        }
    })
}

