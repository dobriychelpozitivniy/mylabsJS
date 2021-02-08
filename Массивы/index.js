//1
const array = new Array(6).fill("").map((el) => {
  el = Math.floor(Math.random() * (40 - 0)) + 0 + 1;
  console.log(el);
  return el;
});
console.log(...array);
const minIndex = array.indexOf(Math.min(...array)),
  maxIndex = array.indexOf(Math.max(...array));

[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]];
console.log(...array);

//2,3
const authors = new Map([
  [
    "Пушкин", 
    ["книгаПушкина1", "книгаПушкина2", "книгаПушкина3"]
  ],
  [
    "Толстой", 
    ["книгаТолстого1", "книгаТолстого2", "книгаТолстого3"]
  ],
  [
    "Лермонтов", 
    ["книгаЛермонтова1", "книгаЛермонтова2", "книгаЛермонтова3"]],
]);

for (let [key, value] of authors.entries()) {
  console.log(key + ": " + value.join(", "));
}

//4
let summ = 0
const anotherArray = new Array(10).fill("").map((el) => {
  el = Math.floor(Math.random() * (40 - 0)) + 0 + 1;
  console.log(el);
  summ += el
  return el;
});
console.log(summ)
