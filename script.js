 // Function to open a tab
 function openTab(tabName) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.remove('active');
    });

    // Show the selected tab pane
    document.getElementById(tabName).classList.add('active');
    }

//to send a message

function loadEvents() {
    var mailString;
    function updateMailString() {
        mailString = '?subject=' + encodeURIComponent($('#subject').val())
            + '&body=' + encodeURIComponent($('#message').val());
        $('#send-message-btn').attr('href',  'mailto:peraltajancel@gmail.com' + mailString);
    }
    $( "#subject" ).focusout(function() { updateMailString(); });
    $( "#message" ).focusout(function() { updateMailString(); });
    updateMailString();
}