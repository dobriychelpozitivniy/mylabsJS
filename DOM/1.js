const div = document.createElement('div')
const textDiv = document.createTextNode('Привет, ')
div.appendChild(textDiv)

const span = document.createElement('span')
const textSpan = document.createTextNode('Лена')
span.appendChild(textSpan)
span.setAttribute('style', 'font-size: 150%')

div.appendChild(span)
document.body.appendChild(div)