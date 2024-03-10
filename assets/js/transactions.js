$(document).ready(function () {
	// Lista ficticia de transacciones
	const listaTransacciones = [
		{
			tipo: 'compra',
			descripcion: 'Compra en tienda online',
			monto: -50,
			fecha: '2021-01-01',
		},
		{
			tipo: 'deposito',
			descripcion: 'Depósito de salario',
			monto: 1000,
			fecha: '2021-01-02',
		},
		{
			tipo: 'transferencia',
			descripcion: 'Transferencia recibida de Juan',
			monto: 200,
			fecha: '2021-01-03',
		},
		{
			tipo: 'compra',
			descripcion: 'Pago de factura de servicios',
			monto: -80,
			fecha: '2021-01-04',
		},
		{
			tipo: 'deposito',
			descripcion: 'Depósito de ahorros',
			monto: 500,
			fecha: '2021-01-05',
		},
	];

	// Función para mostrar las últimas transacciones
	function mostrarUltimosMovimientos(filtro) {
		$('#transactionList').empty(); // Limpiar la lista actual

		listaTransacciones.forEach((transaction) => {
			if (filtro === 'all' || transaction.tipo === filtro) {
				$('#transactionList').append(
					`<li class="list-group-item">${getTipoTransaccion(
						transaction.tipo
					)} - $${transaction.monto} - ${transaction.fecha}</li>`
				);
			}
		});
	}

	// Función para obtener el tipo de transacción en formato legible
	function getTipoTransaccion(tipo) {
		switch (tipo) {
			case 'compra':
				return 'Compra';
			case 'deposito':
				return 'Depósito';
			case 'transferencia':
				return 'Transferencia Recibida';
			default:
				return '';
		}
	}

	// Evento de cambio en el filtro
	$('#transactionType').change(function () {
		const filtro = $(this).val();
		mostrarUltimosMovimientos(filtro);
	});

	// Mostrar todas las transacciones al cargar la página
	/*$(document).ready(function () {*/
	mostrarUltimosMovimientos('all');
});
