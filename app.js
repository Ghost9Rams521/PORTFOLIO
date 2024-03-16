


document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    showImage(currentIndex);

});

function showImage(index) {
    var carousel = document.getElementById("carousel");
    var totalImages = carousel.children.length;

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    var translateValue = -currentIndex * 100 + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
}


