document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log(cashOut, pinNumber)
    if (pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        // console.log(balance)
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong no money try again')
    }
})