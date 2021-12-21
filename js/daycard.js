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
    this.htmlElement.addEventListener("click", function () {
      this["data-card"].select();
    });
  }
  /**
   * Deselect previously selected date and select this one.
   */
  select() {
    if (selectedCard) selectedCard.deselect();
    selectedCard = this;
    selectedDate = this.date;
    this.htmlElement.classList.add("selected");
    calendar.renderTodos();
  }
  deselect() {
    this.htmlElement.classList.remove("selected");
  }

  setHoliday(holiday) {
    this.htmlElement.classList.add("holiday");
    this.htmlElement.insertAdjacentHTML(
      "beforeend",
      '<div class="day-card-bottom">' + holiday + "</div>"
    );
  }

  setRedDay() {
    this.htmlElement.classList.add("red-day");
  }

  /**
   * Add todo to day.
   * @param {Todo} todo
   */
  addTodo(todo) {}
  /**
   * Update html according to card data.
   */
  refresh() {}
}
