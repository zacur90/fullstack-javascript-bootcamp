let contacts = ["Ana", "Pedro", "Juan", "María", "Carlos"];

$(document).ready(function(){
  loadContacts();

  $("#contact").on("keyup", function(){
    let value = $(this).val().toLowerCase();
    $("#contactList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function loadContacts(){
  $("#contactList").empty();
  contacts.forEach(c => {
    $("#contactList").append(`<li class="list-group-item">${c}</li>`);
  });
}

function sendMoney(){
  let contact = $("#contact").val();
  let amount = Number($("#amount").val());
  let balance = Number(localStorage.getItem("balance"));

  if(!contacts.includes(contact)){
    alert("Contacto no válido");
    return;
  }

  if(amount <= 0 || amount > balance){
    alert("Monto inválido");
    return;
  }

  balance -= amount;
  localStorage.setItem("balance", balance);

  saveTransaction("Envío a " + contact, amount);

  $("#msg").text("Transferencia realizada");
  $("#amount").val("");
}

function saveTransaction(type, amount){
  let tx = JSON.parse(localStorage.getItem("transactions"));
  tx.push({
    type: type,
    amount: amount,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("transactions", JSON.stringify(tx));
}
