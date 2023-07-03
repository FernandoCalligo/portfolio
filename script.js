import { gsap } from "gsap";
/* import { SplitText } from "gsap" */


const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})


// background
const container = document.querySelector(".container");
const background = document.querySelector(".background");

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

function getramdon (max) {
    return Math.floor(Math.random() * max)
}

console.log(getramdon(50))

function createBubble() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    background.appendChild(bubble);
    
    const randomX = Math.random() * (containerWidth - bubble.offsetWidth);
    const randomY = Math.random() * (containerHeight - bubble.offsetHeight);
    
    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`


    gsap.to(bubble, {
        opacity: 0, duration: 4, yoyo: true, scale: getRandomFloat(0,1), 
      });

    setTimeout(() => {
      bubble.remove();
    }, 3000);
  }

  setInterval(() => {
    createBubble()
  }, 300);

  const arrow = document.querySelector(".arrow-down");

  gsap.to(arrow, { 
    y: -55,
    yoyo: true,
    repeat: -1
  })
  


// hover efect invertido

const techSkills = document.querySelector(".techSkills");
const techSvg = techSkills.querySelectorAll("svg")

techSvg.forEach((img) => { 
  img.addEventListener("mouseleave", () => {
    techSvg.forEach((img) => {
      img.setAttribute("style", "transition: all 0.2s ease-in-out")
    })
  })
  img.addEventListener("mouseenter", () => {
    const sectionimg = img.parentNode.children
    const position = Array.from(sectionimg).indexOf(img)
    const selected = techSvg[position]

    
    techSvg.forEach((img) => { 
      img.setAttribute("style", "transition: all 0.2s ease-in-out; cursor:pointer")
    });

    selected.setAttribute("style", "scale:1.2; contrast:1.1; cursor:pointer; fill: #FDBA74; transition: all 0.2s")
    
  })
})

const techLearning = document.querySelector("#techLearning")
const learningSvg = techLearning.querySelectorAll("svg")

learningSvg.forEach((img) => { 
  img.addEventListener("mouseleave", () => {
    learningSvg.forEach((img) => {
      img.setAttribute("style", "transition: all 0.2s ease-in-out")
    })
  })
  img.addEventListener("mouseenter", () => {
    const sectionimg = img.parentNode.children
    const position = Array.from(sectionimg).indexOf(img)
    const selected = learningSvg[position]

    
    learningSvg.forEach((img) => { 
      img.setAttribute("style", "transition: all 0.2s ease-in-out; cursor:pointer")
    });

    selected.setAttribute("style", "scale:1.2; contrast:1.1; cursor:pointer; fill: #FDBA74; transition: all 0.2s")
    
  })
})

