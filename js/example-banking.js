function getDepositInput(inputId) {
    const inputField = document.getElementById(inputId);

    const inputValue = inputField.value;

    const amount = parseFloat(inputValue);

    inputField.value = '';

    return amount;
}
// -------------------------------
function updateTotal(totalFieldId, depositValueFloat) {
    const depositTotal = document.getElementById(totalFieldId);

    const depositTotalText = depositTotal.innerText;

    const depositTotalFloat = parseFloat(depositTotalText);



    depositTotal.innerText = depositValueFloat + depositTotalFloat;
}
// ----------------------------------

function mainBalance() {
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const balanceTotalFloat = parseFloat(balanceTotalText);

    return balanceTotalFloat;
}

// ---------------------------------------
function updateBalance(depositValueFloat, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;

    // const balanceTotalFloat = parseFloat(balanceTotalText);
    const balanceTotalFloat = mainBalance()

    if (isAdd == true) {

        balanceTotal.innerText = depositValueFloat + balanceTotalFloat;
    } else {

        balanceTotal.innerText = balanceTotalFloat - depositValueFloat;
    }
}

document.getElementById('deposit-button').addEventListener('click', function() {
    // const depositInput = document.getElementById('deposit-input');

    // const depositValue = depositInput.value;

    // const depositValueFloat = parseFloat(depositValue);

    // ----------------------------------------------------------------
    // const depositTotal = document.getElementById('deposit-total');

    // const depositTotalText = depositTotal.innerText;

    // const depositTotalFloat = parseFloat(depositTotalText);

    // depositTotal.innerText = depositValueFloat + depositTotalFloat;

    // balance add with deposit -------------------

    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;

    // const balanceTotalFloat = parseFloat(balanceTotalText);

    // balanceTotal.innerText = depositValueFloat + balanceTotalFloat;
    const depositValueFloat = getDepositInput('deposit-input');

    if (depositValueFloat > 0) {
        updateTotal('deposit-total', depositValueFloat);
        updateBalance(depositValueFloat, true);

    }


});

// Withdraw---------------------

document.getElementById('withdraw-button').addEventListener('click', function() {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawValueText = withdrawInput.value;
    // const withdrawValueFloat = parseFloat(withdrawValueText);


    // const withdrawValueFloat = getDepositInput('withdraw-input');

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalFloat = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = withdrawValueFloat + withdrawTotalFloat;


    // withdraw and balance --------------------------------

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalFloat = parseFloat(balanceTotalText);

    // balanceTotal.innerText = balanceTotalFloat - withdrawValueFloat;

    const withdrawValueFloat = getDepositInput('withdraw-input')

    if (withdrawValueFloat > 0 && withdrawValueFloat <= mainBalance()) {
        updateTotal('withdraw-total', withdrawValueFloat)

        updateBalance(withdrawValueFloat, false)
    }


})

// ---------------------------