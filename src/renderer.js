const path = require('path');
const os = require('os');
const { ipcRenderer } = require('electron');
const materialize = require('materialize-css');

const form = document.getElementById('image-form');
const slider = document.getElementById('slider');
const img = document.getElementById('img');

document.getElementById('output-path').innerText = path.join(
    os.homedir(),
    'imageshrink',
);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const imgPath = img.files[0].path;
    const quality = slider.value;

    ipcRenderer.send('image:minimize', {
        imgPath,
        quality,
    });
});

ipcRenderer.on('image:done', () => {
    materialize.toast({
        html: `Image resized to ${slider.value}% quality`,
    });
});
