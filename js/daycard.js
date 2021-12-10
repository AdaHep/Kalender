/** Class keeping track of html and todos of a day card. */
class DayCard {
    /**
     * Create new day card and render it to calendar.
     * @param {boolean} active - Is in current month.
     */
    constructor(date, id, numOfTodos=0) {
        calArea.insertAdjacentHTML('beforeend',
            '<div id="' + id + '" class="day-card">' +
            '   <div class="day-card-top flex space-between">' +
            '       <div class="date-number">' +
            '           <p id="day-card-date">'+date.getDate()+'</p>' +
            '       </div>' +
            '       <div class="day-card-todo">' +
            '           <p id="todo-notification">'+numOfTodos+'</p>' +
            '       </div >' +
            '   </div >' +
            '</div>'
        );
        this.htmlElement = document.getElementById(id);


    }
    select() {
        this.htmlElement.classList.add('selected')
    }
    deselect(){
        this.htmlElement.classList.remove('selected');
    }
    /**
     * Add event to day.
     * @param {Todo} todo
     */
    addTodo(todo) {

    }
    /**
     * Update html according to card data.
     */
    refresh() {

    }
}