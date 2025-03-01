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
});

const dates = new Date();
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayIndex = dates.getDay();
const day = days[dayIndex];
const month = months[dates.getMonth()];
const date = dates.getDate();
const year = dates.getFullYear();
const time = dates.toLocaleTimeString('en-BD');

document.getElementById('get-date').innerHTML = `${day},<br>
 <span class='font-bold'>${month} ${date} ${year}</span>`;

const complete = document.querySelectorAll('.complete');
let nav = document.getElementById('nav-num');
let task = document.getElementById('task-num');
let navNum = parseInt(nav.innerText);
let taskNum = parseInt(task.innerText);

let count = 0;
for (let i = 0; i < complete.length; i++) {
    complete[i].addEventListener('click', function(event) {
        alert('Board updated successfully');
        event.target.setAttribute('disabled', 'true');
        event.target.classList.add('bg-gray-200');  
        count++; 
        navNum += 1;
        taskNum -= 1;
        nav.innerText = navNum;
        task.innerText = taskNum;

        if (count === complete.length) {
            alert('Congrats! You have completed all the current tasks');
        }
        const historyList = document.getElementById('ul');
        const cardDiv = event.target.parentElement.parentElement;
        const title = cardDiv.querySelector('h2');  
        const newLi = document.createElement('li');
        newLi.innerHTML = `<span class = 'bg-slate-200 inline-block mt-2 rounded-xl p-2 '> You have completed the task ${title.innerText} at ${time} </span>`;
        historyList.appendChild(newLi); 

        historyList.classList.remove('hidden');
    });
}

document.getElementById('blue-card').addEventListener('click', function() {
    window.location.href = 'another.html';
});

document.getElementById('history-btn').addEventListener('click', function() {
    document.getElementById('ul').classList.add('hidden');
});
