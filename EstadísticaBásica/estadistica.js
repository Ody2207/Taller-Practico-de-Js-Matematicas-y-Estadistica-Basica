// Calculado el promerio -------- mi solucion ----------

const promedioList = [10,22,53,14,10000];

console.group('Mi solucion')

let numElementos = 0;
let sumaElementos = 0;
let promedio;

for (let i = 0; i < promedioList.length; i++) {
	sumaElementos += promedioList[i];
	numElementos = promedioList.length;
}
promedio = sumaElementos / promedioList.length;

console.log(numElementos);
console.log(sumaElementos);
console.log('El promedio es: ' + promedio);

console.groupEnd('Mi solucion')

// --------------------------------------------------------

function calcularPromedio2 (lista) {

	function sumaTodosLosElementos(valorAcumulado, nuevoValor) {
		return valorAcumulado + nuevoValor;
	}

	const sumaLista2 = lista.reduce(sumaTodosLosElementos)
	const promedio = sumaLista2 / lista.length;
	console.log(promedio)
	return promedio;
		
}


function calcularPromedio3 (lista) {

	// const sumaTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

	// Cuando no ponemos las llaves en una arrowfunction este automaticamente se va a retornar
	// Esta es una forma de hacer una suma de una lista de manera eficiente 

	const sumaLista = lista.reduce((a, b) => a + b)

	const sumaLista2 = lista.reduce(sumaTodosLosElementos)
	const promedio = sumaLista2 / lista.length;
	console.log(promedio)
	return promedio;
		
}

// Reto 
// Realizar una funcion para saber si un array es par o inpar 
// No funciono 

// const esPar = (lista2) => {
// 	const valores = lista2.length;
// 	((valores % 2) == 0)
// 		? true
// 		: false;
// };
// console.log(esPar([1,2,3]))


// Mediana ------------------------------------------------------------

function listaOrdenada (lista) {
	return lista.sort((a, b) => a - b)
}

function esPar (lista) {
	return !(lista.length % 2);
}

function calcularMediana (lista) {
	const lista2 = listaOrdenada(lista)
	const listaEsPar = esPar(lista2);
	
	if (listaEsPar) {
		// bloque de código si es par 
		const i1 = lista2.length / 2;
		const i2 = (lista2.length / 2) - 1;
		const MedianaPar = calcularPromedio2([lista2[i1], lista2[i2]])
		return MedianaPar;
	} else {
		// Bloque de código si no es par 
		const posicionDelIndice  = Math.floor(lista2.length / 2);
		console.log(lista2[posicionDelIndice]);

	}
}

// Código que no se uso en este bloque, pero puede ser util

// function esPar (lista) {
// 	if (lista.length % 2) {
// 		return false;
// 	} else {
// 		return true;
// 	}

// 	return !(lista.length % 2);
// }

// function esImPar (lista) {
// 	return lista.length % 2;
// }



// Moda -------------------------------------------------------------------------

const listaD = [ ['a', 1], ['b', 2], ['c', 1]];

function calcularModa (lista) {
	const listaCount = {};

	for (let i = 0; i < lista.length; i++) {
		const elemento = lista[i];

		if (listaCount[elemento]) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	}

	const listaArray = Object.entries(listaCount);
	const listaOrdenadas = ordenarListaBi(listaArray, 1)
	const moda = listaOrdenadas[listaOrdenadas.length - 1];
	console.log(moda[0])
	return moda[0];

}

function ordenarListaBi (listados, i) {
	function ordenarListaSort(a, b) {
		return a[i] - b[i];
	}

	const lista2 = listados.sort(ordenarListaSort);
	return lista2
}