// =========================
// ELEMENTS
// =========================

const gift = document.querySelector(".gift");
const flash = document.getElementById("flash");
const bgMusic = document.getElementById("bgMusic");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");
const slide6 = document.getElementById("slide6");
const slide7 = document.getElementById("slide7");
const slide8 = document.getElementById("slide8");
const slide9 = document.getElementById("slide9");
const slide10 = document.getElementById("slide10");
const slide11 = document.getElementById("slide11");
const slide12 = document.getElementById("slide12");

const typingPar = document.getElementById("typingPar");

const payoffLines = document.querySelectorAll("#slide10 .line");

const byeBtn = document.querySelector(".bye-btn");

let escapeCount = 0;

const escapeMessages = [

    "😂 Itni bhi jaldi kya hai?",

    "😏 Arre arre...",

    "🤭 Pakad ke dikhao!",

    "😂 Almost!",

    "😆 Ab bas bhi karo!",

    "🥺 Theek hai...",

    "🎉 ACCHA THEEK HAI, TU JEET GAYI!"

];

// =========================
// SLIDE 1 → SLIDE 2
// =========================

gift.addEventListener("click", () => {

    gift.classList.add("opened");

    flash.classList.add("active");

    setTimeout(() => {

        bgMusic.volume = 0;
        bgMusic.play();

        let volume = 0;

        const fadeIn = setInterval(() => {

            volume += 0.01;

            if(volume >= 0.18){

                bgMusic.volume = 0.18;

                clearInterval(fadeIn);

            }else{

                bgMusic.volume = volume;

            }

        },100);

        flash.classList.remove("active");

        slide1.style.display = "none";

        slide2.style.display = "flex";

        slide2.classList.add("show");

        slide2.style.opacity = "1";
        slide2.style.transform = "translateY(0)";

    },800);

});


// =========================
// SLIDE 2 → SLIDE 3
// =========================

function goToSlide3(){

    if(slide2.style.display==="flex"){

        slide2.style.display="none";
        slide3.style.display="flex";
        slide3.classList.add("show");

    }

}

// Desktop keyboard
document.addEventListener("keydown",(event)=>{

    if(event.key==="ArrowRight"){

        goToSlide3();

    }

});

// Mobile swipe
let touchStartX = 0;

document.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend",(e)=>{

    let touchEndX = e.changedTouches[0].screenX;

    if(touchStartX - touchEndX > 50){

        goToSlide3();

    }

});


// =========================
// SLIDE 3 → SLIDE 4
// =========================

const noButtons = document.querySelectorAll("#slide3 .no-btn");

noButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.animation="buttonPop .4s";

        button.textContent="😂 NICE TRY";

        setTimeout(()=>{

            slide3.style.display="none";

            slide4.style.display="flex";

        },500);

    });

});


// =========================
// SLIDE 4 → SLIDE 5
// =========================

const noButtons2=document.querySelectorAll("#slide4 .no-btn2");

noButtons2.forEach(button=>{

    button.addEventListener("click",()=>{

        button.textContent="😂 PHIR SOCH LO";

        setTimeout(()=>{

            slide4.style.display="none";

            slide5.style.display="flex";

        },500);

    });

});


// =========================
// SLIDE 5 → SLIDE 6
// =========================

const yesButtons=document.querySelectorAll("#slide5 .yes-btn");

yesButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.textContent="🎉 YAY!!";

        setTimeout(()=>{

            slide5.style.display="none";

            slide6.style.display="flex";

            // Auto move after 8 seconds

            setTimeout(()=>{

                slide6.style.display="none";

                slide7.style.display="flex";

            },8000);

        },500);

    });

});


// =========================
// SLIDE 7
// =========================

const yesRun=document.querySelector(".yes-run");

const noNext=document.querySelector(".no-next");

const funnyMessage=document.querySelector(".funny-message");

    "😂 Itni bhi jaldi kya hai?",

    "😏 Pehle pakdo mujhe!",

    "🤭 Catch me first!",

    "😂 Nahi milega itni aasani se!",

    "😆 Aur koshish karo!",

    "🥺 Accha theek hai...",

    "🎉 OKAY YOU WIN 😂"

function moveButton(){

    if(escapeCount >= 6){

        funnyMessage.textContent = "😂 I KNEW YOU WOULDN'T GIVE UP!";

        yesRun.removeEventListener("mouseenter", moveButton);

        yesRun.style.transition = ".5s";

        yesRun.style.left = "50%";
        yesRun.style.top = "120px";
        yesRun.style.transform = "translateX(-50%)";

        document.querySelector(".no-next").style.display = "none";

        yesRun.textContent = "🎉 OKAY, YOU WIN!";

        return;

    }

    const container = document.querySelector(".gift-buttons");

    const maxX = container.clientWidth - yesRun.offsetWidth;

    const maxY = container.clientHeight - yesRun.offsetHeight;

    const randomX = Math.random() * maxX;

    const randomY = Math.random() * maxY;

    yesRun.style.left = randomX + "px";

    yesRun.style.top = randomY + "px";

    funnyMessage.textContent = escapeMessages[escapeCount];

    escapeCount++;

}

yesRun.addEventListener("mouseenter",moveButton);

yesRun.addEventListener("click",moveButton);


yesRun.addEventListener("click", () => {

    if(escapeCount >= 6){

        funnyMessage.textContent = "😂 I KNEW YOU WOULDN'T GIVE UP!";

        yesRun.disabled = true;

        setTimeout(() => {

            slide7.style.display = "none";

            slide8.style.display = "flex";

            setTimeout(() => {

                slide8.style.display = "none";

                slide9.style.display = "flex";

                startParTyping();

            }, 4000);

        }, 1000);

    }

});

function nextSlide(current, next, delay){

    setTimeout(() => {

        current.style.display = "none";

        next.style.display = "flex";

    }, delay);

}

function startParTyping(){

    const text = "PARR.....";

    typingPar.textContent = "";

    let i = 0;

    const typing = setInterval(() => {

        typingPar.textContent += text[i];

        i++;

        if(i >= text.length){

            clearInterval(typing);

            setTimeout(() => {

                slide9.style.display = "none";

                slide10.style.display = "flex";

                startPayoff();

            },1000);

        }

    },180);

}

function startPayoff(){

    payoffLines.forEach(line=>{

        line.classList.remove("show-line");

    });

    payoffLines.forEach((line,index)=>{

        setTimeout(()=>{

            line.classList.add("show-line");

        },index*900);

    });

    const totalTime=(payoffLines.length*900)+3000;

    setTimeout(()=>{

        slide10.style.display="none";

        slide11.style.display="flex";

    },totalTime);

}

byeBtn.addEventListener("click",()=>{

    slide11.style.display="none";

    slide12.style.display="flex";

    setTimeout(() => {

    fadeMusic();

},8000);

});

function fadeMusic(){

    let volume = bgMusic.volume;

    const fade = setInterval(() => {

        volume -= 0.01;

        if(volume <= 0){

            bgMusic.volume = 0;

            bgMusic.pause();

            clearInterval(fade);

        }else{

            bgMusic.volume = volume;

        }

    },150);

}