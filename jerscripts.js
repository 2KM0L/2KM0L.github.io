// var ankhaSong = new Audio("./ankha/ankha.wav");
// ankhaSong.loop = true;

// function ankhaDance() {
//   ankhaSong.play();
// }

var domSfxtion = document.createElement("audio")
document.body.appendChild(domSfxtion);
domSfxtion.src = "./ankha/ankha.wav";
domSfxtion.loop = true;

document.body.addEventListener("mousemove", function() {
  domSfxtion.play();
});

// audioElement.addEventListener('ended', function() {
//   this.currentTime = 0;
//   this.play();
// }, false);