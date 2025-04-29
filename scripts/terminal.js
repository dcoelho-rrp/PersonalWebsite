// To-do: fix bug ->  I can only add one like to the terminal currently and it stops there.

function terminalInput() {
    const input = document.querySelector(".input");
    const main = document.getElementById("main");

    input.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            const wrapper = document.createElement("div");
            wrapper.style.display = "flex";

            let childDiv = document.createElement("div");
            let childInput = document.createElement("input");

            childDiv.classList.add("idk");
            childDiv.innerHTML = ">:";

            childInput.type = "text";
            childInput.classList.add("input");

            wrapper.appendChild(childDiv);
            wrapper.appendChild(childInput);
            
            main.appendChild(wrapper);

            input.blur();
            childInput.focus();
        }
    })
}

terminalInput();