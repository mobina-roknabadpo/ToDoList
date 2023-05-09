const buttons = document.querySelector(".property").querySelectorAll("button");
const task = document.getElementById('task');
const des = document.getElementById('description');
const date = document.getElementById('date');
let input = document.getElementById('search');
const showItem = document.querySelector('.show-item');
const submit = document.getElementById('form');
const display = document.querySelector('.display');
(function () {
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        const div = document.createElement('div');
        div.className = "on";
        const header1 = document.createElement('h3');
        header1.innerHTML = `<span style="color: #2d67b7">Task Name:</span> ${task.value}`;
        const header2 = document.createElement('h3');
        header2.innerHTML = `<span style="color: #2d67b7">Description:</span> ${des.value}`;
        const header3 = document.createElement('h3');
        let newDate = new Date(date.value);
        header3.innerHTML = `<span style="color: #2d67b7">Date:</span> ${[newDate.getDate(), newDate.getMonth(), newDate.getFullYear()].join('-')}`;
        const header4 = document.createElement('h3');
        const days = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];
        header4.innerHTML = `<span style="color: #2d67b7; font-size: 1.1rem">Day:</span> ${days[newDate.getDay()]}`;
        div.appendChild(header1);
        div.appendChild(header2);
        div.appendChild(header3);
        div.appendChild(header4);
        showItem.appendChild(div);
        //after add tp do list empty fields
        task.value = "";
        des.value = "";
        date.value = "";
    })

    input.addEventListener('keydown', (e) => {
        let search = input.value.toLowerCase();
        if (e.key === "Enter") {
            const div = showItem.querySelectorAll('div');
            div.forEach((item) => {
                let match = item.getElementsByTagName('h3')[0];
                console.log(match)
                if (match) {
                    let value = match.textContent || match.innerHTML;
                    if (value.toLowerCase().indexOf(search) > -1) {
                        item.style.display = "flex";
                        item.style.transition = "all ease 1s";
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        }
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.className === 'max') {
                max();
            } else if (button.className === 'min') {
                min();
            } else if (button.className === 'average') {
                average();
            } else if (button.className === 'sort') {
                sort();
            } else if (button.className === 'clear') {
                clear();
            }
        })
    })

    const max = () => {
        const maximum = [];
        const div = showItem.querySelectorAll('div');
        div.forEach(item => {
            let age = +item.getElementsByTagName('h3')[1].textContent;
            maximum.push(age);
        })
        display.innerHTML = `Maximum: ${Math.max(...maximum)}`;
    }

    const min = () => {
        const minimum = [];
        const div = showItem.querySelectorAll('div');
        div.forEach(item => {
            let age = +item.getElementsByTagName('h3')[1].textContent;
            minimum.push(age);
        })
        console.log(minimum)
        display.innerHTML = `Minimum: ${Math.min(...minimum)}`;
    }

    const average = () => {
        let count = 0;
        let sum = 0;
        const div = showItem.querySelectorAll('div');
        div.forEach(item => {
            sum += +item.getElementsByTagName('h3')[1].textContent;
            count++;
        })
        let avg = sum / count;
        if (!isNaN(avg)) {
            display.innerHTML = `Average: ${Math.floor(avg)}`;
        }
    }

    const sort = () => {
        const div = showItem.querySelectorAll('div');

    }

    const clear = () => {
        showItem.innerHTML = "";
        display.innerHTML = "";
    }

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    })
})()




