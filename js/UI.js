function setEvents() {
    const btnPrevMonth = document.getElementById('previous-month');
    const btnNextMonth = document.getElementById('next-month');
    const btnAddTodo = document.getElementById('add-todo-btn');

    btnPrevMonth.addEventListener('click', function () {
        selectedDate.incrementMonth(-1);
        calendar.render(selectedDate);
    });
    btnNextMonth.addEventListener('click', function () {
        selectedDate.incrementMonth(1);
        calendar.render(selectedDate);
    });

    btnAddTodo.addEventListener('click', function () {
        let todo = new Todo();
        calendar.addTodo(todo, selectedDate);
        calendar.render(selectedDate);
    });
}

