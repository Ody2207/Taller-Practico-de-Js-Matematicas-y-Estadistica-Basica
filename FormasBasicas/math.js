console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado (lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado
	}
};

console.log({
	ladoCuadrado,
	perimetroCuadrado,
	areaCuadrado
});

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 6;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2
	};
}

function calcularAlturaTriangulo (lados, base) {
	if (lados == base) {
		console.warn('Este no es un triangulo isoceles')
	} else {
		// h = raizcuadrado(lados**2 - (base**2)/4)
		return altura = Math.sqrt((lados ** 2) - ((base ** 2) / 4));
	}
};

console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	ladoTrianguloBase,
	alturaTriangulo,
	perimetroTriangulo,
	areaTriangulo
})

console.groupEnd('Triangulo');

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2; 
const PI = 3.1415;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
	perimetro: perimetroCirculo,
	area: areaCirculo
});

function calcularCirculo (radio) {
	const diametro = radio * 2;
	const radioAlCuadrado = Math.pow(radio, 2)
	return {
		perimetro: diametro * Math.PI,
		area: radioAlCuadrado * Math.PI
	};
};

console.groupEnd('Circulo');

console.group('Triangulo Escaleno');

const ladoA = 6;
const ladoB = 8;
const ladoC = 7;
const S = (ladoA + ladoB + ladoC) / 2;
const h = (2 / ladoA) * Math.sqrt( S * ( (S - ladoA) * (S - ladoB) * (S-ladoC) ) );

console.log(h)

// Mi solución

function calcularTrianguloEscaleno (lado1, lado2, lado3) {
	const s = (lado1 + lado2 + lado3) / 2;
	if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {return false;}
	const H = (2 / lado1) * Math.sqrt(s*((s - lado1)*(s - lado2)*(s - lado3)));
	const result = Math.floor(H);
	return result;
};

// Solucion recortada

function calcularTrianguloEscaleno (a, b, c) {
	const s = (a + b + c) / 2;
	if (a == b || a == c || b == c) {return false;}
	const H = (2 / a) * Math.sqrt(s*((s - a)*(s - b)*(s - c)));
	const result = Math.floor(H);
	return result;
};

// Solucion de platzi 

function solution(lado1, lado2, lado3) {
	if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
	  return false;
	}
	
	const S = (lado1 + lado2 + lado3) / 2;
	const S1 = S - lado1;
	const S2 = S - lado2;
	const S3 = S - lado3;
  
	const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
	const result = Math.floor(H);
  
	return result;
  }

console.groupEnd('Triangulo Escaleno');