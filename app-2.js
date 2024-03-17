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

// Fonction pour gérer le swipe sur l'écran tactile
function handleSwipe() {
    var swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
        nextImage();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        prevImage();
    }
}

// Fonction pour afficher une image spécifique dans le carrousel
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

// Fonction pour initialiser les indicateurs
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

// Fonction pour mettre à jour les indicateurs
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

// Fonction pour afficher l'image précédente
function prevImage() {
    showImage(currentIndex - 1);
}

// Fonction pour afficher l'image suivante
function nextImage() {
    showImage(currentIndex + 1);
}

// Défilement automatique du carrousel toutes les 7 secondes
var intervalId = setInterval(nextImage, 7000);

// Arrête le défilement automatique lorsque la souris survole le carrousel
carousel.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
});

// Reprend le défilement automatique lorsque la souris quitte le carrousel
carousel.addEventListener("mouseleave", function() {
    intervalId = setInterval(nextImage, 7000);
});

