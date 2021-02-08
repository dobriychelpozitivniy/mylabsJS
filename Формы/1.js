const arg1 = document.getElementById('arg1')
const arg2 = document.getElementById('arg2')
const math = document.getElementById('math')
const div = document.getElementById('div')
const btn = document.getElementById('btn')


btn.onclick = (e) => {
  const mathResult = eval(`${arg1.value} ${math.value} ${arg2.value}`)
  const result = 'Результат:' + mathResult
  div.innerText = result
}
