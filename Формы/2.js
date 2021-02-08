const div = document.getElementById('div')

document.onclick = (e) => {
  if(e.target.tagName != 'BUTTON') return
  const color = e.target.id
  div.style.backgroundColor = color
}