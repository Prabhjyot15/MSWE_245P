//Element Selection  
let slideContainer = document.querySelector(".slide__container");//Represents the container holding the images.
let images = document.querySelectorAll(".slide__container img");// Represents all the image elements within the container.
let prevButton = document.querySelector("#prevButton");//prevButton and nextButton: Represent the buttons for navigating to the previous and next images, respectively.
let nextButton = document.querySelector("#nextButton");
let imgSize = images[0].clientWidth;//Stores the width of the images. It assumes that all images have the same 

let counter = 1;//Keeps track of the current image being displayed. It's initialized to 1.
slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";//Sets the initial position of the image slider by applying a transformation in the horizontal direction. The negative value is used to shift the images to the left.
// The negative value (-imgSize * counter) ensures that the correct image is displayed by translating the container to the appropriate position.


/**
 * This event listener is triggered when the "Next" button is clicked.
It checks if the counter is at the last image to prevent further clicks.
If not at the last image, it increments the counter, applies a transition effect, and updates the transform property to show the next image.
 */
nextButton.addEventListener("click", () => {
    if (counter >= images.length - 1) return; // prevent the click to happen if we are at the last image
    counter = counter + 1; // add to the counter value if we clicked
    slideContainer.style.transition = "0.75s ease-in-out"; // transitioning should happen with a 0.25s long transition
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)"; // the slideContainer's CSS transform shall be updated upon click
});



/**
 * This event listener is triggered when the "Previous" button is clicked.
It checks if the counter is at the first image to prevent further clicks.
If not at the first image, it decrements the counter, applies a transition effect, and updates the transform property to show the previous image.
 */
prevButton.addEventListener("click", () => {
    if (counter <= 0) return; // prevent the click to happen if we are at the first image
    counter = counter - 1; // deduct from the counter value if we clicked
    slideContainer.style.transition = "0.75s ease-in-out"; // transitioning should happen with a 0.25s long transition
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)"; // the slideContainer's CSS transform shall be updated upon click
});



/**
 * This event is triggered when the transition (slide animation) ends.
It checks if the current image is the first or last clone (additional images added for smooth transition) and updates the counter accordingly.
It sets the transition to 0 seconds to avoid a transition effect during this counter adjustment.
It then updates the transform property to the correct position based on the adjusted counter.
 */
slideContainer.addEventListener("transitionend", () => {
    // if the current image we are at is the first clone we need to update the counter and
    // jump to the last slide without a transition
    if (images[counter].id === "firstClone") {
        slideContainer.style.transition = "0s ease-in-out";
        counter = images.length - counter;
    }
    // if the current image we are at is the last clone we need to update the counter and
    // jump to the first slide without a transition
    if (images[counter].id === "lastClone") {
        slideContainer.style.transition = "0s ease-in-out";
        counter = images.length - 2;
    }

    // we need to execute the transform
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});