const div = document.getElementById('div')
let i = 0
const timer = setInterval(() => {
  let timeOfYear = ''
  if(i === 0) {
    timeOfYear = 'Зима'
    i++
  } else if (i===1) {
    timeOfYear = 'Весна'
    i++
  } else if (i===2) {
    timeOfYear = 'Лето'
    i++
  } else if (i===3) {
    timeOfYear = 'Осень'
    i = 0
  }
  div.innerText = `Лучшее время года - ${timeOfYear}!`
},2000)