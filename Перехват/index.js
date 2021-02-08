let clientX = ''
let clientY = ''
let button = ''

const setDiv = () => {
  const div = document.getElementById('div')
  div.innerText = `Координаты мышки: ${clientX}:${clientY}, код клавиши: ${button}`
}

document.onkeypress = (e) => {
  button = e.code
  setDiv()
}

document.onmousemove = (e) => {
  clientX = e.clientX
  clientY = e.clientY
  setDiv()
}