const div = document.getElementById('div')
div.style.fontSize = (localStorage.getItem('font')) + 'px'
const buttonIncrement = document.getElementById('increment')
const buttonDecrement = document.getElementById('decrement')

if(!div.style.fontSize) {
  localStorage.setItem('font', '16')
}

buttonIncrement.onclick = () => {
  let newFontSize = (localStorage.getItem('font'))
  newFontSize++
  localStorage.setItem('font', newFontSize)
  div.style.fontSize = (localStorage.getItem('font')) + 'px'
}

buttonDecrement.onclick = () => {
  let newFontSize = (localStorage.getItem('font'))
  newFontSize--
  localStorage.setItem('font', newFontSize)
  div.style.fontSize = (localStorage.getItem('font')) + 'px'
}