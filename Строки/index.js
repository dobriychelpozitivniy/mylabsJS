//1
const input = document.getElementById("input");
const div = document.getElementById("div");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

input.oninput = (e) => {
  if(validateEmail(e.target.value)) {
    div.innerText = 'email валидный'
    div.style.color = 'green'
  } else {
    div.innerText = 'email невалидный'
    div.style.color = 'red'
  }
};

//2
function createRows(array) {
  let result = ``
  array.forEach((el) => {
    result += `
      <tr>
        <td>${el.toFixed(2)}</td>
      </tr>
    `
  })
  return result
}

const array = new Array(10).fill('').map(el => {
  el = Math.random() * (100 - 0) + 0 + 1;
  return el;
})
array.sort()


const table = document.getElementById('table')
table.innerHTML = `
  <table>
    ${createRows(array)}
  </table>
`
table.style.textAlign = 'right'

//3
const re = /<td>/gi
const str = '<table><tr><td>0</td><td>1</td><td>2</td></tr>'+
            '<tr><td>3</td><td>4</td><td>5</td></tr>'+
            '<tr><td>6</td><td>7</td><td>8</td></tr></table>'
const newstr = str.replace(re, '<td style="text-align:right;">')

const table2 = document.getElementById('table2')
table2.innerHTML = newstr
