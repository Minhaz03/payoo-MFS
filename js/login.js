// console.log('dom is installed')


document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();  
    console.log('login button');


    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})