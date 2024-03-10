$(document).ready(function () {
	// Lista de contactos
	const contacts = [
		{ name: 'Juan Perez', email: 'juan@example.com' },
		{ name: 'María López', email: 'maria@example.com' },
		{ name: 'Pedro García', email: 'pedro@example.com' },
		{ name: 'Laura Martínez', email: 'laura@example.com' },
		{ name: 'Carlos Sánchez', email: 'carlos@example.com' },
	];

	// Función para renderizar la lista de contactos
	function renderContactList(filter = '') {
		const contactList = $('#contactList');
		contactList.empty(); // Limpiamos la lista

		contacts
			.filter(
				(contact) =>
					contact.name.toLowerCase().includes(filter.toLowerCase()) ||
					contact.alias.toLowerCase().includes(filter.toLowerCase())
			)
			.forEach((contact) => {
				const listItem = $('<li>')
					.addClass('contact-item')
					.text(`${contact.name} (${contact.alias}) - ${contact.email}`);
				contactList.append(listItem);
			});
	}

	// Mostrar y ocultar el formulario para agregar nuevos contactos
	$('#showFormBtn').click(function () {
		$('#contactForm').toggle();
	});

	// Cancelar el formulario para agregar nuevos contactos
	$('#cancelFormBtn').click(function () {
		$('#contactForm').hide();
	});

	// Implementa la validación del formulario para agregar nuevos contactos aquí
	$('#contactForm').submit(function (event) {
		event.preventDefault();
		console.log('Formulario enviado');
		const email = $('#email').val();
		if (!isValidEmail(email)) {
			alert('Ingrese un correo electrónico válido.');
			return;
		}
		const name = $('#contactName').val();
		const alias = $('#contactAlias').val();
		contacts.push({ name, alias, email }); // Agregar nuevo contacto
		renderContactList(); // Renderizar la lista con el nuevo contacto
		$('#contactForm').hide(); // Ocultar el formulario
		alert('Contacto guardado correctamente.'); // Solo como ejemplo
	});

	function isValidEmail(email) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

	// Implementa la búsqueda en la agenda de transferencias aquí
	$('#searchInput').keyup(function () {
		renderContactList($(this).val());
	});

	// Mostrar y ocultar el botón "Enviar dinero" al seleccionar un contacto
	$('#contactList').on('click', '.contact-item', function () {
		// Elininar la clase "active" de todos los elementos de la lista
		$('.contact-item').removeClass('active');
		// Agregar la clase "active" al elemento seleccionado
		$(this).addClass('active');
		// Mostrar el botón "Enviar dinero"
		$('#sendMoneyBtn').show();
	});

	// Ocultar el botón "Enviar dinero" al cancelar la selección del contacto
	$('#cancelSendBtn').click(function () {
		// Eliminar la clase 'active' de todos los elementos de la lista
		$('.contact-item').removeClass('active');

		// Ocultar el botón "Enviar dinero"
		$('#sendMoneyBtn').hide();
	});

	// Mostrar un mensaje de confirmación después de enviar dinero
	$('#sendMoneyBtn').click(function () {
		const selectedContact = $('.contact-item.active').text();
		$('#confirmationMessage')
			.html(`<p>Se ha enviado dinero a ${selectedContact}.</p>`)
			.fadeIn();
		setTimeout(function () {
			$('#confirmationMessage').fadeOut();
		}, 3000);
	});
});
