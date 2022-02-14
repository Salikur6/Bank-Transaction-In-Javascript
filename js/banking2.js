// input amount function-------------------

function inputAmount(inputId) {
    const inputName = document.getElementById(inputId);
    const inputValue = inputName.value;
    const inputValueFloat = parseFloat(inputValue);
    inputName.value = '';

    return inputValueFloat;
};

//Deposit and withdraw Amount------------------------

function inputAmountAndAddInner(amountId, inputValue) {
    const amountText = document.getElementById(amountId);
    const amountInner = amountText.innerText;
    const amountFloat = parseFloat(amountInner);

    amountText.innerText = inputValue + amountFloat;
};


function balanceChack() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceInner = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceInner);

    return balanceTotalFloat;
}
//Deposit and withdraw amount Add with Main Balance-----------------------------

function mainBalance(inputValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceInner = balanceTotal.innerText;
    // const balanceTotalFloat = parseFloat(balanceInner);
    const balanceTotalFloat = balanceChack()

    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalFloat + inputValue;
    } else {
        balanceTotal.innerText = balanceTotalFloat - inputValue;
    };
};

// Deposit Click Event listener ---------------------------------------------
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInputValue = inputAmount('deposit-input');

    if (depositInputValue > 0) {
        inputAmountAndAddInner('deposit-total', depositInputValue);
        mainBalance(depositInputValue, true);
    };

});

// withdraw click Event listener ----------------------------------------------
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInputValue = inputAmount('withdraw-input');

    if (withdrawInputValue > 0 && withdrawInputValue <= balanceChack()) {
        inputAmountAndAddInner('withdraw-total', withdrawInputValue)
        mainBalance(withdrawInputValue, false);
    }

});