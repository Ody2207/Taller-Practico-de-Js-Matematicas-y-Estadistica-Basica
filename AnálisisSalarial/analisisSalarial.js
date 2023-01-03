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

    console.log(medianaSalarios);
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
for (persona of salarios) {
	for (trabajo of persona.trabajos) {
		if (!empresas[trabajo.empresa]) {
			empresas[trabajo.empresa] = {};
		};

		if (!empresas[trabajo.empresa][trabajo.year]) {
			empresas[trabajo.empresa][trabajo.year] = [];
		};

		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
	};
};

console.log({empresas})
