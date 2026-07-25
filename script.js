// Disable Right Click --MahilanJP
//  document.addEventListener("contextmenu", function(event) {
  //   event.preventDefault();
//});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U --MahilanJP
  //document.addEventListener("keydown", function(event) {
    //   if (event.key === "F12") {
      //       event.preventDefault();
        //     return false;
         //}
       //if (event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "I") {
         //   event.preventDefault();
           // return false;
       // }
       //if (event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "J") {
         //   event.preventDefault();
           //  return false;
         //}
       //if (event.ctrlKey && event.shiftKey && event.key.toUpperCase() === "C") {
         //   event.preventDefault();
           // return false;
         //}

       //if (event.ctrlKey && event.key.toUpperCase() === "U") {
         //   event.preventDefault();
           // return false;
        //}

    //});
      //document.addEventListener("selectstart", function(event) {
        //  event.preventDefault();
     //});

      //document.addEventListener("dragstart", function(event) {
        //    event.preventDefault();
        //});

//Homepage UI + Mobile Menu --MahilanJP
    const mhWords = [
      "Designer",
      "Creator",
      "Engineer"
    ];

    const mhChangingWord =
    document.getElementById(
      "mh-changing-word"
    );

    let mhIndex = 0;

    setInterval(() => {

      mhIndex =
      (mhIndex + 1) % mhWords.length;

      mhChangingWord.textContent =
      mhWords[mhIndex];

    }, 1000);

    const mhHomepage =
    document.getElementById(
      "mh-homepage"
    );

    const mhThemeBtn =
    document.getElementById(
      "mh-theme-btn"
    );

    let darkMode = false;

    mhThemeBtn.addEventListener(
      "click",
      () => {

        darkMode = !darkMode;

        mhHomepage.classList.toggle(
          "dark-mode"
        );

        if(darkMode){
          mhThemeBtn.innerHTML = "☀";

        }else{

          mhThemeBtn.innerHTML = "☾";

        }

      }
    );

//Blinking Text
  document.addEventListener("DOMContentLoaded", function () {
    function writeText(element, content) {
      let contentArray = content.split(""),
          current = 0;
      
      let interval = setInterval(function () {
        if (current < contentArray.length) {
          element.textContent += contentArray[current++];
        } else {
          clearInterval(interval);
        }
      }, 350);
    }
     const element = document.getElementById("mh-holder");
    writeText(element, "FULL STACK DEVELOPER");
  });
  //Mobile Menu
    const mhMobileBtn =
    document.getElementById(
      "mh-mobile-btn"
    );

    const mhMobileMenu =
    document.getElementById(
      "mh-mobile-menu"
    );

    const mhMenuClose =
    document.getElementById(
      "mh-menu-close"
    );

    mhMobileBtn.addEventListener(
      "click",
      () => {

        mhMobileMenu.classList.add(
          "show"
        );

        document.body.style.overflow =
        "hidden";

      }
    );

    /* CLOSE */

    mhMenuClose.addEventListener(
      "click",
      () => {

        mhMobileMenu.classList.remove(
          "show"
        );

        document.body.style.overflow =
        "auto";

      }
    );
   //AUTO CLOSE MOBILE MENU

const mhMobileLinks =
document.querySelectorAll(
  ".mh-mobile-menu a"
);

mhMobileLinks.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      mhMobileMenu.classList.remove(
        "show"
      );

      document.body.style.overflow =
      "auto";

    }
  );

});

    const mhCanvas =
    document.getElementById(
      "mh-bg-canvas"
    );

    const mhCtx =
    mhCanvas.getContext("2d");

    function mhResizeCanvas(){

      mhCanvas.width =
      window.innerWidth;

      mhCanvas.height =
      window.innerHeight;

    }

    mhResizeCanvas();
    class MHBlob{

      constructor(
        x,
        y,
        radius,
        darkColor,
        lightColor
      ){

        this.x = x;
        this.y = y;

        this.radius = radius;

        this.darkColor =
        darkColor;

        this.lightColor =
        lightColor;

        this.angle =
        Math.random() * Math.PI * 2;

        this.speed =
        0.002 + Math.random() * 0.003;

      }

      update(){

        this.angle += this.speed;

      }

      getColor(){

        return mhHomepage.classList.contains(
          "dark-mode"
        )
        ? this.darkColor
        : this.lightColor;

      }

      draw(){

        const moveX =
        Math.cos(this.angle) * 80;

        const moveY =
        Math.sin(this.angle) * 80;

        const gradient =
        mhCtx.createRadialGradient(

          this.x + moveX,
          this.y + moveY,

          0,

          this.x + moveX,
          this.y + moveY,

          this.radius

        );

        gradient.addColorStop(
          0,
          this.getColor()
        );

        gradient.addColorStop(
          1,
          "transparent"
        );

        mhCtx.beginPath();

        mhCtx.fillStyle =
        gradient;

        mhCtx.arc(

          this.x + moveX,
          this.y + moveY,

          this.radius,

          0,
          Math.PI * 2

        );

        mhCtx.fill();

      }

    }
    function mhCreateBlobs(){

      const mobile =
      window.innerWidth < 768;

      return [

        new MHBlob(

          mobile
          ? window.innerWidth * 0.55
          : window.innerWidth * 0.78,

          mobile ? 120 : 180,

          mobile ? 260 : 320,

          "rgba(163,177,138,0.45)",

          "rgba(163,177,138,0.65)"

        ),

        new MHBlob(

          mobile
          ? window.innerWidth * 0.92
          : window.innerWidth * 0.88,

          mobile ? 260 : 420,

          mobile ? 220 : 280,

          "rgba(58,90,64,0.28)",

          "rgba(58,90,64,0.40)"

        ),

        new MHBlob(

          mobile
          ? window.innerWidth * 0.8
          : window.innerWidth * 0.95,

          mobile ? 80 : 150,

          mobile ? 320 : 400,

          "rgba(255,255,255,0.18)",

          "rgba(255,255,255,0.95)"

        ),

        new MHBlob(

          mobile
          ? window.innerWidth * 0.5
          : window.innerWidth * 0.82,

          mobile ? 520 : 580,

          mobile ? 260 : 260,

          "rgba(11,82,91,0.45)",

          "rgba(11,82,91,0.45)"

        )

      ];

    }

    let mhBlobs =
    mhCreateBlobs();

    window.addEventListener(
      "resize",
      () => {

        mhResizeCanvas();

        mhBlobs =
        mhCreateBlobs();

      }
    );


    function mhAnimate(){

      mhCtx.clearRect(

        0,
        0,

        mhCanvas.width,
        mhCanvas.height

      );

      mhCtx.fillStyle =
      mhHomepage.classList.contains(
        "dark-mode"
      )
      ? "#020202"
      : "#f4f4f4";

      mhCtx.fillRect(

        0,
        0,

        mhCanvas.width,
        mhCanvas.height

      );

      mhBlobs.forEach(blob => {

        blob.update();

        blob.draw();

      });

      requestAnimationFrame(
        mhAnimate
      );

    }

    mhAnimate();


//Scroll Bar
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href*="#"]');
  
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
//Calculate Age Dynamically
       const dob = new Date("2009-05-30");
       const ageDisplay = document.getElementById("age");
     
       const today = new Date();
       let age = today.getFullYear() - dob.getFullYear();
       const m = today.getMonth() - dob.getMonth();
     
       if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
         age--;
       }
     
       ageDisplay.textContent = `${age} years`;
 //intropage
 AOS.init();  
 //Project Page Card Slideshow
const mhProjects = [

  {
    image:"img/project1.png",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Weather App Using JS",
    desc:"A responsive weather forecasting application built using HTML, CSS, and React JS with real-time weather updates, temperature tracking, and a clean modern user interface.",
    btn1:{label:"Github",url:"https://github.com/mahilanjp"}
  },

  {
    image:"img/project2.png",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Music App Using MongoDB",
    desc:"A full-stack music streaming application developed using HTML, CSS, JavaScript, Node.js, and MongoDB featuring playlist management, smooth audio controls, and responsive UI.",
    btn1:{label:"Github",url:"https://github.com/mahilanjp"}
  },

  {
    image:"img/project3.png",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎‎ ‎ ‎ ‎   Voice Calculator",
    desc:"An interactive voice-enabled calculator built using HTML, CSS, and JavaScript that performs quick mathematical calculations through speech recognition technology.",
    btn1:{label:"Github",url:"https://github.com/mahilanjp"}
  },

  {
    image:"img/project4.png",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Task Management System",
    desc:"A smart task management system developed using Python for organizing daily activities, tracking progress, and improving workflow productivity with a clean interface.",
    btn1:{label:"Github",url:"https://github.com/mahilanjp"}
  },
  {
    image:"img/project5.png",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ E-commerce Site ",
    desc:"A modern ecommerce platform developed using Java, HTML, CSS, JavaScript, MySQL, and Bootstrap featuring secure product management, responsive shopping UI, and seamless user experience.",
    btn1:{label:"Github",url:"https://github.com/mahilanjp"}
  }

];

const mhTrack = document.getElementById("mhProjectTrack");
const mhDots = document.getElementById("mhProjectDots");
const mhPrevBtn = document.getElementById("mhPrevBtn");
const mhNextBtn = document.getElementById("mhNextBtn");

let mhCurrent = 0;

function mhRenderProjects(){

  mhTrack.innerHTML = "";
  mhDots.innerHTML = "";

  mhProjects.forEach((project,index)=>{

    const card = document.createElement("div");

    card.className =
      "mh-project-card" +
      (index === mhCurrent ? " mh-project-active" : "");

    card.innerHTML = `

<div class="mh-project-image">
  <img src="${project.image}" alt="${project.title}" class="mh-project-image-tag">
</div>

      <div class="mh-project-body">

        <div class="mh-project-card-title">
          ${project.title}
        </div>

        <div class="mh-project-description">
          ${project.desc}
        </div>

        <div class="mh-project-actions">

  <a href="${project.btn1.url}"
  class="mh-project-btn mh-project-btn-primary mh-project-full-btn">
  <i class="fa-brands fa-github"></i>
    ${project.btn1.label}
  </a>

</div>
    `;

    card.addEventListener("click",()=>{
      mhCurrent = index;
      mhUpdateCarousel();
    });

    mhTrack.appendChild(card);

    /* DOTS */

    const dot = document.createElement("div");

    dot.className =
      "mh-project-dot" +
      (index === mhCurrent ? " mh-project-active" : "");

    dot.addEventListener("click",()=>{
      mhCurrent = index;
      mhUpdateCarousel();
    });

    mhDots.appendChild(dot);

  });

}

function mhUpdateCarousel(){

  mhRenderProjects();

  const firstCard = mhTrack.children[0];

  if(!firstCard) return;

  const cardWidth = firstCard.offsetWidth + 20;

  const containerWidth =
    mhTrack.parentElement.offsetWidth;

  let offset =
    mhCurrent * cardWidth -
    (containerWidth / 2 - cardWidth / 2);

  if(window.innerWidth <= 768){
    offset = mhCurrent * (firstCard.offsetWidth + 12);
  }
const extraPadding = 40;

const trackMax =
  mhTrack.scrollWidth -
  containerWidth +
  extraPadding;

offset = Math.max(
  0,
  Math.min(offset, trackMax)
);

  mhTrack.style.transform =
    `translateX(-${offset}px)`;

  mhPrevBtn.disabled = mhCurrent === 0;

  mhNextBtn.disabled =
    mhCurrent === mhProjects.length - 1;

}

mhPrevBtn.addEventListener("click",()=>{

  if(mhCurrent > 0){
    mhCurrent--;
    mhUpdateCarousel();
  }

});

mhNextBtn.addEventListener("click",()=>{

  if(mhCurrent < mhProjects.length - 1){
    mhCurrent++;
    mhUpdateCarousel();
  }

});

let mhTouchStartX = 0;

mhTrack.addEventListener("touchstart",(e)=>{
  mhTouchStartX = e.touches[0].clientX;
});

mhTrack.addEventListener("touchend",(e)=>{

  const diff =
    mhTouchStartX -
    e.changedTouches[0].clientX;

  if(Math.abs(diff) > 40){

    if(diff > 0 &&
      mhCurrent < mhProjects.length - 1){

      mhCurrent++;
      mhUpdateCarousel();

    }

    else if(diff < 0 &&
      mhCurrent > 0){

      mhCurrent--;
      mhUpdateCarousel();

    }

  }

});

window.addEventListener("resize",mhUpdateCarousel);

mhRenderProjects();
mhUpdateCarousel();

//Scroll Bar Icon- from down to up 
const mhScrollBtn =
document.querySelector(".mh-scroll-top");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){

    mhScrollBtn.classList.add("mh-show-scroll");

  }

  else{

    mhScrollBtn.classList.remove("mh-show-scroll");

  }

});
// EmailJS Validator
// Initialize EmailJS
(function() {
    emailjs.init("T5chQZALxrNORtvJe"); 
})();

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name_input').value.trim();
    const email = document.getElementById('email_input').value.trim();
    const phone = document.getElementById('telephone_input').value.trim();
    const subject = document.getElementById("subject_input").value;
    const message = document.getElementById('message_input').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    emailjs.send("service_pwwifzi", "template_52r9ulk", {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_subject: subject,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact_form').reset(); // Reset form after submission
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
});
