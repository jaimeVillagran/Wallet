$(document).ready(function () {
	// Evento de clic para el botón "Depositar"
	$('#depositBtn').click(function () {
		alert('Redirigiendo a la pantalla de Depósito');
		window.location.href = 'deposit.html'; // Cambia 'deposit.html' con la ruta correcta de tu página de depósito
	});

	// Evento de clic para el botón "Enviar Dinero"
	$('#sendMoneyBtn').click(function () {
		alert('Redirigiendo a la pantalla de Enviar Dinero');
		window.location.href = 'sendmoney.html'; // Cambia 'send_money.html' con la ruta correcta de tu página de enviar dinero
	});

	// Evento de clic para el botón "Últimos Movimientos"
	$('#transactionsBtn').click(function () {
		alert('Redirigiendo a la pantalla de Últimos Movimientos');
		window.location.href = 'transactions.html'; // Cambia 'transactions.html' con la ruta correcta de tu página de últimos movimientos
	});
});
