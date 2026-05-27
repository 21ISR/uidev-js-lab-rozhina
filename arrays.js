const num=[4,5,3,5,2,4,5,3]
const sred=num.reduce((acc,n)=> acc+n,0)/[4,5,3,5,2,4,5,3].length.toFixed(2)
const filter= num.filter(n=>n>3).map(n=> `${n}`)
console.log("Средний балл:", sred)
console.log("Оценки выше 3:", filter)
console.log("Отсортированные:", ["банан", "яблоко", "вишня", "абрикос", "груша"].sort().join(", "))
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
console.log("Товары дешевле 10 000:", products.filter(element=> element.price<10000))
console.log("Названия товаров:", products.map(product=> product.name))
console.log("Суммарная стоимость товаров:", products.reduce((acc,p)=>acc+p.price,0))
console.log("Есть число > 40?:", [12,45,7,33,18].some(n=>n>40))
console.log("Все ли числа > 5?", [12,45,7,33,18].every(n=>n>5))