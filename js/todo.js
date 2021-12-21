/**
 * Class representing a todo
 */
class Todo extends Object {
    /**
     * Create new todo.
     * @param {string} name - Name of todo.
     * @param {Date} date - Date and time of todo.
     */
    constructor(name = 'Namnlös todo', date = selectedDate) {
        super();
        this.name = name;
        this.date = new Date(date);
        this.isMoving = false;
        this.isAllday = false;
    }
    /**
     * Render this todo to sidebar.
     * @param {string} id 
     * @param {HTMLElement} todolist 
     */
    render(id, todolist) {
        let { year: year, month: month, date: dateNum, hours: hours, minutes: minutes } = this.date.extract();
        let dateStr = this.isMoving ? 'Välj datum' : year + ' - ' + numToStr(month + 1, 2) + ' - ' + numToStr(dateNum, 2) ;
        let timeStr = numToStr(hours, 2) + ':' + numToStr(minutes, 2);
        let classes = 'todo-item flex space-around' + (this.isMoving ? ' moving' : '');

        todolist.insertAdjacentHTML('beforeend',
            '   <div id="' + id + '" class="' + classes + '">' +
            '       <div class="todo-info flex justify-center column text-center">' +
            '           <p class="todo-date">' + dateStr + ' | <input type="time" class="time" value="' + timeStr + '"></p>' +
            '           <input type="text" class="name" value="' + this.name + '">' +
            '       </div>' +
            '       <div class="todo-item-icons flex column space-around">' +
            '           <i class="far fa-trash-alt btn-delete"></i>' +
            '           <img class="btn-move" src="./icons/edit-date.svg" alt="ändra datum" title="Flytta till annat datum">' +
            '       </div>' +
            '   </div>'
        );

        let htmlElement = document.getElementById(id);
        //Make sure the html element knows which Todo object it refers to
        htmlElement['data-obj'] = this;

        //Event to change name of todo
        htmlElement.getElementsByClassName('name')[0].addEventListener('change', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.name = this.value;
            calendar.saveToLS();
        });

        //Event to change time of todo
        htmlElement.getElementsByClassName('time')[0].addEventListener('change', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            let [hours, minutes] = this.value.split(':');
            todo.date.setHours(hours);
            todo.date.setMinutes(minutes);
            calendar.saveToLS();
        });

        //Event to delete todo
        htmlElement.getElementsByClassName('btn-delete')[0].addEventListener('click', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.delete();
        });

        //Event to move todo to another date
        htmlElement.getElementsByClassName('btn-move')[0].addEventListener('click', function () {
            let todoEl = this.closest('.todo-item');
            let todo = todoEl['data-obj'];
            todo.isMoving = !todo.isMoving;
            if (todo.isMoving) {
                todoEl.classList.add('moving');
                calendar.movingTodos.add(todo);
                todo.delete();
            }
            else {
                todoEl.classList.remove('moving');
                calendar.movingTodos.delete(todo);
                todo.date.steal(selectedDate, ['FullYear', 'Month', 'Date']);
                calendar.addTodo(todo);
                calendar.render(selectedDate);
            }
        });
    }

    /**
     * Set date and time of todo.
     * @param {Date} date 
     */
    setDate(date) {

    }
    /** Delete todo from calendar, clean up and refresh calender view. */
    delete() {
        let todos = calendar.getTodos(this.date);
        if (!todos) {
            throw new Error("Could not delete todo: it doesn't seem to exist.");
        }
        let index = todos.indexOf(this);
        todos.splice(index, 1);
        calendar.render(selectedDate);
    }
}
/**
 * Compare two Todo objects by time.
 * @param {Todo} todo0 
 * @param {Todo} todo1 
 * @returns {Number} Difference between times unless exactly one is all day, in which case that one will be considered less.
 */
Todo.compare = function (todo0, todo1) {
    if (todo0.isAllday === todo1.isAllday) {
        return todo0.date.getTime() - todo1.date.getTime();
    }
    return todo0.isAllday ? -1 : 1;
}

