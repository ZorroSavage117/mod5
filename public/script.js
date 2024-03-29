document.addEventListener('DOMContentLoaded', function() {
    // Function to play sound alert
    function playSound() {
        var audio = new Audio('notify.wav'); // Path to your audio file
        audio.play();
    }

    // Function to display popup message with command
    function displayCommand(command) {
        alert('Command scheduled: ' + command);
    }

    // Event listener for form submission
    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Play sound alert
        playSound();

        // Get form data
        var taskName = document.getElementById('taskName').value;
        var schedule = document.getElementById('schedule').value;
        var command = document.getElementById('command').value;

        // Display popup message with command
        displayCommand(command);

        // Optionally, you can send the form data to the server for further processing (not implemented here)
    });
});
