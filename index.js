const title = document.querySelector("#title");
const body = document.querySelector('#body');
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
    x: '50',
    ease: Power0.easeOut
},
{
    opacity: 1,
    x: 0
}, '-=0.5');

title.addEventListener('click', () => {
    tl.play();
})

