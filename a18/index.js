function add(x,y){
    return  new Promise ((resolve,reject)=>{
        resolve(x+y);
    });
}

function sqr(a){
    return a*a
}

async function main(){
    let sum= await add(4,5)
    let result= sqr(sum)
    console.log(result)
}
main()