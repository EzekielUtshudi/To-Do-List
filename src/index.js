import './style.css';
import Icon from '../img/more.png';

const ul = document.querySelector('.todo');

const tasks = [
  {
    description: 'clean house',
    completed: true,
    index: 0,
  },
  {
    description: 'Attend morning session',
    completed: false,
    index: 1,
  },
  {
    description: 'Submit work',
    completed: false,
    index: 2,
  },
];

function taskList() {
  tasks.forEach((task) => {
    const input = document.createElement('input');
    input.classList.add('check');
    input.type = 'checkbox';
    input.name = 'check1';

    const dots = document.createElement('img');
    dots.src = Icon;

    const li = document.createElement('li');
    li.innerText = task.description;
    li.appendChild(dots);
    li.appendChild(input);
    ul.appendChild(li);
  });
}

taskList();