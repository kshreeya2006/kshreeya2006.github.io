const add= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
      document.getElementById("result").innerHTML = `Addition: ${n1 + n2}`;
};

const sub= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    document.getElementById("result").innerHTML = `Subtraction: ${n1 - n2}`;
};

const mul= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    document.getElementById("result").innerHTML = `Multiplication: ${n1 * n2}`;
};

const div= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
      if (n2 === 0) {
    document.getElementById("result").innerHTML = `Cannot divide by zero`;
  } else {
    document.getElementById("result").innerHTML = `Division: ${n1 / n2}`;
};