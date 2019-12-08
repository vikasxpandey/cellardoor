// RESET WINDOW ON RELOAD

$(document).ready(() => {
    $(this).scrollTop(0);
});

// unCOVER

const title = document.querySelector("#title");
const body = document.querySelector('body');


const unCover = new TimelineMax({paused: true});

unCover.to('.cover', 1.5, {
    height: '10vh',
    ease: Power2.easeOut,
    onComplete: () => {
        body.style.overflow = 'unset';
        title.style.pointerEvents = 'none';
    }
})
.fromTo('nav', 0.5, {
    opacity: 0,
    y: '50',
    ease: Power0.easeOut
},
{
    opacity: 1,
    y: 0
}, '-=0.5');

title.addEventListener('click', () => {
    unCover.play();
});

// SCROLL

const controller = new ScrollMagic.Controller();

const head = document.querySelector('#head');
const main = document.querySelector('#main');
const word = document.querySelector('#word');
const dot = document.querySelector('#dot');
const lotti = document.querySelector('#lottie');

const prependZero = (num) => {
    if (num<10) {
        return '00'+num;
    } else if( num<100 ) {
        return '0'+num;
    } else {
        return num;
    }
}

let images = [];

for(let i=001; i<=318; i++) {

    images.push("./img/door00"+prependZero(i)+".jpg");

}
console.log(images);

let obj = {curImg: 0};

// create tween
let imgTween = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,  	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#seq").attr("src", images[obj.curImg]); // set the image source
        }
    }
);



let homeScene = new ScrollMagic.Scene({
    triggerElement: head,
    triggerHook: 0,
    duration: 2000
})
    .setTween(imgTween)
    .setPin(head)
    .addTo(controller);

let magicTween = new TimelineMax()
    .add(TweenMax.to(word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenMax.to(dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
    .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

let magicScene = new ScrollMagic.Scene({
    triggerElement: main,
    triggerHook: 0,
    duration: 1000,
    tweenChanges: true
})
    .setPin(main)
    .setTween(magicTween)
    .addTo(controller);

lottie.loadAnimation({
    container: lotti, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
    });