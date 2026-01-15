$(document).ready(function () {

  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "login.html";
  }

  let balance = localStorage.getItem("balance");
  $("#balance").text("$" + balance);

});

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
