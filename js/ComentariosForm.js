let stars = document.getElementsByClassName("star");

function setRating(rating) {
    document.getElementById("rating").value = rating;

    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].style.color = "#FFD700";
        } else {
            stars[i].style.color = "gray";
        }
    }
}

