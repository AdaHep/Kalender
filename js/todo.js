/**
 * Class representing a todo
 */
class Todo {
    /**
     * Add new todo to date.
     * @param {Date} date - Date and time of todo.
     */
    constructor(name, date = selectedDate) {
        this.name = name;
        this.date = date;
    }
    /**
     * Open edit menu in UI.
     */
    edit() {

    }
    /**
     * Set date and time of todo.
     * @param {Date} date 
     */
    setDate(date) {

    }
    /**
     * Delete todo, clean up and refresh calender view.
     */
    delete() {

    }
}

Todo.compare = function (todo0, todo1) {
    return todo0.date.getTime() - todo1.date.getTime();
}

let t = new Todo('asdfasdgsf')