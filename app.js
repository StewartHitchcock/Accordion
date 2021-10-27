/*
    Contents
    1. Variables
    2. Functions
*/



// 1. Variables
const accordion = document.getElementsByClassName('container');
const accordionBody = document.getElementById('accordion-body');
let interface = true;
let text = "Interface 2 (One Question Expanded At A Time)";


// 2. Functions 

document.getElementById('textIndicator').innerHTML = text;

function toggle() {
    interface = !interface;
    if (interface) {
        text = "Interface 2 (One Question Expanded At A Time)";
        let active = accordionBody.querySelectorAll(".active");
        active.forEach(element => element.classList.toggle("active"));
    } else if (!interface) {
        text = "Interface 1 (All Questions Can Be Expanded Simultaneously)";
    }
    document.getElementById('textIndicator').innerHTML = text;
}

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
      if (interface) {
        if(this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            let active = accordionBody.querySelectorAll(".active");
            active.forEach(element => element.classList.toggle("active"))
            this.classList.toggle('active');
        }
      } else {
          this.classList.toggle('active');
      }
  });
}
