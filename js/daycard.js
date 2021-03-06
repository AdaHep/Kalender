/** Class keeping track of html and todos of a day card. */
class DayCard {
    /**
     * Create new day card and render it to calendar.
     * @param {boolean} active - Is in current month.
     */
    constructor(date, id, numOfTodos = 0) {
        this.date = new Date(date);
        calArea.insertAdjacentHTML(
            "beforeend",
            '<div id="' +
            id +
            '" class="day-card">' +
            '   <div class="day-card-top flex space-between">' +
            '       <div class="date-number">' +
            '           <p id="day-card-date">' +
            date.getDate() +
            "</p>" +
            "       </div>" +
            '       <div class="day-card-todo">' +
            (numOfTodos > 0
                ? '           <p id="todo-notification">' + numOfTodos + "</p>"
                : "") +
            "       </div >" +
            "   </div >" +
            "</div>"
        );
        this.htmlElement = document.getElementById(id);
        this.htmlElement["data-card"] = this;
        if(this.date.isToday())this.htmlElement.classList.add('current');
        this.htmlElement.addEventListener("click", function () {
            this["data-card"].select();
        });
    }
    /** Deselect previously selected date and select this one. */
    select() {
        if (selectedCard) selectedCard.deselect();
        selectedCard = this;
        selectedDate = this.date;
        this.htmlElement.classList.add("selected");
        calendar.renderTodos();
    }
    /** Deselect this card by removing CSS class .selected. */
    deselect() {
        this.htmlElement.classList.remove("selected");
    }
    /**
     * Add holiday class and label.
     * @param {string} holiday - Name of holiday.
     */
    setHoliday(holiday) {
        this.htmlElement.classList.add("holiday");
        this.htmlElement.insertAdjacentHTML(
            "beforeend",
            '<div class="day-card-bottom">' + holiday + "</div>"
        );
    }
    /** Add CSS class .red-day to this card. */
    setRedDay() {
        this.htmlElement.classList.add("red-day");
    }
}
