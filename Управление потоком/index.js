//1
const age = 20

//2
if(!(18 <= age && age < 30)) console.log('Для всех возрастов')

//3
if(0 < age && age < 17) console.log('Для детей')

//4
let i = 0
while(i != 50) {
  if(!(i % 2 == 0)) console.log(i)
  i++
}

//5
for(let j = 0; j <= 50; j++) {
  if(!(j % 2 == 0)) console.log(j)
}

//6
for(item in document) {
  console.log(item)
}