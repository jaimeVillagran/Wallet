$(document).ready(function () {
	$('#loginForm').submit(function (event) {
		event.preventDefault(); // Prevent form submission

		// Get input values
		var email = $('#email').val();
		var password = $('#password').val();

		// Example validation (You can add more validation as needed)
		if (email.trim() === '' || password.trim() === '') {
			// Show Bootstrap alert for validation error
			$('.alert').remove(); // Remove existing alerts
			$('#loginForm').prepend(
				'<div class="alert alert-danger" role="alert">Por favor Ingrese datos validos</div>'
			);
			return;
		}

		// Simulate login (Replace with your actual login logic)
		if (email === 'example@example.com' && password === 'password') {
			// Redirect to main menu
			window.location.href = 'menu.html';
		} else {
			// Show Bootstrap alert for login error
			$('.alert').remove(); // Remove existing alerts
			$('#loginForm').prepend(
				'<div class="alert alert-danger" role="alert">Invalid email or password</div>'
			);
		}
	});
});
