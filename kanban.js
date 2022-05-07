const todos = document.querySelectorAll(".todo");

todos.forEach(todo => {
    todos.addEventListener('dragstart',dragStart);

});

