function deposit() {

  let amount = Number($("#amount").val());

  if (amount <= 0) {
    alert("Ingrese un monto válido");
    return;
  }

  let balance = Number(localStorage.getItem("balance"));
  balance += amount;

  localStorage.setItem("balance", balance);

  saveTransaction("Depósito", amount);

  $("#message").text("Depósito realizado con éxito");
  $("#amount").val("");
}

function saveTransaction(type, amount) {
  let transactions = JSON.parse(localStorage.getItem("transactions"));

  transactions.push({
    type: type,
    amount: amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));
}
