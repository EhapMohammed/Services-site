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
        datePicker.style.display = 'flex'
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
    datePicker.style.display = 'flex'
});
div3Next.addEventListener('click', function() {
    signinRegister.style.display = 'none';
    paymentSec.style.display = 'flex'
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
    paymentSec.style.display = 'flex';
    creditForm.style.display = 'none'
});


  // // Initialize date picker
  // $( function() {
  //   $( "#datepicker-container" ).datepicker({
  //     dateFormat: "yy-mm-dd",
  //     onSelect: function(dateText) {
  //       // Call function to handle date selection
  //       handleDateSelection(dateText);
  //     },
  //     onClose: function() {
  //       // Hide date picker container when calendar is closed
  //       $("#datepicker-container").hide();
  //     }
  //   });

  //   // Hide date picker container initially
  //   $("#datepicker-container").hide();

  //   // Show date picker container when button is clicked
  //   $("#datepicker-container").show();
  //   // $("#datepicker-button").click(function() {
      
  //   // });
  // });

  // function handleDateSelection(date) {
  //   // Fetch available hours for selected day using API or database query
  //   const availableHours = [
  //     { time: "08:00 am", available: true },
  //     { time: "09:00 am", available: false },
  //     { time: "10:00 am", available: true },
  //     // ...more available hours for selected day
  //   ];

  //   // Display available hours in table format
  //   let hoursAvailabilty = `
  //     <table class="table">
  //       <thead>
  //         <tr>
  //           <th>Time</th>
  //           <th>Availability</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //   `;
  //   for (let i = 0; i < availableHours.length; i++) {
  //     const hour = availableHours[i];
  //     const badgeClass = hour.available ? "badge-success" : "badge-danger";
  //     const badgeText = hour.available ? "Available" : "Unavailable";
  //     hoursAvailabilty += `
  //       <tr>
  //         <td>${hour.time}</td>
  //         <td><span class="badge ${badgeClass}">${badgeText}</span></td>
  //       </tr>
  //     `;
  //   }
  //   hoursAvailabilty += `
  //       </tbody>
  //     </table>
  //   `;
  //   document.getElementById("available-hours").innerHTML = hoursAvailabilty;
  // }


