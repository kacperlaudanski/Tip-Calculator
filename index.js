const bill = document.getElementById('bill');

const tip5 = document.querySelector('.tip5');
const tip10 = document.querySelector('.tip10');
const tip15 = document.querySelector('.tip15');
const tip25 = document.querySelector('.tip25');
const tip50 = document.querySelector('.tip50');
const customTip = document.getElementById('custom-number');

const numberOfPeople = document.getElementById('nop');

const resetBtn = document.querySelector('.reset-button');

const rightTipAmount = document.querySelector('.sum1');
const rightTotalAmount = document.querySelector('.sum2');

//Setting error classes

function settingError(input, message) {
  const parentDiv = input.parentElement;
  const small = parentDiv.querySelector('small');

  parentDiv.className = "divOnInputs error";
  small.innerText = message;
}

//Removing error classes during writing in inputs

bill.addEventListener('input', () => {
  const parentDiv = bill.parentElement;
  parentDiv.className = "divOnInputs";
})

numberOfPeople.addEventListener('input', () => {
  const parentDiv = numberOfPeople.parentElement;
  parentDiv.className = "divOnInputs";
})

const tips = document.querySelectorAll('.tip');
for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", () => {
    let tipValue = tips[i].value;
    if (bill.value === '') {
      settingError(bill, "Can't be empty");
    } else if (bill.value === "0") {
      settingError(bill, "Can't be zero");
    } else {
      tipAmountCounting(tipValue);
    }

    if (numberOfPeople.value === '') {
      settingError(numberOfPeople, "Can't be empty");
    } else if (numberOfPeople.value === "0") {
      settingError(numberOfPeople, "Can't be zero");
    } else {
      tipAmountCounting(tipValue);
    }
  });
}

//Tip counting using custom tip

customTip.addEventListener('input', () => {
  const tipAmountPart1 = (bill.value / numberOfPeople.value);
  let tipFinalAnswer = Math.round(tipAmountPart1 * customTip.value) / 100;
  rightTipAmount.innerText = tipFinalAnswer.valueOf(tipFinalAnswer);

  const totalPerPerson = Math.round((tipAmountPart1 + tipFinalAnswer) * 100) / 100;
  rightTotalAmount.innerText = totalPerPerson.valueOf(totalPerPerson);
})

//Tip amount and total counting 

function tipAmountCounting(tipValue) {
  const tipAmountPart1 = (bill.value / numberOfPeople.value);
  let tipFinalAnswer = Math.round(tipAmountPart1 * tipValue * 100) / 100;
  rightTipAmount.innerText = tipFinalAnswer.valueOf(tipFinalAnswer);

  const totalPerPerson = Math.round((tipAmountPart1 + tipFinalAnswer) * 100) / 100;
  rightTotalAmount.innerText = totalPerPerson.valueOf(totalPerPerson);
}

//Reset button

resetBtn.addEventListener('click', () => {
  const parentDiv1 = bill.parentElement;
  parentDiv1.className = "divOnInputs";

  const parentDiv2 = numberOfPeople.parentElement;
  parentDiv2.className = "divOnInputs";

  bill.value = '';
  numberOfPeople.value = '';
  customTip.value = '';
  rightTotalAmount.innerText = '0.00';
  rightTipAmount.innerText = '0.00';
});
