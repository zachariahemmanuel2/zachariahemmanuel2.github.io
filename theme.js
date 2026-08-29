
const toggle = document.getElementById("theme-toggle");

const root = document.documentElement;

const icon = toggle ? toggle.querySelector("i") : null;


/* Load saved preference */

const savedTheme = localStorage.getItem("theme");


if (savedTheme) {

    root.setAttribute("data-theme", savedTheme);

}
else {

    const prefersDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
    );

}


/* Set correct icon */

function updateThemeIcon() {

    if (!icon) return;

    const currentTheme =
        root.getAttribute("data-theme");

    if (currentTheme === "dark") {

        icon.className = "fa-solid fa-sun";

    }
    else {

        icon.className = "fa-solid fa-moon";

    }

}


updateThemeIcon();


/* Toggle */

if (toggle) {

    toggle.addEventListener("click", function () {

        const currentTheme =
            root.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        root.setAttribute(
            "data-theme",
            newTheme
        );

        localStorage.setItem(
            "theme",
            newTheme
        );

        updateThemeIcon();

    });

}
