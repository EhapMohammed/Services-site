const subservice = document.querySelectorAll('.sub-service'),
subServicesDiv = document.getElementById('subServicesDiv'),
datePicker = document.getElementById('datePicker'),
signinRegister = document.getElementById('signinRegister'),
paymentSec = document.getElementById('paymentSec'),
creditForm = document.getElementById('creditForm'),
div2Back = document.getElementById('div2Back'),
div2Next = document.getElementById('div2Next'),
div3Back = document.getElementById('div3Back'),
div3Next = document.getElementById('div3Next'),
div4Back = document.getElementById('div4Back'),
div4Next = document.getElementById('div4Next'),
div5Back = document.getElementById('div5Back'),
div5Next = document.getElementById('div6Next');

subservice.forEach(service => {
    service.addEventListener('click', function() {
        subServicesDiv.style.display = 'none';
        datePicker.style.display = 'block'
    });
});

// back to first div services and move to next div 
div2Back.addEventListener('click', function() {
    subServicesDiv.style.display = 'block';
    datePicker.style.display = 'none'
});
div2Next.addEventListener('click', function() {
    signinRegister.style.display = 'block';
    datePicker.style.display = 'none'
});
// back to first div services and move to next div 
div3Back.addEventListener('click', function() {
    signinRegister.style.display = 'none';
    datePicker.style.display = 'block'
});
div3Next.addEventListener('click', function() {
    signinRegister.style.display = 'none';
    paymentSec.style.display = 'block'
});
// back to first div services and move to next div 
div4Back.addEventListener('click', function() {
    paymentSec.style.display = 'none';
    signinRegister.style.display = 'block'
});
div4Next.addEventListener('click', function() {
    paymentSec.style.display = 'none';
    creditForm.style.display = 'block'
});
// back to first div services and move to next div 
div5Back.addEventListener('click', function() {
    paymentSec.style.display = 'block';
    creditForm.style.display = 'none'
});

