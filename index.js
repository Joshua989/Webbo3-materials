const scriptURL = 'https://script.google.com/macros/s/AKfycbw8tScVuedmU7DKUiel0e4FiklJn81LInQdXZ4G-8RR3eQAEJj7PYr2fmgLZAnqitTI/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the submit button and create message element
    const submitButton = document.getElementById('submitButton');
    const messageElement = document.getElementById('submitMessage');
    
    // Disable the submit button immediately
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    // Simulate form submission (replace with actual form submission logic)
    try {
        // Your form submission logic here
        // For demonstration, using a timeout to simulate network request
        setTimeout(() => {
            messageElement.textContent = 'Answers submitted successfully!';
            messageElement.className = 'submit-message success';
            submitButton.textContent = 'Submitted!';
            
            // Optional: Reset form after successful submission
            // document.getElementById('reviewForm').reset();
        }, 1500);
    } catch (error) {
        // If there's an error, show error message and re-enable button
        messageElement.textContent = 'Error submitting answers. Please try again.';
        messageElement.className = 'submit-message error';
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Answers';
    }
});