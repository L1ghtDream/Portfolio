registerExperienceButtons(9);
registerExperienceHover(9);

function get_handle_size() {
    return 38;
}

function getElement(_class) {
    return document.getElementsByClassName(_class)[0];
}

function getElements(_class) {
    return document.getElementsByClassName(_class);
}

function registerExperienceButtons(amount) {
    for (let i = 1; i <= amount; i++) {
        let buttonClass = "experience-select-" + i;
        let experineceClass = "experience-" + i;

        let button = getElement(buttonClass);
        let experience = getElements(experineceClass);

        button.parentNode.addEventListener("click", () => {
            let active = getElements("experience-active");
            let activeSelect = getElement("experience-select-active");
            let activeSelectParent = getElement("experience-select-active-parent");
            let bar = getElement("experience-bar-handle");

            bar.style.top = get_handle_size() * (i - 1) + "px";
            activeSelect.classList.remove("experience-select-active");
            activeSelectParent.classList.remove("experience-select-active-parent");
            button.classList.add("experience-select-active");
            button.parentNode.classList.add("experience-select-active-parent");

            if (active !== undefined) {
                const list = [...active];
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    element.hidden = true;
                    element.classList.remove("experience-active");
                }
            }
            if (experience !== undefined) {
                const list = [...experience];
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    element.hidden = false;
                    element.classList.add("experience-active");
                }
            }
        });
    }
}

function registerExperienceHover(amount) {
    getElement("experience-bar").style.height = get_handle_size() * amount + "px";

    for (let i = 1; i <= amount; i++) {
        let buttonClass = "experience-select-" + i;

        let button = getElement(buttonClass);
        let bar = getElement("experience-bar-handle");

        button.parentNode.addEventListener("mouseover", () => {
            bar.style.top = get_handle_size() * (i - 1) + "px";
        });
        button.parentNode.addEventListener("mouseout", () => {
            let active = getElement("experience-select-active");
            let activeClass = active.classList[0];
            let numberString = activeClass.replace("experience-select-", "");
            let number = parseInt(numberString);

            bar.style.top = get_handle_size() * (number - 1) + "px";
        });
    }
}