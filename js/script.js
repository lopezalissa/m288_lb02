const maxImagesToLoadOnClick = 3;

let imagesLoaded = 0;
let maxImages = moreImages.images.length;

function loadMoreImages() {

    let divElem, linkElem, imgElem;

    // get the gallery section div element
    let galleryElem = document.getElementById('gallery');

    // max index to load on click
    let maxImageIndexToLoad = imagesLoaded + maxImagesToLoadOnClick;

    if (typeof galleryElem != "undefined") {

        for (let i = imagesLoaded; i < maxImageIndexToLoad; i++) {
            divElem = document.createElement('div');
            divElem.className = "img";

            linkElem = document.createElement('a');
            linkElem.target = '_blank';
            linkElem.href = moreImages.images[i];

            imgElem = document.createElement('img');
            imgElem.src = moreImages.images[i];
            imgElem.alt = moreImages.description[i];

            // append img to link tag and link to div elem
            linkElem.appendChild(imgElem);
            divElem.appendChild(linkElem);

            // append it to the gallery
            galleryElem.appendChild(divElem);

            // increase the number of loaded images
            imagesLoaded++;

            // if all images are loaded, remove the button to load more images
            if (imagesLoaded === maxImages) {
                let btnElem = document.getElementById('moreBtnContainer');
                btnElem.remove();
            }
        }
    }
}

//Random Bild Generator -------------------------------------------------------

function display_random_image() {
    let theImages = [{
        src: "bilder/alissa_01.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/alissa_02.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/alissa_03.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/janissa_01.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/janissa_02.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/janissa_03.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/jil_01.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/jil_02.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/jil_03.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/koen_01.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/koen_02.jpg",
        width: "640",
        height: "460"
    }, {
        src: "bilder/koen_03.jpg",
        width: "640",
        height: "460"
    }];

    let preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.body.appendChild(newImage);
}