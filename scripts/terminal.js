import { commandMap } from "../database/commands.js";

function addInputLine() {
    // This function holds the logic of adding other lines on the terminal 
    // below the current line when the user press "enter"

    const main = document.getElementById("main");
    const outerWrapper = document.createElement("div"); // outerWrapper contains the innerWrapper(this is only useful because of the output div that need to sit below idk and input field)
    const innerWrapper = document.createElement("div"); // innerWrapper is a flex container for idk and input field
    let childDiv = document.createElement("div");
    let childInput = document.createElement("input");
    let childOutput = document.createElement("div");

    innerWrapper.style.display = "flex";
    innerWrapper.classList.add("inner-wrapper");
    outerWrapper.classList.add("outer-wrapper");

    childDiv.classList.add("idk");
    childDiv.innerHTML = ">:";
    childOutput.classList.add("output");
    childInput.type = "text";
    childInput.classList.add("input"); 
    childInput.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            commandOutput(childInput.value); // calling treatInput with the input's value as argument 
            addInputLine();
            childInput.disabled = true;
        }
    });

    innerWrapper.appendChild(childDiv);
    innerWrapper.appendChild(childInput);
    outerWrapper.appendChild(innerWrapper);
    outerWrapper.appendChild(childOutput);
    main.appendChild(outerWrapper);

    childInput.focus();
}

function commandOutput(command) {
    // This function treats the input provided by the user  

    command = command.toLowerCase().trim();
    let outputs = document.querySelectorAll(".output");
    const outputDiv = outputs[outputs.length - 1];
    
    if (commandMap.hasOwnProperty(command)) {
        outputDiv.innerHTML = commandMap[command]();
    } else if (command == "") {
        outputDiv.innerHTML = "";
    } else {
        outputDiv.innerHTML = "Command not found";
    }
}

const initialInput = document.querySelector(".input");
initialInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        commandOutput(initialInput.value);
        addInputLine();
        initialInput.disabled = true;
    }
});