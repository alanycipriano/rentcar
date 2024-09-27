
/*SCRIPTS GERAIS?

document.addEventListener('DOMContentLoaded', function() {
    // Function to save scroll position
    function saveScrollPosition() {
        localStorage.setItem('scrollPosition', window.scrollY);
    }
    // Function to restore scroll position
    function restoreScrollPosition() {
        var scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, scrollPosition);
            localStorage.removeItem('scrollPosition');
        }
    }
    // Restore scroll position on page load
    restoreScrollPosition();
    // Save scroll position when form is submitted
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', saveScrollPosition);
    });
});

//
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to input fields to change button class and save scroll position
    document.querySelectorAll('input[type="checkbox"]').forEach(function(input) {
        input.addEventListener('change', function() {
            
            saveScrollPosition(); // Save the scroll position when the input is changed
        });
    });
});
*/
