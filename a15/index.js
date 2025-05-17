const items= [
    {id:1, name:"Apple", price:40},
    {id:2, name:"Banana", price:30},
    {id:3, name:"Orange", price:80}
];

//item id and qty
const cart={1:7, 3:5}

items.map((value) => {
  if (cart[value.id]) {
    const total = value.price * cart[value.id];
    console.log(value.id, value.name, value.price, cart[value.id], total);
  }
});

/**
const items= [
    {id:1, name:"Apple", price:40, qty:3, status:"pending"},
    {id:2, name:"Banana", price:30, qty:5, status:"pending"},
    {id:3, name:"Orange", price:80, qty:2, status:"pending"}
];

//update the price and status
const updatedItems= items.map(item=>({
    ...item, 
    price: item.price+5,
    status: "completed",
    total: (item.price+5)* item.qty
}));

//print name, price, qty, total where qty>2
//Hint: use filter and map

console.log(updatedItems);

const filteredItems = updatedItems.filter(item => item.qty > 2).map(item => {
    console.log(`Name: ${item.name}, Price: ${item.price}, Qty: ${item.qty}, Total: ${item.total}`);
  });
**/
