var currentIndex = 0;
    var carousel = document.getElementById("carousel");
    var indicatorsContainer = document.getElementById("indicators");

    initializeIndicators();

    carousel.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", function (e) {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        var swipeThreshold = 50;

        if (touchStartX - touchEndX > swipeThreshold) {
            nextImage();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevImage();
        }
    }

    function showImage(index) {
        var totalImages = carousel.children.length;

        if (index >= totalImages) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalImages - 1;
        } else {
            currentIndex = index;
        }

        updateIndicators();
        var translateValue = -currentIndex * 100 + "%";
        carousel.style.transform = "translateX(" + translateValue + ")";
    }

    function initializeIndicators() {
        for (var i = 0; i < carousel.children.length; i++) {
            var indicator = document.createElement("div");
            indicator.classList.add("indicator");
            indicator.setAttribute("data-index", i);
            indicator.addEventListener("click", function () {
                var index = parseInt(this.getAttribute("data-index"));
                showImage(index);
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    function updateIndicators() {
        var indicators = document.querySelectorAll(".indicator");
        indicators.forEach(function (indicator, index) {
            if (index === currentIndex) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    function nextImage() {
        showImage(currentIndex + 1);
    }

