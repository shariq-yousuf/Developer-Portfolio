const saveBtn = document.querySelector("#save-btn");
const editBtn = document.querySelector("#edit-btn");
const currencyType = document.querySelector("#currency-type");
const clearBtn = document.querySelector("#clear-btn");
const inputEl = document.querySelector("#cash");
const changeDueEl = document.querySelector("#change-due");
const cidTable = document.querySelector("#cid-table");

const cid = {
  PKR: [
    ["ONE", 0],
    ["TWO", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["FIFTY", 0],
    ["HUNDRED", 0],
    ["FIVE HUNDRED", 0],
    ["THOUSAND", 0],
    ["FIVE THOUSAND", 0],
  ],
  USD: [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
};

const currencyValues = [
  {
    ONE: 1,
    TWO: 2,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    FIFTY: 50,
    HUNDRED: 100,
    "FIVE HUNDRED": 500,
    THOUSAND: 1000,
    "FIVE THOUSAND": 5000,
  },
  {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  },
];

let isPKR = true;
let cidArr = cid.PKR;
let cidInputs;

const createCidTable = () => {
  cidTable.innerHTML = "";

  cidArr.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><label for="${item[0]}">${item[0]}</label></td>
      <td>x</td>
      <td><input type="number" name="${item[0]}" id="${item[0]}" /></td>
      <td>${isPKR ? "Rs." : "$"} 
      <span id="${item[0]}-total">${item[1]}</span>
      </td>
    `;

    cidTable.appendChild(tr);
  });

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td style="text-transform: uppercase" colspan="3">
    Total cash in drawer:
    </td>
    <td id="total-cid">${isPKR ? "Rs." : "$"}</td>
  `;
  cidTable.appendChild(tr);

  cidInputs = document.querySelectorAll(".cid-container input");
};

const getData = () => {
  const currValues = isPKR ? currencyValues[0] : currencyValues[1];

  cidInputs.forEach((item, index) => {
    const value = item.value === "" ? 0 : parseFloat(item.value);
    cidArr[index][1] += value * currValues[cidArr[index][0]];
  });

  calculateAndSaveCid();
};

const calculateAndSaveCid = () => {
  cidArr.forEach((item) => {
    const id = `${item[0]}-total`;
    const total = document.getElementById(id);
    total.textContent = item[1].toFixed(2);
  });

  const totalCidEl = document.querySelector("#total-cid");
  const totalCid = cidArr.reduce((acc, item) => item[1] + acc, 0).toFixed(2);
  totalCidEl.textContent = `${isPKR ? "Rs." : "$"} ${totalCid}`;

  changeEnableStateOfCidInputs(true);
  saveBtn.removeEventListener("click", getData);
  saveBtn.textContent = "Save";
  editBtn.style.display = "inline";
};

const changeEnableStateOfCidInputs = (state) => {
  cidInputs.forEach((item) => (item.disabled = state));
};

const reset = () => {
  inputEl.value = "";
  changeDueEl.innerHTML = "";
};

// EventListeners
saveBtn.addEventListener("click", getData);

editBtn.addEventListener("click", () => {
  changeEnableStateOfCidInputs(false);
  saveBtn.textContent = "Update";
  saveBtn.addEventListener("click", getData);

  reset();
});

currencyType.addEventListener("change", (e) => {
  isPKR = e.target.value === "pkr" ? true : false;
  cidArr = isPKR ? cid.PKR : cid.USD;
  createCidTable();

  changeEnableStateOfCidInputs(false);
  saveBtn.addEventListener("click", getData);
  saveBtn.textContent = "Save";
  editBtn.style.display = "none";

  reset();
});

clearBtn.addEventListener("click", reset);

// window.addEventListener("load", createCidTable);
createCidTable();

export { cidArr, currencyValues, isPKR, inputEl, changeDueEl };