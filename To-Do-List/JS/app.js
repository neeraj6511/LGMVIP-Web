let inputField = document.getElementById("inputField");

let addToDoButton = document.getElementById("addToDo");

let toDoContainer = document.getElementById("toDoContainer");

// Add item in list
addToDoButton.addEventListener('click', function () {
    var list = document.createElement('p');     // add paragraph tag to add item
    list.classList.add('input-task');       // add class name for styling
    list.innerText = inputField.value;      // store value in list
    toDoContainer.appendChild(list);        // add value in list
    inputField.value = '';      // after adding input box will get empty

    // Draw line over list item
    list.addEventListener('click', function () {
        list.style.textDecoration = 'line-through';
    });

    // Remove the list item on double click
    list.addEventListener('dblclick', function () {
        toDoContainer.removeChild(list);
    });
});