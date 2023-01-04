console.log(salarios)

// Analisis personal para Juanita 

function encontrarPersona (personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
};

function medianaPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    })

    const medianaSalarios = PlatziMath.calcularMediana(salarios)

    // console.log(medianaSalarios);
    return medianaSalarios;
};

function proyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let procentajesCrecimiento  = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const procentajeCrecimiento = crecimiento / salarioPasado;        
        procentajesCrecimiento.push(procentajeCrecimiento);
    }


    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(procentajesCrecimiento);
    // console.log({procentajesCrecimiento, medianaPorcentajeCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
};

const empresas = {};
// for (persona of salarios) {
// 	for (trabajo of persona.trabajos) {
// 		if (!empresas[trabajo.empresa]) {
// 			empresas[trabajo.empresa] = {};
// 		};

// 		if (!empresas[trabajo.empresa][trabajo.year]) {
// 			empresas[trabajo.empresa][trabajo.year] = [];
// 		};

// 		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
// 	};
// };

salarios.forEach(persona => {
	persona.trabajos.forEach(trabajo => {
		if (!empresas[trabajo.empresa]) {
			empresas[trabajo.empresa] = {};
		};

		if (!empresas[trabajo.empresa][trabajo.year]) {
			empresas[trabajo.empresa][trabajo.year] = [];
		};

		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
	});
});

console.log({empresas})

function medianaEmpresa (nombre, year) {
	if (!empresas[nombre]) {
		console.warn('La empresa no existe');
	} else if (!empresas[nombre][year]) {
		console.warn('La empresa no dio salairio ese año');
	} else {
		return PlatziMath.calcularMediana(empresas[nombre][year])
	}
};

function proyeccionPorEmpresa (nombre) {
    if (!empresas[nombre]) {
		console.warn('La empresa no existe');
	} else {
        const empresaYear = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYear.map((year) => {
        return medianaEmpresa(nombre, year);
        });
    
    let procentajesCrecimiento  = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const procentajeCrecimiento = crecimiento / salarioPasado;        
        procentajesCrecimiento.push(procentajeCrecimiento);
    }

    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(procentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajeCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
    };
};

// Analisis general 

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPersona(persona.name));
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad; 

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}