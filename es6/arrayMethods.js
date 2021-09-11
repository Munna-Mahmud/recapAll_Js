const products =[
{Name: 'laptop', Price: 60000, color: 'black', Brand: "asus"},

{Name: 'laptop', Price: 30200, color: 'golden', Brand: "Hp"},

{Name: 'laptop', Price: 30000, color: 'white', Brand: "mac"},

{Name: 'laptop', Price: 14000, color: 'gray', Brand: "Lenovo"},

{Name: 'laptop', Price: 23000, color: 'golden', Brand: "Lenovo"},

{Name: 'laptop', Price: 90000, color: 'silver', Brand: "mac"}
]

//now i just want all the price list 
const allprice= products.map(product => product.Price);
// console.log(allprice)

// just get the  brandname
//  products.forEach( product => console.log(product.Brand)); 
//  Hp
//  mac
//  Lenovo
//  Lenovo
//  mac

//filter
const lowPrice = products.filter(product => product.Price <= 30000)
// console.log(lowPrice)

//find
const find = products.find(p => p.Brand.includes('m'))
 console.log(find)
