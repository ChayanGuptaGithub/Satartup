function openModal(cardId, isTwoPage) {
    var modal = document.getElementById("cardModal");
    var modalImage = document.getElementById("modalImage");
    var secondPage = document.getElementById("secondPage");

    // Show the modal
    modal.classList.add("show");
    modal.classList.remove("hidden");

    if (isTwoPage) {
        // Load the first page of the two-page card
        loadImage(modalImage, "images/" + cardId + "_page1.jpg", "images/" + cardId + "_page1.png");

        // Show and load the second page
        secondPage.classList.remove("hidden");
        loadImage(document.getElementById("modalImage2"), "images/" + cardId + "_page2.jpg", "images/" + cardId + "_page2.png");
    } else {
        // Single page card logic
        loadImage(modalImage, "images/" + cardId + ".jpg", "images/" + cardId + ".png");
        secondPage.classList.add("hidden"); // Hide the second page element if single-page
    }
}

// Helper function to check if .jpg exists, else fallback to .png
function loadImage(imgElement, jpgPath, pngPath) {
    var img = new Image();
    img.onload = function() {
        imgElement.src = jpgPath;  // Load .jpg if it exists
    };
    img.onerror = function() {
        imgElement.src = pngPath;  // Load .png if .jpg not found
    };
    img.src = jpgPath;
}

function closeModal() {
    var modal = document.getElementById("cardModal");
    modal.classList.remove("show");
    modal.classList.add("hidden");
}
function disableScreenshot(event) {
    // Prevent Print Screen (PrtScn), Windows + Shift + S key combinations
    if (event.key === "PrintScreen") {
        alert("Screenshots are disabled!");
        // Clear the clipboard (it won't stop screenshots but will clear copied data)
        navigator.clipboard.writeText("");
    }

    // Windows + Shift + S or any other combination
    if ((event.ctrlKey || event.metaKey) && (event.key === "s")) {
        alert("Screenshots are disabled!");
        event.preventDefault();
        navigator.clipboard.writeText("");
    }
}
