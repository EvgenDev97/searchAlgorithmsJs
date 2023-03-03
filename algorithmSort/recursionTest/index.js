let offset = 0;
const forward = document.querySelector(".test");
function move() {
  forward.style.left = offset + "px";
  offset = offset + 5;
  if (offset > 200) {
    return true;
  }
  setTimeout(move, 200);
}
document.querySelector(".button").onclick = move;

function back() {
  forward.style.right = offset + "px";
  offset = offset + 5;
  if (offset > 200) {
    return true;
  }
  setTimeout(back, 200);
}
document.querySelector(".back").onclick = back;
