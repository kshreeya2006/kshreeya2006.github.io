const items= [
    {name:"Apple", price:40, qty:3, status:"pending"},
    {name:"Banana", price:30, qty:5, status:"pending"},
    {name:"Orange", price:80, qty:2, status:"pending"}
];

//updaate the price and status
const updatedItems= items.map(item=>({
    ...item, 
    price: item.price+5,
    status: "completed",
    total: (item.price+5)* item.qty
}));

//print name, price, qty, total where qty>2
//Hint: use filter and map

/**console.log(updatedItems);**/

const filteredItems = updatedItems.filter(item => item.qty > 2).map(item => {
    console.log(`Name: ${item.name}, Price: ${item.price}, Qty: ${item.qty}, Total: ${item.total}`);
  });

