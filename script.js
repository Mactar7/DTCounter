document.addEventListener("DOMContentLoaded", function () {
    const clickButton = document.getElementById("clickButton");
    const setClicksButton = document.getElementById("setClicksButton");
    const randomizeButton = document.getElementById("randomizeButton");
    const uploadButton = document.getElementById("uploadButton");
    const clickCountInput = document.getElementById("clickCountInput");
    const toggleCounterButton = document.getElementById("toggleCounterButton");
    const clickCount = document.getElementById("clickCount");
    const presetCount = document.getElementById("presetCount");
    const uploadInput = document.getElementById("uploadInput");
    const imageContainer = document.getElementById("imageContainer");
    const uploadedImage = document.getElementById("uploadedImage");

    let currentClicks = 0;
    let maxClicks = 1000; // Default value
    let displayClicks = true;

    setClicksButton.addEventListener("click", function () {
        maxClicks = parseInt(clickCountInput.value);
        presetCount.textContent = maxClicks;
    });

    randomizeButton.addEventListener("click", function () {
        maxClicks = Math.floor(Math.random() * 1000) + 1; // Random number between 1 and 1000
        presetCount.textContent = maxClicks;
    });

    clickButton.addEventListener("click", function () {
        currentClicks++;
        clickCount.textContent = currentClicks;

        if (currentClicks >= maxClicks) {
            imageContainer.style.display = "block";
        }
    });

    uploadButton.addEventListener("click", function () {
        const file = uploadInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            // Send the image to the server (you need to implement this part)
            // Example: fetch("/upload", { method: "POST", body: formData })
            // .then(response => response.text())
            // .then(message => console.log(message));

            // Set the image source to the uploaded image
            uploadedImage.src = URL.createObjectURL(file);
        }
    });

    toggleCounterButton.addEventListener("click", function () {
        // Toggle the visibility of the counter elements
        if (clickCount.style.display === "none") {
            clickCount.style.display = "inline"; // Show the click count
            presetCount.style.display = "inline"; // Show the preset count
        } else {
            clickCount.style.display = "none"; // Hide the click count
            presetCount.style.display = "none"; // Hide the preset count
        }
    });

});


