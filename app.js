'use strict'

const createdTask = document.querySelector('.created');
const completedTask = document.querySelector('.completed');

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add')) {
        const newTaskItem = `<li class="task__item">
            <img src="pic/circle-regular.svg" alt="" class="unchecked">
            <input type="text">
            <img src="pic/circle-plus-solid.svg" alt="" class="add">
        </li>`;
        
        createdTask.insertAdjacentHTML('beforeend',newTaskItem);
    }
});

createdTask.addEventListener('click', function (e) {
    if (e.target.classList.contains('unchecked')) {
        const taskItem = e.target.closest('.task__item');
        const taskMessage = taskItem.querySelector('input').value;

        if (createdTask.childElementCount > 1 && taskMessage !== '') {
            taskItem.remove();

            const completedTaskStr = `<li class="task__item">
                <img src="pic/check-circle-regular.svg" alt="">
                <p class="task__message">${taskMessage}</p>
                <img src="pic/circle-minus-solid.svg" alt="" class="delete">
            </li>`;
            completedTask.insertAdjacentHTML('beforeend', completedTaskStr);
        }
    }
});

completedTask.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const completedTaskItem = e.target.closest('.task__item');
        completedTaskItem.remove();
    }
});