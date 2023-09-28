// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");
    var customAlert = document.getElementById("customAlert");

    if (myButton && customAlert) {
        myButton.addEventListener("click", function () {
            myButton.classList.toggle("button-clicked");

            // Show the custom alert
            customAlert.style.display = "block";

            // Reset the visual effect and hide the custom alert after a delay
            setTimeout(function () {
                myButton.classList.remove("button-clicked");
                customAlert.style.display = "none";
            }, 3000); // Reset after 10 seconds (10,000 milliseconds)
        });
    }

    // Get the button element
    var myButton1 = document.getElementById("myButton1");

    // Get the element where you want to change the text
    var textElement = document.getElementById("textToChange");

    // Add a click event listener to the button
    myButton1.addEventListener("click", function () {
        // Create a visual effect (e.g., changing text color)
        textElement.style.color = getRandomColor();

        // Change the text of the element when the button is clicked
        textElement.textContent = "Aquire gold and contact us for price deduction!";

        // Reset the text color after a delay
        setTimeout(function () {
            textElement.style.color = ""; // Reset to default
        }, 1000); // Reset after 1 second
    });

    var toggleButton = document.getElementById("toggleButton");
    var paragraphToToggle = document.getElementById("paragraphToToggle");

    var clickCount = 0; // Initialize a variable to count button clicks

    toggleButton.addEventListener("click", function () {
        clickCount++; // Increment the click count on each click

        if (clickCount === 2) {
            // If the button is clicked twice, toggle the paragraph
            if (paragraphToToggle.style.display === "none" || paragraphToToggle.style.display === "") {
                paragraphToToggle.style.display = "block";
            } else {
                paragraphToToggle.style.display = "none";
            }

            // Reset the click count after toggling
            clickCount = 0;
        }
    });

    // Add a delay before applying the animation
    setTimeout(function () {
        const tourSection = document.getElementById('tour');
        if (tourSection) {
            tourSection.classList.add('fade-in');
        }
    }, 1500); // Delay in milliseconds (adjust as needed)

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
