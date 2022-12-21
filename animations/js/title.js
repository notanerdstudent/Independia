// ? Move Title Animation
var msg = document.title;
var speed = 500;
var endChar = "... ";
var pos = 0;

function moveTitle() {
  var ml = msg.length;

  title = msg.substring(pos, ml) + endChar + msg.substring(0, pos);
  document.title = title;

  pos++;
  if (pos > ml) pos = 0;
  window.setTimeout("moveTitle()", speed);
}

moveTitle();
