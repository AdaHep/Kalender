function changeMonth(){
    const prevMonth = document.getElementById('previous-month');
    prevMonth.addEventListener('click', function () 
    {
        selectedDate.incrementMonth(-1);
        calendar.render(selectedDate);
    }
    );
    const nextMonth = document.getElementById('next-month')
    nextMonth.addEventListener('click', function()
    {
        selectedDate.incrementMonth(1);
        calendar.render(selectedDate);
    }
    );
}

