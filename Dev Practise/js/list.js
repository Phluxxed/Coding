var todos = ["Code", "Game", "Drink coffee"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        newTodo();
    }
    else if (input === "delete") {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Okay, you quit the app.");


//Associated functions for Todo List
function listTodos() {
    console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
}

function newTodo() {
    //ask for new todo
        var newTodo = prompt("Please enter the new Todo for your list");
        //add to todos array
        todos.push(newTodo);
        console.log("Added item to list");
}

function deleteTodo() {
    //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //delete that specific todo
        //splice
        todos.splice(index,1);
        console.log("Deleted item from list");
}