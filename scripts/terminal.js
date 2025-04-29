// To-do: Fix bug -> when pressing enter only one line appears; and it appears next to the first input field not below it

function terminalInput() {
    const input = document.querySelector(".input");
    const main = document.getElementById("main");
    let childDiv = document.createElement("div");
    let childInput = document.createElement("input");

    childDiv.classList.add("idk");
    childDiv.innerHTML = ">:";

    childInput.type = "text";
    childInput.classList.add("input");

    input.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            console.log("working");
            main.appendChild(childDiv);
            main.appendChild(childInput);
        }
    })
}

terminalInput();