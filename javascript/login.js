function login() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  if (username == "" || password == "") {
    alert("Username and password cannot be empty");
  } else if (username == "admin" && password == "123456789") {
    localStorage.setItem("isLogin", "true");
    window.location.replace("/ar/sample_generate/");
  } else {
    alert("The username or password is incorrect");
  }
}

window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    login();
  }
});
