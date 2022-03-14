/* MOVING THE TRAINER START */

let trnr = document.getElementById("trainerSprite");

document.addEventListener("keypress", logKey);

function logKey(e) {
  switch (e.code) {
    case "KeyA":
      trnr.style.backgroundImage = "url(images/Trainer-idle-left.png)";
      break;
    case "KeyW":
      trnr.style.backgroundImage = "url(images/Trainer-idle-back.png)";
      break;
    case "KeyS":
      trnr.style.backgroundImage = "url(images/Trainer-idle-front.png)";
      break;
    case "KeyD":
      trnr.style.backgroundImage = "url(images/Trainer-idle-right.png)";
      break;
    default:
      break;
  }
}
