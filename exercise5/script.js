function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach((button) => {
        button.addEventListener("click", () => {
            //get references to elements
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            // identifying tab numbers and gets the number that is to be activated
            const tabNumber = button.dataset.forTab;
            // activation of a given tab
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);


            //deactivate all other tabs
            sideBar.querySelectorAll(".tabs__button").forEach((button) => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

//Execute everything after DOM is loaded as We need access to the DOM elements
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});
