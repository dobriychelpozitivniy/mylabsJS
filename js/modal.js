

const myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('show.bs.modal', function (event) {
  const modalBody = document.querySelector('.modal-body')
  if(!localStorage.getItem('items')) {
    modalBody.textContent = 'Товары еще не добавлены'
    return
  }
  modalBody.innerHTML = ''

  const table = document.createElement('table')
  table.className = 'table'

  table.innerHTML = ` 
  <thead>
  <tr>
    <th scope="col" colspan="2">Товар</th>
    <th scope="col">Количество</th>
    <th scope="col">Стоимость</th>
  </tr>
  </thead>
  <tbody>
    ${createTBodyInner()}
    ${createDesctiptionShop()}
  </tbody>
  `
  modalBody.appendChild(table)
})

function createTBodyInner() {
  const items = JSON.parse(localStorage.getItem('items'))
  let inner = ''

  for(item of items) {
    inner += `
      <tr>
        <td><img style="width: 100px; height: 150px;" src="${item.img}" alt=""></td>
        <td>${item.name}</td>
        <td>${item.count}</td>
        <td>${item.price * item.count}</td>
      </tr>
    `
  }
  return inner
}

function createDesctiptionShop() {
  const items = JSON.parse(localStorage.getItem('items'))
  let price = 0
  let counts = 0

  for(item of items) {
    counts += item.count
    price += item.price * item.count
  }

  return `
  <tr>
    <td colspan="2">Всего: ${counts}</td>
    <td colspan="2">Итог: ${price}</td>
  </tr>
  `
}