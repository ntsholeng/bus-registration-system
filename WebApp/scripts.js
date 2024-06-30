// Handle student bus booking form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookBusForm = document.getElementById('book-bus-form');
    if (bookBusForm) {
        bookBusForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const busNumber = document.getElementById('bus-number').value;
            const route = document.getElementById('route').value;
            const type = document.getElementById('type').value;
            const email = document.getElementById('email').value;

            // Simulate booking process (replace with actual backend API call)
            console.log(`Booking bus ${busNumber} for route ${route} (${type}) for ${email}`);

            // Reset form after submission (optional)
            bookBusForm.reset();
        });
    }

    // Handle management add bus form submission
    const addBusForm = document.getElementById('add-bus-form');
    if (addBusForm) {
        addBusForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const busNumber = document.getElementById('add-bus-number').value;
            const route = document.getElementById('add-route').value;
            const type = document.getElementById('bus-type').value;

            // Simulate adding bus process (replace with actual backend API call)
            console.log(`Adding bus ${busNumber} to route ${route} (${type})`);

            // Reset form after submission (optional)
            addBusForm.reset();
        });
    }
});
