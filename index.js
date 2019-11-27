const title = document.querySelector("#title");
const body = document.querySelector('body');

const tl = new TimelineLite({paused: true});

tl.to('.cover', 1.5, {
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
    tl.play();
});

if(document.body.scrollTop != 0){
    tl.play();
}

// SCROLL

const controller = new ScrollMagic.Controller();

const main = document.querySelector('#main');
const word = document.querySelector('#word');
const dot = document.querySelector('#dot');

let scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: main,
    triggerHook: 0
  })
    .setPin(main)
    .addTo(controller);

let tween = new TimelineLite()
    .add(TweenLite.to(word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenLite.to(dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
    .add(TweenLite.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

let scene2 = new ScrollMagic.Scene({triggerElement: main, duration: 1000, tweenChanges: true})
    .setTween(tween)
    .addTo(controller);