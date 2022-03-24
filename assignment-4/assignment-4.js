//PROBLEM-1

function anaToVori(ana) {
  if (typeof ana != "number") {
    return "please give a number";
  }
  if (ana < 0) {
    return "please enter a positive number greater than 0";
  }
  const vori = ana / 16;
  return vori;
}

const quantity = anaToVori(32);
console.log(quantity);

//PROBLEM-2

function pandaCost(singara, shomucha, jilapi) {
  if (
    typeof singara != "number" ||
    shomucha != "number" ||
    jilapi != "number"
  ) {
    return "please enter a number";
  }

  let totalPrice = singara * 7 + shomucha * 10 + jilapi * 15;

  return totalPrice;
}
const total = pandaCost(20, 5, 20);
console.log(total);

// PROBLEM-3

function picnicBudget(numbers) {
  if (typeof numbers != "number") {
    return "Enter a valid number";
  }
  if (typeof numbers < 0) {
    return "please enter a positive number greater than 0";
  }
  const firstPerHeadBudget = 5000;
  const secondPerHeadBudget = 4000;
  const remainigPerHeadBudget = 3000;

  if (numbers <= 100) {
    const total = numbers * firstPerHeadBudget;
    return total;
  } else if (numbers <= 200) {
    const firstHundred = 100 * firstPerHeadBudget;

    const secondHundred = (numbers - 100) * secondPerHeadBudget;
    const totalBudget = firstHundred + secondHundred;
    return totalBudget;
  } else {
    const firstHundred = 100 * firstPerHeadBudget;
    const secondHundred = 100 * secondPerHeadBudget;

    const restBudget = (numbers - 200) * remainigPerHeadBudget;
    const finalBudget = firstHundred + secondHundred + restBudget;
    return finalBudget;
  }
}

const totalMoney = picnicBudget(211);
console.log(totalMoney);

// //PROBLEM-4

function oddFriend(names) {
  if (typeof names != "element" || names == "number") {
    return "Enter valid element";
  }
  for (const element of names) {
    if (element.length % 2 != 0) {
      return element;
    }
  }
}

console.log(oddFriend(["Tutul", "Mridul", "Ayan", "Ayaz", "Soyab", "Atif"]));
