const products=[
    {id:1, name:"Product1", price:34},
    {id:2, name:"Product2", price:56},
    {id:3, name:"Product3", price:43},
]

products.map(product => {
  console.log(product.name, product.price + 5);
});