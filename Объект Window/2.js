const cells = document.getElementsByTagName('td')
const tr = document.getElementsByTagName('tr')
const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight
let i = 0;

for(trItem of tr) {
  trItem.style.width = pageWidth - 50 + 'px'
}

for (td of cells) {
  const color = i % 2 == 0 ? 'black' : 'white'
  td.style.backgroundColor = color
  td.style.border = '1px solid black'
  td.style.width = '100%'
  td.style.height = pageHeight / 9 - 5 + 'px'
  td.style.maxWidth = '200px'
  i++
}

let j = 0
const timer = setInterval( function () {
  let i = 0
  for (td of cells) {
    let color = ''
    if(j % 2 == 0) {
      color = i % 2 == 0 ? 'white' : 'black'
    } else {
      color = i % 2 == 0 ? 'black' : 'white'
    }
    td.style.backgroundColor = color
    i++
  }
  j++
},500)