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
    writeText(element, "FRONT-END + BACK-END DEVELOPER");
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

          "rgba(255,0,80,0.45)",

          "rgba(255,0,80,0.65)"

        ),

        new MHBlob(

          mobile
          ? window.innerWidth * 0.92
          : window.innerWidth * 0.88,

          mobile ? 260 : 420,

          mobile ? 220 : 280,

          "rgba(255,40,40,0.28)",

          "rgba(255,40,40,0.40)"

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

          "rgba(255,20,60,0.32)",

          "rgba(255,20,60,0.40)"

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
 
 // EmailJS Validator
// Initialize EmailJS
(function() {
    emailjs.init("T5chQZALxrNORtvJe"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    emailjs.send("service_w1ut6lj", "template_52r9ulk", {
        user_name: name,
        user_email: email,
        user_phone: phone,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form after submission
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
});
