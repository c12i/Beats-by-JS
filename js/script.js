window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60D394", "#D36060", "#C060D3", "#D3D160", "#6860D3", "#60B2D3"
    ]

    //enabling sound
   pads.forEach((pad, i) => {
       pad.addEventListener("click", () => {
           sounds[i].currentTime = 0;
           sounds[i].play();
           
           bubbleEffect(i);
       });
   }); 

   //function that adds bubble effect
   const bubbleEffect = (i) => {
       const bubble = document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.backgroundColor = colors[i];
       bubble.style.animation = "jump 1s ease";
   }
});

