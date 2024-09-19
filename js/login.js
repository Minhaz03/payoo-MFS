// console.log('dom is installed')

// step-1- set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2- prevent default behavior (prevent reloading browser)

    event.preventDefault();  

    // console.log('login button');

    // step-3- get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value; 

    console.log(phoneNumber, pinNumber);

    // step-4- validate phone and pin
    // this is temporary not suitable to use
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        // step-5- allow user to use the website
        window.location.href = '/home.html'
    }
    else{
        console.log('Wrong phone or pin try again');
    }

});