let popupWindow = null;

const imageGallery = [
    "DESIGN/SMALL/P0.JPG",
    "DESIGN/SMALL/P1.JPG",
    "DESIGN/SMALL/P2.JPG",
    "DESIGN/SMALL/P3.JPG",
    "DESIGN/SMALL/P4.JPG",
    "DESIGN/SMALL/P5.JPG",
    "DESIGN/SMALL/P6.JPG",
];
const galleryContainer = document.getElementById("image-collection");
imageGallery.forEach(imgSrc => {
    let thumbnail = document.createElement("img");
    thumbnail.src = imgSrc;
    thumbnail.classList.add("thumbnail");
    galleryContainer.appendChild(thumbnail);
    thumbnail.addEventListener("click", function() {
        openPopup(imgSrc);
    });
});

function openPopup(imgSrc) {
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    }

    let img = new Image();
    let imgPath = imgSrc.slice(imgSrc.lastIndexOf("/"));
    img.src = "DESIGN" + imgPath;

    img.onload = function() {
        let imgHeight = img.naturalHeight;
        let imgWidth = img.naturalWidth;

        popupWindow = window.open("Image.html?" + imgPath, "_blank", "width=" + imgWidth + ",height=" + imgHeight);

        if (!popupWindow || popupWindow.closed || typeof popupWindow.closed == 'undefined') {
            alert("Всплывающие окна заблокированы");
        } else {
            popupWindow.focus();
        }
    }

    img.onerror = function() {
        alert("Изображение не может быть загружено");
    }
}
