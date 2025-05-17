const items= [
    {name:"Apple", price:40, status:"pending"},
    {name:"Banana", price:30, status:"pending"},
    {name:"Orange", price:80, status:"pending"}
];

const updatedItems= items.map(item=>({
    ...item, 
    price: item.price+5,
    status: "completed"
}));

console.log(updatedItems);