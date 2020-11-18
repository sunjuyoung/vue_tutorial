const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const setion = document.querySelector('section');
const end = setion.querySelector('h1');

//스크롤
const controller = new ScrollMagic.Controller();

//Scene
const scene = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:intro,
    triggerHook:0.5
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//video
let accelamount = 0.1;
let scrollpos=0;
let delay =0;

scene.on('update',e=>{
    scrollpos = e.scrollPos /1000;
    //console.log(e);
})

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
},33.3);