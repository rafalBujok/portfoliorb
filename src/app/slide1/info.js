exports.info = function info() {

    initHeader();
    image();
    addListeners();


    // body of canvas
    function initHeader() {
        can = document.getElementById('can');
        canvas = document.getElementById('info-canvas');
        paddings = 20;
        width = can.offsetWidth - paddings;
        height = can.offsetHeight - paddings;
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

    }
    // loading img
    function image() {

        let img = new Image();
        img.src = 'assets/rbfoto.jpg';
        img.onload = function() {
            ctx.filter = "none";
            ctx.drawImage(img, 0, 0, width, height);

        }

    }
    // event handlers

    function addListeners() {
        can.addEventListener('mousemove', mouseMove);
    }
    // mouse move events
    let active = null;
    let highlightRadius = 30;

    function mouseMove(e) {
        xPos = e.offsetX;
        yPos = e.offsetY;
        if (xPos - 150 < highlightRadius && yPos - 190 < highlightRadius && xPos + highlightRadius > 150 && yPos + highlightRadius > 190) {
            active = "head";
        } else if (xPos - 65 < highlightRadius && yPos - 345 < highlightRadius && xPos + highlightRadius > 65 && yPos + highlightRadius > 345) {
            active = "hand";
        } else {
            active = null;

        }
        if (active === "hand") {
            createHighlight(65, 345, highlightRadius);
            console.log(active)
        } else if (active === "head") {
            createHighlight(150, 190, highlightRadius);
            console.log(active)
        } else {
            image()
        }



        // highlight
        function createHighlight(xStart, yStart, radius) {
            ctx.arc(xStart, yStart, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
            ctx.filter = 'blur(1px)'
            ctx.fill();
        }


    }






}