function login() {
  const email = $("#email").val();
  const password = $("#password").val();

  if (email === "admin@alkewallet.com" && password === "1234") {

    localStorage.setItem("user", email);

    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", 1000);
      localStorage.setItem("transactions", JSON.stringify([]));
    }

    window.location.href = "menu.html";

  } else {
    $("#error").text("Usuario o contraseña incorrectos");
  }
}
