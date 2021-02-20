const btnPurshase = document.querySelectorAll("[data-btn-shop]");
const toastElement = document.querySelector(".toast");
const toast = new bootstrap.Toast(toastElement);

for (node of btnPurshase) {
  node.addEventListener("click", (e) => {
    const btn = e.target;
    const idShop = btn.dataset.btnShop;
    const dataShopItems = document.querySelectorAll(
      `[data-item-shop="${idShop}"]`
    );

    const name = dataShopItems[0].textContent;
    const img = dataShopItems[1].getAttribute("src");
    const price = dataShopItems[2].textContent;

    let items = JSON.parse(localStorage.getItem("items"));
    toast.show();
    setTimeout(() => {
      toast.hide();
    }, 1000);

    if (items) {
      for (item of items) {
        if (item.name === name) {
          item.count = item.count + 1;
          localStorage.setItem("items", JSON.stringify(items));
          console.log(JSON.parse(localStorage.getItem("items")));
          return;
        }
      }
      addInStorage(name, img, price);
    } else {
      addInStorage(name, img, price);
    }
  });
}

function addInStorage(name, img, price) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const item = {
    name,
    img,
    price,
    count: 0,
  };
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  console.log(JSON.parse(localStorage.getItem("items")));
}
