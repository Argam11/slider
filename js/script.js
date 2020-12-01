const images = document.querySelector(".images > img");
let images_array;
axios.get("http://localhost:3000/").then(res => (images_array = res.data));

function onChangeImages(n) {
    const img_src = images.getAttribute("src").split("/")[1];
    const img_index = images_array.indexOf(img_src);
    if (img_index === images_array.length - 1 && n === 1) {
        images.src = "images/" + images_array[0];
    } else if (img_index === 0 && n === -1) {
        images.src = "images/" + images_array[images_array.length - 1];
    } else {
        images.src = "images/" + images_array[img_index + n];
    }
}

document.addEventListener("keydown", e => {
    if (e.keyCode === 37) {
        onChangeImages(-1);
    } else if (e.keyCode === 39) {
        onChangeImages(1);
    }
});
