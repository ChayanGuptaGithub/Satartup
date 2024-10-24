function openModal(cardId, isTwoPage) {
    var modal = document.getElementById("cardModal");
    var modalImage = document.getElementById("modalImage");
    var secondPage = document.getElementById("secondPage");

    // Show the modal
    modal.classList.add("show");
    modal.classList.remove("hidden");

    // Load the first page image (attempt .jpg, fallback to .png)
    loadImage(modalImage,  cardId + "_page1.jpg", cardId + ".png");

    if (isTwoPage) {
        secondPage.classList.remove("hidden");  // Show the second page for two-page cards
        loadImage(document.getElementById("modalImage2"), cardId + "_page2.jpg", cardId + "_page2.png");
    } else {
        secondPage.classList.add("hidden");  // Hide the second page for single-page cards
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
