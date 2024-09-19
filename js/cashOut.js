document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked')

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut)
    console.log(pinNumber)

    if (pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance)

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out Try again')
        console.log('Failed to Cash Out Try again')
    }

});