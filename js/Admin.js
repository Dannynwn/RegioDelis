var buttons = document.querySelectorAll(".custom-button");

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




// //Subir imagen

// document.getElementById('upload-label').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementById('upload').click();
// });

// document.getElementById('upload').addEventListener('change', function () {
//     var input = this;
//     var preview = document.getElementById('preview');

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             var image = document.createElement('img');
//             image.src = e.target.result;

//             var uploadPromoDiv = document.querySelector('.UploadPromo');
//             preview.insertBefore(image, uploadPromoDiv.nextSibling);
//         };

//         reader.readAsDataURL(input.files[0]);

//         input.value = '';
//     }
// });



function agregarImagen(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageSrc = e.target.result;

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";

        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Imagen";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function () {
            imageWrapper.remove();
        });

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(deleteButton);

        const uploadPromo = document.querySelector(".UploadPromo");
        const imageWrapperOld = document.querySelector(".image-wrapper");

        if (uploadPromo && imageWrapperOld) {
            uploadPromo.parentNode.insertBefore(imageWrapper, imageWrapperOld);
        } else {
            document.getElementById("preview").appendChild(imageWrapper);
        }
    };

    reader.readAsDataURL(file);


}