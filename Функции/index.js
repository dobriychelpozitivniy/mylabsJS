//1
const div = document.getElementById("div");

function setText(string, fontSize) {
  div.innerText = string;
  div.style.fontSize = fontSize + "px";
}

//2
const table = document.getElementById("table");

function setTable(t1, t2, t3, t4) {
  table.innerHTML = `
    <table>
      <tr>
        <td>${t1}</td>
      </tr>
      <tr>
        <td>${t2}</td>
      </tr>
      <tr>
        <td>${t3}</td>
      </tr>
      <tr>
        <td>${t4}</td>
      </tr>
    </table>
  `;
}
