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
        this.isMoving = false;
    }
    render(id, todolist) {
        let { year: year, month: month, date: dateNum } = this.date.extract();

        todolist.insertAdjacentHTML('beforeend',
            '   <div id="' + id + '" class="todo-item flex space-around' + (this.isMoving ? ' moving' : '') + '">' +
            '       <div class="todo-info flex justify-center column text-center">' +
            '           <p class="todo-date">' + year + ' - ' + (month + 1) + ' - ' + dateNum + ' | Hela dagen</p>' +
            '           <input type="text" class="name" value="' + this.name + '">' +
            '       </div>' +
            '       <div class="todo-item-icons flex column space-around">' +
            '           <i class="far fa-trash-alt btn-delete"></i>' +
            '           <i class="fab fa-buromobelexperte btn-move" title="Flytta till annat datum"></i>' +
            '       </div>' +
            '   </div>'
        );
        this.htmlElement = document.getElementById(id);
        this.htmlElement['data-obj'] = this;

        this.htmlElement.getElementsByClassName('name')[0].addEventListener('change', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.name = this.value;
        })

        this.htmlElement.getElementsByClassName('btn-delete')[0].addEventListener('click', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.delete();
        });

        this.htmlElement.getElementsByClassName('btn-move')[0].addEventListener('click', function () {
            let todo = this.closest('.todo-item')['data-obj'];
            todo.isMoving = !todo.isMoving;
            if (todo.isMoving) {
                todo.htmlElement.classList.add('moving');
                calendar.movingTodos.add(todo);
                todo.delete();
            }
            else {
                todo.htmlElement.classList.remove('moving');
                calendar.movingTodos.delete(todo);
                todo.date = selectedDate;
            }
        })
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
        let todos = calendar.getTodos(this.date);
        if (!todos) {
            throw new Error("Could not delete todo: it doesn't seem to exist.");
        }
        let index = todos.indexOf(this);
        todos.splice(index, 1);
        calendar.renderTodos();
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

