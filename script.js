function getImg(x, y) {
    var img = document.createElement('img')
    //img.setAttribute('src', 'https://doyoupaint.com/schema?article=A05&x=' + x +'&y=' + y)
    img.setAttribute('src', 'https://via.placeholder.com/'+(x+1)*10+'x100');
    return img
}

var body = document.getElementsByTagName('body')[0];
var canvas = document.createElement('canvas');
canvas.setAttribute('width', 800);
canvas.setAttribute('height', 800);
body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#ff9c38";
ctx.fillRect(0, 0, 800, 800);

for (var column = 0; column < 2; column++) {
    for (var row = 0; row < 2; row++) {
        var img = getImg(x, 0);
        const elementSize = 100;
        var x = row * elementSize;
        var y = column * elementSize;
        img.onload = function () {
            ctx.drawImage(img, x, y);
            console.log('draw '+x+' '+y);
        }
    }
}

//ctx.fillRect(10, 10, 150, 100);
//ctx.drawImage(img, 0, 0)
//ctx.fillRect(10, 10, 150, 100);