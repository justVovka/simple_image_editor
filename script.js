const grayscale = document.querySelector('#grayscale'),
       contrast = document.querySelector('#contrast'),
     brightness = document.querySelector('#brightness'),
          sepia = document.querySelector('#sepia'),
       saturate = document.querySelector('#saturate');

const defaults = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100,
};

const imgUrl = document.getElementById('img-url');
const image = document.querySelector('#image');
const reset = document.getElementById('reset');

grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);

reset.addEventListener('click', resetFilterValue);

imgUrl.addEventListener('change', updateImageUrl);

function updateFilterValue() {
    reset.disabled = false;

    image.style.filter = `
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)`;
}

function resetFilterValue() {
    grayscale.value = defaults.grayscale;
    contrast.value = defaults.contrast;
    brightness.value = defaults.brightness;
    sepia.value = defaults.sepia;
    saturate.value = defaults.saturate;

    updateFilterValue();
    reset.disabled = !reset.disabled;
}

function updateImageUrl() {
    image.src = imgUrl.value;
}