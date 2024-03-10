$(document).ready(function () {
	// Mostrar saldo actual
	const currentBalance = localStorage.getItem('balance') || 0;
	$('#amount').attr('placeholder', `Saldo actual: $${currentBalance}`);

	// Manejar el evento de envío del formulario de depósito
	$('#depositForm').submit(function (event) {
		event.preventDefault();
		const depositAmount = parseFloat($('#amount').val());
		const newBalance = parseFloat(currentBalance) + depositAmount;

		// Actualizar el saldo en el Local Storage
		localStorage.setItem('balance', newBalance);

		// Mostrar la leyenda del monto depositado
		$('#depositInfo')
			.html(`<p>Monto depositado: $${depositAmount}</p>`)
			.fadeIn();

		// Mostrar mensaje de éxito
		$('#alert-container').html(`
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        ¡Depósito exitoso!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `);

		// Redirigir después del depósito
		setTimeout(function () {
			window.location.href = 'menu.html';
		}, 2000);
	});
});
