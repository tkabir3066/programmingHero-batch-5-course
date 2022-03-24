// function cost

function elementId(id) {
  const docId = document.getElementById(id);
  return docId;
}

// expenses
function cost(name) {
  const expenses = elementId(name).value;
  const expenseValue = parseFloat(expenses);

  if (expenseValue < 0) {
    alert(name + " input given negative value");
  }
  return expenseValue;
}

// total expenses function
function totalExpenses() {
  const expenses = cost("food") + cost("rent") + cost("clothes");
  return expenses;
}

// balance
function balance() {
  const incomeValue = cost("income");
  let Balance = incomeValue - totalExpenses();
  if (incomeValue < totalExpenses()) {
    alert("Total expenses is greater than income");
    Balance = "0";
  }
  return Balance;
}

// calculate button
elementId("calc-btn").addEventListener("click", function () {
  elementId("total-expenses").innerText = totalExpenses();

  elementId("balance").innerText = balance();
});

// save button
elementId("save-btn").addEventListener("click", function () {
  const saveInputValue = cost("save-input");
  const save = (cost("income") * saveInputValue) / 100;
  const remainingBalance = balance() - save;
  if (save > balance()) {
    alert("not enough money to save");
  }
  elementId("saving-amount").innerText = save;
  elementId("remain-balance").innerText = remainingBalance;
});
