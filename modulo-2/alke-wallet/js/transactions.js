$(document).ready(function(){

  let transactions = JSON.parse(localStorage.getItem("transactions"));

  if(transactions.length === 0){
    $("#transactionsTable").html("<tr><td colspan='3'>No hay movimientos</td></tr>");
    return;
  }

  transactions.forEach(t => {
    $("#transactionsTable").append(`
      <tr>
        <td>${t.type}</td>
        <td>$${t.amount}</td>
        <td>${t.date}</td>
      </tr>
    `);
  });

});
