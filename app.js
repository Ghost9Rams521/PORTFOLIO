


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
}


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
});*/

/*document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoutez une classe pour déclencher la transition
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    textElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoutez une classe pour déclencher la transition
                entry.target.classList.add('visible');
            } else {
                // Retirez la classe lorsque l'élément n'est plus visible
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Ajustez le seuil selon vos besoins
    });

    parallaxLayers.forEach(layer => {
        observer.observe(layer);
    });
});*/


document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-element');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    // Observer pour les éléments de texte
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                textObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observer pour les couches parallax
    const parallaxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Ajustez le seuil selon vos besoins
    });

    // Observer pour les éléments de texte
    textElements.forEach(element => {
        textObserver.observe(element);
    });

    // Observer pour les couches parallax
    parallaxLayers.forEach(layer => {
        parallaxObserver.observe(layer);
    });
});
