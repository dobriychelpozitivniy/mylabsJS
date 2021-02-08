const img = document.getElementById('img')
img.style.position = 'absolute'

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight


const timer = setInterval(() => {
  img.style.top = Math.floor(Math.random() * (pageHeight - 0)) + 0 + 1 + 'px';
  img.style.left = Math.floor(Math.random() * (pageWidth - 0)) + 0 + 1 + 'px';
},1000)


