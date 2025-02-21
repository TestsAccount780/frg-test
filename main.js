/*
 *
 *
 *
 */

const input = document.getElementById("username input")
const button = document.getElementById("username submit")

// Check if the elements are available
if (input && button) {
    console.log("Elements found. Setting up event listener...");

    // Add click event listener to the submit button
    button.addEventListener("click", function() {
        console.log("Button clicked!");
        input.value = "";  // Clear the input field
    });
} else {
    console.error("Elements not found.");
}