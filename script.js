const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
    for (let o = 1; i < 256, i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    fro (let i = 0; i < userInput.value.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");

});

userInput.addEventLister("change", updateGrid);

resetButton.addEventListener("click", function(){
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("gri-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repaet(16, 2fr)`);
    createGrid();

})

createGrid()