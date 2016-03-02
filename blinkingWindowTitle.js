
function blinkingWindowTitle() {
  window.setInterval(function(){ changeTitle() }, 250);
  var windowTitle = "Pew Pew Pew";
  var i = 0;

  function changeTitle() {
    var title = "";
    for(var k = 0; k <= i; k++) {
      title += windowTitle[k];
    }

    if(i < windowTitle.length - 1) {
      i++;
    } else {
      i = 0;
    }

    document.title = title;
  }
}
