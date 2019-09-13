window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    //enabling sound
   pads.forEach((pad, i) => {
       pad.addEventListener("click", () => {
           sounds[i].play();
       })
   }); 
});

