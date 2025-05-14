const add= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1+n2;
    const output = `Addition: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};

const sub= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1-n2;
    const output = `Subtraction: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
    
};

const mul= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r=n1*n2;
    const output = `Multiplication: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};

const div= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1/n2;
    const output = `Division: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};