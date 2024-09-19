// add money to account

// step-1- add an event handler to the add money button inside form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-2- get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput =  document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3- verify the pin number && not the right way
    if (pinNumberInput === '1234'){
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
    else{
        console.log('failed pls try again')
    }
});