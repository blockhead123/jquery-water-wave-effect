// Title: Image Gallery Threejs Jquery
// Description: Usage of Threejs to create jquery animated gallery.
// Author: Oliver Ong
// URL: https://github.com/blockhead123/image-gallery-threejs
// Demo: http://image-gallery-threejs.zholpe.com/
// forked from djankey's "WebGL Carousel  - Three.js" http://jsdo.it/djankey/carousel_webgl
// I have reinvented the structure and made it jquery based as well as making it a plugin so that usage and customization is easily done

(function( $ ) {
    $.fn.waterwave = function( options ) {
        // DEFAULT OPTIONS
        var settings = $.extend({
            parent : '',
            color : '#000',
            direction: 'up',
            background: ''
        }, options );

        var waterwave = this;

        waterwave.init = function() {
            var TAU = Math.PI * 2;
            var density = 1;
            var speed = 1;
            var res = 0.005; // percentage of screen per x segment
            var outerScale = 0.05 / density;
            var inc = 0;
            var c = waterwave[0];
            var ctx = c.getContext('2d');
            var grad = ctx.createLinearGradient(0, 0, 0, c.height * 4);
            function onResize() {
                if(options.direction == 'down') {
                    waterwave.attr({
                        width: $(parent).width() + "px"
                    });
                }
                else {
                    waterwave.attr({
                        width: $(parent).width() + "px",
                        height: $(parent).height() + "px"
                    });
                }
            }

            onResize();
            setTimeout(function() {
                loop();
            }, 500);
            $(window).resize(onResize);

            function loop() {
                inc -= speed;
                drawWave(options.color);
                requestAnimationFrame(loop);
            }


            function drawBG(patternCanvas, w, h) {
                var space = ctx.createPattern(patternCanvas, 'repeat');
                ctx.fillStyle = space;
                ctx.fillRect(0, 0, w, h);
            }

            function drawWave(color) {
                var w = c.offsetWidth;
                var h = c.offsetHeight;
                var cx = w * 0.5;
                var cy = h * 0.5;
                ctx.clearRect(0, 0, w, h);
                var segmentWidth = w * res;
                if(options.background != '') {
                    var image = new Image();
                    image.src = options.background;
                    image.onload = function() {
                        // create an off-screen canvas
                        var patt = document.createElement('canvas');
                        // set the resized width and height
                        patt.width = w;
                        patt.height = h;
                        patt.getContext('2d').drawImage(this, 0, - 1 * (h / 4), patt.width, patt.height);
                        // pass the resized canvas to your createPattern
                        drawBG(patt, w , h);
                    };
                }
                else {
                    ctx.fillStyle = color;
                }
                ctx.beginPath();
                ctx.moveTo(0, cy);
                for (var i = 0, endi = 1 / res; i <= endi; i++) {
                    var _y = cy + Math.sin((i + inc) * TAU * res * density) * cy * Math.sin(i * TAU * res * density * outerScale);
                    var _x = i * segmentWidth;
                    ctx.lineTo(_x, _y);
                }
                if(options.direction == 'down') {
                    ctx.lineTo(w, 0);
                    ctx.lineTo(0, 0);
                }
                else {
                    ctx.lineTo(w, h);
                    ctx.lineTo(0, h);
                }
                ctx.closePath();
                ctx.fill();
            }
        };


        waterwave.init();

        return waterwave;


    };
}( jQuery ));