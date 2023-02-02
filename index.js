const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const startingCount = +counter.innerHTML;
    const increment = targetCount / 18;
    if (startingCount < targetCount) {
      counter.innerHTML = `${startingCount + increment}`;
      setTimeout(updateCounter, 250);
    }
  };
  updateCounter();
});



var deadline = new Date("Feb 03, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("times").remove();
    document.getElementById("show").classList.add("show");
    document.getElementById("heading").remove();
    document.getElementById("profileImgId").remove();
    document.getElementById("btn").remove();
    music.pause();
    clearInterval(myInterval);
    
  }
}, 1000);


let music = new Audio("gaana10.mp3")
let musicplay = () => {
  music.play();
};

let myInterval = setInterval(musicplay, 100);
musicplay();
