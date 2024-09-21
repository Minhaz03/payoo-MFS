document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log('add money js ', addMoney, pinNumber)

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const entry = document.createElement('entry');
        entry.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(entry)

        // should be a common function
        document.getElementById('transaction-container').appendChild(entry);
    }
    else{
        alert('wrong Pls try again');
    }

})