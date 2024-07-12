document.addEventListener('DOMContentLoaded', () => {
    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add form validation logic here
        alert('Form submitted!');
    });

    // Google Maps integration
    function initMap() {
        const location = { lat: -25.344, lng: 131.036 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: location
        });
        const marker = new google.maps.Marker({ position: location, map: map });
    }
    window.initMap = initMap;
});
