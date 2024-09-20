// add money to account
/**
 * step 1 - add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reload
 * 
 * step 2- get the money from user wants to add
 * also get the pin number provided
 * 
 * step 3- verify the pin number , for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to the account balance
 * 
 * step 4- get the current balance
 * 
 * step 5- add monet to be added with the current balance
 * 
 * step 6- display/update the balance in DOM/UI
 * 
 */


// step-1- add an event handler to the add money button inside form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step-2- get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3- verify the pin number && not the right way
    if (pinNumberInput === '1234') {
        console.log('adding money to account')

        // step-4- get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // step-5- add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6- update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('failed pls try again')
        console.log('failed pls try again')
    }
});