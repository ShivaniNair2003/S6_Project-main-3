$(document).ready(function() {
    // JavaScript code for handling navigation, form submission, etc.
    
    // Show or hide alumni/student specific fields based on radio button selection
    $('input[name="userType"]').change(function() {
        if (this.value === "alumni") {
            $('#alumniDetails').removeClass('hidden');
            $('#studentDetails').addClass('hidden');
        } else if (this.value === "student") {
            $('#studentDetails').removeClass('hidden');
            $('#alumniDetails').addClass('hidden');
        }
    });

    // Form submission handling
    $('.signup-form').submit(function(event) {
        event.preventDefault();
        redirectToProfilePage(); // Call the function without passing event
    });

    function redirectToProfilePage() {
        // Redirect to personaldetails.html
        window.location.href = "personaldetails.html";
    }

    // Show menu links on burger click
    $('#menu-btn').click(function(){
        $('nav .navigation ul').addClass('active')
    });

    // Hide navbar on click function
    $('#menu-close').click(function(){
        $('nav .navigation ul').removeClass('active')
    });
});
