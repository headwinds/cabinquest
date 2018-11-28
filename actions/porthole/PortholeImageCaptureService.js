function takeScreenshot(win) {

  // the page I need screenshots from is using jQuery, but you can modify this to use plain JS
  height = win.window.$('body').outerHeight();
  width = win.window.$('body').outerWidth();

  win.resizeTo(width, height);

  // unfortunately, we can't use the "resize" event here because it is fired before the DOM is refreshed, that's why I'm simply using a timeout
  setTimeout(function() {
    win.capturePage(function(img) {
      var base64Data = img.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      require("fs").writeFile("/path/to/screenshot.png", base64Data, 'base64', function(err) {
        if(err) {
          alert(err);
        }
      });
    }, 'png');
  }, 500);
}