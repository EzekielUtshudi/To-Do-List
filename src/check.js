const check = (checkbox, item) => {
  if (checkbox.checked) {
    checkbox.nextElementSibling.style.textDecoration = 'line-through';
    item.completed = true;
  } else {
    checkbox.nextElementSibling.style.textDecoration = 'none';
    item.completed = false;
  }
};

export default check;
