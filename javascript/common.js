// $(document).ready(function () {
//   var isLogin = localStorage.getItem("isLogin");
//   if (isLogin !== "true") {
//     window.location.replace("/login/");
//   } else {
//     document.getElementsByTagName("html")[0].style = "";
//   }
// });

function logout() {
  localStorage.removeItem("isLogin");
  window.location.replace("/login/");
}

function backToHome() {
  window.location.replace("/ar/sample_generate/");
}
