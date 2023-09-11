function showLastModified(element, src) {
  $.get(src, function (data, status, xhr) {
    // in the callback - after the ajax request completes...
    var filetime = xhr.getResponseHeader("Last-Modified");
    element.nextElementSibling.innerHTML =
      "最終更新日時: " + moment(filetime).format("DD/MM/YYYY hh:mm:ss A");
  });
}
var qr_images = document.getElementsByClassName("qr-image");
for (i = 0; i < qr_images.length; i++) {
  showLastModified(qr_images[i], "no" + (i + 1) + "/img/06.png");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
