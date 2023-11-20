var buttons = document.querySelectorAll(".btn-reservacion");

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var dropdown = button.nextElementSibling;

        document.querySelectorAll(".dropdown-content").forEach(function (content) {
            if (content !== dropdown) {
                content.style.display = "none";
            }
        });

        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }

        event.stopPropagation();
    });
});

document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(function (content) {
        content.style.display = "none";
    });
});

document.querySelectorAll(".dropdown-content").forEach(function (content) {
    content.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});