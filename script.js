const colorBtn = document.getElementById('color-btn');
const bodyPart = document.getElementById('body');
const colorList = ['bg-teal-100', 'bg-orange-100', 'bg-blue-100', 'bg-yellow-100'];
function clickColor() {
    let arrayNumber = Math.floor(Math.random() * colorList.length);
    return colorList[arrayNumber];
}
colorBtn.addEventListener('click', function () {
    const selectColor = clickColor();

    bodyPart.classList.remove(...colorList);
    bodyPart.classList.add(selectColor);


})
// get date
const dates = new Date();
const days = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri','sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayIndex = dates.getDay();
const day = days[dayIndex];
const month = months[dates.getMonth()];
const date = dates.getDate();
const year = dates.getFullYear();
// time 
const time = dates.toLocaleTimeString('en-BD');

document.getElementById('get-date').innerHTML = `${day},<br>
 <span class= 'font-bold'>${month} ${date} ${year}</span>`;