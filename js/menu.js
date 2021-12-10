const calendarSlide = document.getElementById('calArea'),
showCalendar = document.getElementById('calendar-btn'),
closeCalendar = document.getElementById('hide')

showCalendar.addEventListener('click', ()=>{
    calendarSlide.classList.toggle('show')
})
closeCalendar.addEventListener('click', ()=>{
    calendarSlide.classList.remove('show')
})
