console.log("Hello");
let totalBill = 0;
let n = 0;
let nhigh = 0;
let nmed = 0;
let nlow = 0;
let hcontribution = [];
let mcontribution = [];
let lcontribution = [];

function getSplits(totalBill, nhigh, nmed, nlow) {
  hcontribution = [];
  mcontribution = [];
  lcontribution = [];
  // Unit for each tier
  let high_unit = 3;
  let med_unit = 2;
  let low_unit = 1;
  // total units
  let total_units = high_unit * nhigh + med_unit * nmed + low_unit * nlow;
  // value per unit
  let per_unit = totalBill / total_units;

  // high contribution
  for (let i = 1; i <= nhigh; i++) {
    hcontribution.push(parseFloat((high_unit * per_unit).toFixed(2)));
  }
  // medium contribution
  for (let i = 1; i <= nmed; i++) {
    mcontribution.push(parseFloat((med_unit * per_unit).toFixed(2)));
  }
  // low contribution
  for (let i = 1; i <= nlow; i++) {
    lcontribution.push(parseFloat((low_unit * per_unit).toFixed(2)));
  }
}
function addRow(table) {
  table.innerHTML =
    table.innerHTML +
    `<tr>
            <td class="name">${
              document.getElementById("contributor").value
            }</td>
            <td class="level">${document.getElementById("level").value}</td>
            <td class="contribution"></td>
        </tr>`;
}
function getNames() {
  let table = document.getElementById("splitTable").firstElementChild;
  let rows = table.getElementsByTagName("tr");
  if (
    rows.length == 1 &&
    !(document.getElementById("contributor").value == "")
  ) {
    addRow(table);
  } else if (!(document.getElementById("contributor").value == "")) {
    let new_entry = document.getElementById("contributor").value;
    flag = true;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i].querySelector(".name").innerText == new_entry) {
        alert("Name already exists!");
        flag = false;
        break;
      }
    }
    if (flag) {
      addRow(table);
    }
  }
}

function getMeta() {
  totalBill = 0;
  n = 0;
  nhigh = 0;
  nmed = 0;
  nlow = 0;
  let table = document.getElementById("splitTable").firstElementChild;
  let crows = table.getElementsByTagName("tr");
  totalBill = parseInt(document.getElementById("bill_amount").value);
  n = rows = table.getElementsByTagName("tr").length - 1;
  for (let i = 1; i < crows.length; i++) {
    if (crows[i].querySelector(".level").innerText == "High") {
      nhigh++;
    } else if (crows[i].querySelector(".level").innerText == "Medium") {
      nmed++;
    } else if (crows[i].querySelector(".level").innerText == "Low") {
      nlow++;
    }
  }
  console.log(totalBill, n, nhigh, nmed, nlow);
}
function generate() {
  let table = document.getElementById("splitTable").firstElementChild;
  let rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].querySelector(".level").innerText == "High") {
      let c = hcontribution.pop();
      rows[i].querySelector(".contribution").innerText = c;
    } else if (rows[i].querySelector(".level").innerText == "Medium") {
      let c = mcontribution.pop();
      rows[i].querySelector(".contribution").innerText = c;
    } else if (rows[i].querySelector(".level").innerText == "Low") {
      let c = lcontribution.pop();
      rows[i].querySelector(".contribution").innerText = c;
    }
  }
}

async function main() {
  // Add event listener to add button
  document.getElementById("add").addEventListener("click", (e) => {
    getNames();
  });

  // Add event listener to generate button
  document.getElementById("generate").addEventListener("click", (e) => {
    if(document.getElementById("bill_amount").value == ''){
        alert("Enter total bill amount!")
    }
    else{

        getMeta();
        getSplits(totalBill, nhigh, nmed, nlow);
        generate();
    }
  });
}

main();
