/*
 *
 *
 *
 */

const input = document.getElementById("username input")
const button = document.getElementById("username submit")

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if the elements are available
if (input && button) {
    console.log("Elements found. Setting up event listener...");

    // Add click event listener to the submit button
    button.addEventListener("click", async function() {
        console.log("Button clicked!");
        input.value = "";  // Clear the input field
		
		console.log("Waiting!");
		await delay(1000);
		window.location.href = "choose.html";
    });
} else {
    console.error("Elements not found.");
}