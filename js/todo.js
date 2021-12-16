/**
 * Class representing a todo
 */
class Todo {
    /**
     * Add new todo to date.
     * @param {Date} date - Date and time of todo.
     */
    constructor(name = 'Namnlös todo', date = selectedDate) {
        this.name = name;
        this.date = new Date(date);
    }
    render(id) {
        const todolist = document.getElementById('todolist');
        let { year: year, month: month, date: dateNum } = this.date.extract();

        todolist.insertAdjacentHTML('beforeend',
            '   <div id="' + id + '" class="todo-item flex space-around">' +
            '       <div class="todo-info flex justify-center column text-center">' +
            '           <p class="todo-date">' + year + ' - ' + (month + 1) + ' - ' + dateNum + ' | Hela dagen</p>' +
            '           <h5>' + this.name + '</h5>' +
            '       </div>' +
            '       <div class="todo-item-icons flex column space-around">' +
            '           <i class="far fa-trash-alt btn-delete"></i>' +
            '       </div>' +
            '   </div>'
        );
        this.htmlElement = document.getElementById(id);
        this.htmlElement['data-obj'] = this;
        this.htmlElement.getElementsByClassName('btn-delete')[0].addEventListener('click', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.delete();
        });
    }

    /**
     * Set date and time of todo.
     * @param {Date} date 
     */
    setDate(date) {

    }
    /**
     * Delete todo from calendar, clean up and refresh calender view.
     */
    delete() {

    }
}
/**
 * Compares two Todo objects by time.
 * @param {Todo} todo0 
 * @param {Todo} todo1 
 * @returns {Number} Difference between times.
 */
Todo.compare = function (todo0, todo1) {
    return todo0.date.getTime() - todo1.date.getTime();
}