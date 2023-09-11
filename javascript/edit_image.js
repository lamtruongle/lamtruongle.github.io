function resetFile(id) {
  const file = document.getElementById(id);
  file.value = "";
}

function clearAll() {
  const files = document.getElementsByClassName("file");
  for (let i = 0; i < files.length; i++) {
    files[i].value = "";
  }
}
function imageIsValid() {
  const images = document.getElementsByClassName("file");
  var isValid = true;
  var allowedExtension = ["png", "jpg"];
  for (let i = 0; i < images.length; i++) {
    fileExtension = images[i].value.split(".").pop().toLowerCase();
    if (!allowedExtension.includes(fileExtension) && fileExtension != "")
      return false;
  }
  return isValid;
}

var myModal1 = document.getElementById("exampleModal1");
var myModal2 = document.getElementById("exampleModal2");

myModal1.addEventListener("shown.bs.modal", function () {});
myModal1.addEventListener("shown.bs.modal", function () {});
$("#create-ar").click(function () {
  console.log(imageIsValid());
  if (!imageIsValid()) {
    alert("Allowed Extensions are : *.png and *.jpg");
  } else {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    uploadSuccess = true;
    for (i = 1; i <= 6; i++) {
      if ($("#formFile" + i)[0].files[0] == undefined) continue;
      var formData = new FormData();
      formData.append("file", $("#formFile" + i)[0].files[0]);
      formData.append("folder", urlParams.get("qr_folder"));
      formData.append("filename", "0" + i);
      $.ajax({
        url: "https://sample-genarate.pro-vision-xr.com/ar/sample_generate/upload.php",
        type: "POST",
        data: formData,
        processData: false, // prevent jQuery from converting the data
        contentType: false, // prevent jQuery from setting contentType
        success: function (data) {
          uploadSuccess = true;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          uploadSuccess = false;
        },
      });
    }
    if (uploadSuccess == true) {
      alert("Update Successfully");
    } else {
      alert("Update Failure");
    }
    location.reload();
  }
});
function loadURLToInputFiled(url, id) {
  getImgURL(url, (imgBlob) => {
    // Load img blob to input
    // WIP: UTF8 character error
    filename = getFilename(url);
    console.log(imgBlob);
    let file = new File(
      [imgBlob],
      filename,
      { type: "image/png", lastModified: new Date().getTime() },
      "utf-8"
    );
    let container = new DataTransfer();
    container.items.add(file);
    document.querySelector(id).files = container.files;
  });
}
// xmlHTTP return blob respond
function getImgURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}
function getFilename(url) {
  return url.substring(url.lastIndexOf("/") + 1);
}
function urlExists(url, id) {
  $.get(url)
    .done(function () {
      loadURLToInputFiled(url, id);
    })
    .fail(function () {
      return;
    });
}
var folder = window.location.search;
const params = new URLSearchParams(folder);
var src = params.get("qr_folder");
urlExists(src + "/img/01.png", "#formFile1");
urlExists(src + "/img/02.png", "#formFile2");
urlExists(src + "/img/03.png", "#formFile3");
urlExists(src + "/img/04.png", "#formFile4");
urlExists(src + "/img/05.png", "#formFile5");
urlExists(src + "/img/06.png", "#formFile6");
