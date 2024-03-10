$(document).ready(function () {
	// Redirige al usuario a la página de inicio de sesión al hacer clic en el botón
	$('#loginBtn').click(function () {
		console.log('Botón de inicio de sesión clickeado');
		window.location.href = 'login.html';
	});
});
