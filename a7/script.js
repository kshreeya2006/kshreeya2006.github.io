const getVal = id => parseFloat(document.getElementById(id).value);

function result() {
  const a = getVal("t1"), b = getVal("t2");
  const output = `
    Addition: ${a + b}<br>
    Subtraction: ${a - b}<br>
    Multiplication: ${a * b}<br>
    Division: ${b !== 0 ? (a / b) : 'Cannot divide by zero'}
  `;
  document.getElementById("result").innerHTML = output;
  console.log(output.replace(/<br>/g, '\n'));
}