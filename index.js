const title = document.querySelector("#title");
const body = document.querySelector('body');

const tween = new TimelineLite({paused: true});

tween.to('.cover', 1.5, {
    height: '2vh',
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
    tween.play();
});

if(document.body.scrollTop != 0){
    tween.play();
}

// SCROLL

const controller = new ScrollMagic.Controller();

const main = document.querySelector('#main');
const word = document.querySelector('#word');
const dot = document.querySelector('#dot');
const lotti = document.querySelector('#lottie');

let scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: main,
    triggerHook: 0
  })
    .setPin(main)
    .addTo(controller);

let tween2 = new TimelineLite()
    .add(TweenLite.to(word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenLite.to(dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
    .add(TweenLite.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

let scene2 = new ScrollMagic.Scene({triggerElement: main, duration: 1000, tweenChanges: true})
    .setTween(tween2)
    .addTo(controller);



lottie.loadAnimation({
    container: lotti, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
    });