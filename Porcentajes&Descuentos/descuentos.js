const btn = document.querySelector('#calcular');
const inputCoupon = document.querySelector('#coupon');
const inputPrice = document.querySelector('#price');
const result = document.querySelector('#result')

const couponList = [];
couponList.push ({
	name: 'Platzi_Navidad',
	discout: 30,
});

btn.addEventListener('click', () => {
	const price = Number(inputPrice.value);
	const coupon = inputCoupon.value;
	let discout;

	const couoponInArray = couponList.find(patito)

	function patito (couponElement) {
		return couponElement.name == coupon;
	}

	if (!price || !coupon) {
		result.innerText = '!CHANCLA¡ Porfavor llena el formulario';
		return;
	} else if (couoponInArray) {
		discout	= couoponInArray.discout;
	} else {
		result.innerText = 'El cupon no es valido';
		return;
	}
	
	const newPrice = (price * (100 - discout) / 100);
	result.innerText = 'El nuevo precio con descuento es: $' + newPrice;
});

// Reto platzi ----------------------------------

function encontrarPorID(element) {
    return element.id == id
  }
  const usuario = users.find(encontrarPorID);
  if (usuario) {
    return usuario.name;
  } else {
    return false;
  }

// if (discout = arrayCupones.cupon) {
	// 	const newPrice = (price * (100 - arrayCupones.discout)) / 100;
	// 	result.innerText = "Tu precio con descuento es: $" + newPrice;

		// result.innerText = 'El cupon no es valido';
		// return;
	// }

// switch (coupon) {
// 	case 'Platzi150':
// 		discout = 30;
// 		break;
// 	case 'PlatziNavidad':
// 		discout = 25;
// 		break;
// 	default:
// 		result.innerText = 'El cupon no es valido';
// 		return;
// }

// btn.addEventListener('click', () => {
// 	const price = Number(inputPrice.value);
// 	const discout = inputCoupon.value;
// 	if (!price) {
// 		result.innerText = '!CHANCLA¡ Porfavor llena el formulario';
// 		return;
// 	}
// 	if (discout ==  'Platzi150' || discout == 'PlatziNavidad' ) {
// 		const newPrice = (price * (100 - 20)) / 100;
// 		result.innerText = 'Gracias por usar nuestro descuento del 20%, disfrutalo ' + newPrice;
// 	} else {
// 		result.innerText = "Tu precio con descuento es: $" + price;
// 		return;
// 	}
// });


