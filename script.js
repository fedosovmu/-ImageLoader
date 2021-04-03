function getImg(x, y) {
    var img = document.createElement('img')
    var src = 'https://doyoupaint.com/schema?article=A05&x=' + x +'&y=' + y;
    //var src = 'https://via.placeholder.com/100x100';
    img.setAttribute('src', src);
    return img
}

const columnsCount = 2;
const rowsCount = 2;
const oneImageSize = 800;

var body = document.getElementsByTagName('body')[0];
var canvas = document.createElement('canvas');
canvas.setAttribute('width', columnsCount * oneImageSize);
canvas.setAttribute('height', rowsCount * oneImageSize);
body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#ff9c38";
ctx.fillRect(0, 0, 800, 800);

var images = [];
var loadedImagesCount = 0;
for (var column = 0; column < columnsCount; column++) {
    for (var row = 0; row < rowsCount; row++) {
        const elementSize = 630;
        var x = column * elementSize;
        var y = row * elementSize;
        var img = getImg(x, y);
        images.push(img);
        img.onload = function () {
            loadedImagesCount++;
            if (loadedImagesCount == images.length) {
                allImagesLoaded();
            }
        }
    }
}

function allImagesLoaded() {
    console.log('all loaded ' + loadedImagesCount);
    for (var column = 0; column < columnsCount; column++) {
        for (var row = 0; row < rowsCount; row++) {
            const elementSize = 798;
            var x = row * elementSize;
            var y = column * elementSize;
            var i = row * rowsCount + column;
            var img = images[i];
            ctx.drawImage(img, x, y);
            console.log('draw '+x+' '+y);
        }
    }
}

//ctx.fillRect(10, 10, 150, 100);
//ctx.drawImage(img, 0, 0)
//ctx.fillRect(10, 10, 150, 100);