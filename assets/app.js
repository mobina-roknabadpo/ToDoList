const task = document.getElementById('task');
const des = document.getElementById('description');
const date = document.getElementById('date');
const input = document.getElementById('search');
const showItem = document.querySelector('.show-item');
const submit = document.getElementById('form');
(function () {
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        const divParent = document.createElement('div');
        divParent.className = "list";
        const divChild = document.createElement('div');
        divChild.className = "on";
        let newDate = new Date(date.value);
        const days = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];
        divChild.innerHTML = `<h3> <span style="color: #2d67b7">Task Name:</span> ${task.value}</h3>
<h3><span style="color: #2d67b7">Description:</span> ${des.value}</h3>
<h3><span style="color: #2d67b7">Date:</span> ${[newDate.getDate(), newDate.getMonth(), newDate.getFullYear()].join('-')}</h3>
<h3><span style="color: #2d67b7; font-size: 1.1rem">Day:</span> ${days[newDate.getDay()]}</h3>
`;
        const trashIcon = document.createElement('i');
        trashIcon.className = "fa-solid fa-trash";
        trashIcon.style.color = '#3a5a9b';
        trashIcon.addEventListener('click', () => {
            divParent.remove();
        })
        divParent.appendChild(divChild);
        divParent.appendChild(trashIcon);
        showItem.appendChild(divParent);

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
                let match = item.firstChild;
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

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    })
})()




