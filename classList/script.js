let myButtons = document.querySelectorAll(`.myButton`);
const resetButton = document.getElementById(`reset`);

console.log(myButtons);

myButtons.forEach((button) => {
    
    if (!button.classList.contains(`disabled`)) {
        button.addEventListener(`click`, () => {
            button.classList.add(`disabled`);
        });
        button.addEventListener(`mouseover`, () => {
            button.classList.add(`hovered`);
        });
        button.addEventListener(`mouseout`, () => {
            button.classList.remove(`hovered`);
        });
    } else {
        button.addEventListener(`mouseover`, () => {
            button.classList.remove(`hovered`);
        });
    }
});

resetButton.addEventListener(`click`, () => {
    myButtons.forEach((button) => {
        button.classList.remove(`disabled`);
    });
});