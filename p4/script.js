const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

function verify() {
  const cardInput = document.getElementById("card").value;
  const pinInput = document.getElementById("pin").value;

  const customer = customers.find(
    (c) => c.card === cardInput && c.pin === pinInput
  );

  if (customer) {
    document.body.innerHTML = `<h1>Welcome ${customer.name}!!</h1>`;
  } else {
    alert("Invalid card or PIN");
  }
}
