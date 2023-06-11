// document.addEventListener('DOMContentLoaded', function() {
//   var bookingForm = document.getElementById('booking-form');
//   bookingForm.addEventListener('submit', function(event) {
//     if (!validateForm()) {
//       event.preventDefault();
//     }
//   });
// });

        function validateForm() {
          var nameInput = document.getElementById('name');
          var emailInput = document.getElementById('email');
          var phoneInput = document.getElementById('phone');
          var dateInput = document.getElementById('checkin-date');
          var serviceInput = document.getElementById('service-selection');
          var specialistInput = document.getElementById('specialist');
          var timeInput = document.getElementById('time');
    
          if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return false;
          }
    
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            return false;
          }
    
          var phonePattern = /^\d{3}-?\s?\d{3}-?\s?\d{4}$/;
          if (!phonePattern.test(phoneInput.value)) {
            alert('Please enter a valid phone number.');
            return false;
          }
    
          if (dateInput.value.trim() === '') {
            alert('Please select a date.');
            return false;
          }
    
          if (serviceInput.value === '') {
            alert('Please select a service.');
            return false;
          }
    
          if (specialistInput.value === '') {
            alert('Please select a specialist.');
            return false;
          }
    
          if (timeInput.value === '') {
            alert('Please select a time.');
            return false;
          }
    
          return true;
        }