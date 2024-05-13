


/*document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var imageHeight = window.innerHeight;
        var currentIndex = Math.floor(scrollPosition / imageHeight);
        showImage(currentIndex);
    });
});

function showImage(index) {
    var carousel = document.getElementById("carousel");
    var totalImages = carousel.children.length;

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    }

    var translateValue = -index * 100 + "%";
    carousel.style.transform = "translateY(" + translateValue + ")";
}*/


document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".image");
    var windowHeight = window.innerHeight;
    var currentIndex = 0;

    var lastScrollPosition = window.scrollY;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var direction = scrollPosition > lastScrollPosition ? "down" : "up";
        lastScrollPosition = scrollPosition;

        var nextIndex;
        if (direction === "down") {
            nextIndex = Math.ceil(scrollPosition / windowHeight);
        } else {
            nextIndex = Math.floor(scrollPosition / windowHeight);
        }

        if (nextIndex !== currentIndex) {
            scrollToNextImage(nextIndex, direction);
            currentIndex = nextIndex;
        }
    });

    function scrollToNextImage(index, direction) {
        var offset = index * windowHeight;
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }
});

 
