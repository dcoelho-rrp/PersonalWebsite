function addInputLine() {
    const main = document.getElementById("main");

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";

    let childDiv = document.createElement("div");
    let childInput = document.createElement("input");

    childDiv.classList.add("idk");
    childDiv.innerHTML = ">:";

    childInput.type = "text";
    childInput.classList.add("input"); 
    childInput.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            addInputLine();
            childInput.disabled = true;
        }
    });

    wrapper.appendChild(childDiv);
    wrapper.appendChild(childInput);
    main.appendChild(wrapper);

    childInput.focus();
}

const initialInput = document.querySelector(".input");
initialInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addInputLine();
        initialInput.disabled = true;
    }
})