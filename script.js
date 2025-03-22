document.addEventListener('DOMContentLoaded', function() {
    const visaForm = document.getElementById('visaForm');
    const fullNameInput = document.getElementById('fullName');
    const passportInput = document.getElementById('passport');
    const countrySelect = document.getElementById('country');
    const messageDiv = document.getElementById('message');
    
    visaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset previous error messages
        messageDiv.className = 'message';
        messageDiv.style.display = 'none';
        messageDiv.textContent = '';
        
        // Get form values
        const fullName = fullNameInput.value.trim();
        const passport = passportInput.value.trim();
        const country = countrySelect.value;
        
        // Validation
        if (!fullName || !passport || !country) {
            showError('All fields are required!');
            return;
        }
        
        // Passport validation (8-10 characters)
        if (passport.length < 8 || passport.length > 10) {
            showError('Invalid passport number!');
            return;
        }
        
        // If all validations pass, show success message
        showSuccess('Visa application submitted successfully!');
        
        // Optionally reset form after successful submission
        visaForm.reset();
    });
    
    function showError(message) {
        messageDiv.textContent = message;
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
    }
    
    function showSuccess(message) {
        messageDiv.textContent = message;
        messageDiv.className = 'message success';
        messageDiv.style.display = 'block';
    }
});