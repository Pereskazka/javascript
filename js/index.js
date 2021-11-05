function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$("#signup-button").click(function (e) {
    var $email = $("#subscribe-email").val();
    if (validateEmail($email)) {
        //alert("Valid email!");
        $(".message-content").html("Now you are subscribed!");
    } else {
        //alert("Invalid email!");
        $(".message-content").html("E-mail address is not valid.");
    }

    $(".subscribe-message").fadeIn(1500).css("display", "block").delay(2000).fadeOut(500);
    e.preventDefault();
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}