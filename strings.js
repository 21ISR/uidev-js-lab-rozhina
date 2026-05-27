const sentence = " javascript - это просто! "
console.log(sentence.trim()[0].toUpperCase() + sentence.trim().slice(1).toLowerCase())
const name="Иванов Иван"
const group="ИСР-21"
const sred=4.75
console.log(`Студент ${name}, группа ${group}, средний балл: ${sred}`)
const date="2025-03-15"
const parts=date.split("-")
console.log(`${parts[2]}.${parts[1]}.${parts[0]}`)
const str="Node.js разработчик"
console.log(str.startsWith("Node"))
console.log(str.endsWith("разработчик"))
console.log("42".padStart(8, "0"))