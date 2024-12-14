let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".instructor-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Function to format the number with abbreviations (e.g., 10k, 2M, 1B)
function formatNumber(value) {
    if (value >= 100000) {
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "k"; // Thousands
    } else {
        return value.toString(); // No abbreviation for smaller numbers
    }
}

// Function to start counters for all elements with the specified class
function startCounters(className, duration) {
    const elements = document.getElementsByClassName(className);

    // Iterate over each element with the specified class
    Array.from(elements).forEach((element) => {
        const endValue = parseInt(element.getAttribute("data-end-value")); // Get the end value from data-end-value
        let startValue = 0;
        const increment = Math.ceil(endValue / (duration / 10)); // Calculate the increment for each step

        // Interval to update the counter
        const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                element.innerText = formatNumber(endValue); // Display the final value formatted
                clearInterval(interval);
            } else {
                element.innerText = formatNumber(startValue); // Display the intermediate value formatted
            }
        }, 10); // Update every 10ms
    });
}

// Start counters when the page loads
window.onload = function () {
    startCounters("counter", 2000); // Start counters for all elements with the class "counter"
};

// signin,signup
function openTab(evt, tabName) {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabLinks.forEach((link) => link.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    evt.currentTarget.classList.add("active");
    document.getElementById(tabName).classList.add("active");
}
