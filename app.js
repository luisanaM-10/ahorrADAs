const divBurger = document.getElementById("div-burger"); // div burger que contiene los btn para las section (header con nav)
// ***********************************************
//            SECTION  DE BALANCE
// ***********************************************
const sectionBalance = document.getElementById("section-balance"); // section de balance
// BALANCE
const spanGastos = document.getElementById('total-gastos'); // span de total de gastos (div de balance / section de balance)
const spanlGanancias = document.getElementById('total-ganancias'); // span de total de ganancias (div de balance / section de balance)
const spanResumenTotal = document.getElementById('resumen-total'); // span de total (div de balance / section de balance)
// FILTROS
const contenedorFiltros = document.getElementById('contenedor-filtros'); // contenedor de filtros (section de balance)
const filtroCategoria = document.getElementById('filtro-categoria'); // filtro de por categoria
const filtroTipo = document.getElementById('filtro-tipo');  // filtro de por tipo
const filtroOrden = document.getElementById('filtro-de-orden'); // filtro de por orden 
const filtroFecha = document.getElementById('filtro-fecha'); // filtro de por fecha
// OPERACIONES
const divNuevaOp = document.getElementById("div-operaciones"); // div de +NUEVA operación
const inputDescripcion = document.getElementById('input-descripcion'); // input de descripción (+Nueva operación)
const inputMonto = document.getElementById('input-monto'); // input de monto (+Nueva operación)
const tipoDeOperacion = document.getElementById('select-tipo'); // select de tipo (+Nueva operación)
const categoriaOperacion = document.getElementById('categoria-select-operacion'); // select categorias (+Nueva operación)
const inputFecha = document.getElementById('input-fecha'); // input de fecha (+Nueva operación)
const divSinOperaciones = document.getElementById('sin-operaciones'); // div a mostrar cuando no hay operaciones 
const divConOperaciones = document.getElementById('con-operaciones'); // div a mostrar cuando hay operaciones 
const divEditarOperacion = document.getElementById('div-editar-operaciones'); // div de EDITAR operación
const editarInputDescripcion = document.getElementById('editar-input-descripcion'); // input de editar descripción (div de editar operación)
const editarInputMonto = document.getElementById('editar-input-monto'); // input de editar monto (div de editar operación)
const editarSelectTipo = document.getElementById('editar-select-tipo'); // select de editar tipo de operación (div de editar operación)
const editarSelectCategoria = document.getElementById('editar-select-categoria'); // select de editar categotia (div de editar operación)
const editarInputFecha = document.getElementById('editar-input-fecha'); // input de editar fecha (div de editar operación)
// ***********************************************
//            SECTION DE CATEGORÍAS
// ***********************************************
const sectionCategorias = document.getElementById("section-categorias"); // section de categorías
const selects = document.getElementsByClassName('select-categorias'); // selects de categorias
const contenedorCategorias = document.getElementById('categorias'); // contenedor de categorias
const inputCategoria = document.getElementById('categoria-input'); // input de categoria
const divEditarCategorias = document.getElementById('div-editar-categoria') // div de editar categorias
const inputEditarCategoria = document.getElementById('input-editar-categoria') // input de editar categoria
// ***********************************************
//            SECTION DE REPORTES
// ***********************************************
const sectionReportes = document.getElementById("section-reportes"); // section de reportes
const divTotalCategoria = document.getElementById('total-categoria') // total por categoria (reportes)
// ***********************************************
//            BOTONES (btns)
// ***********************************************
// HEADER CON NAV
const btnBalance = document.getElementById("btn-balance"); // btn de balance
const btnCategorias = document.getElementById("btn-categorias"); // btn de categorías
const btnReportes = document.getElementById("btn-reportes"); // btn de reportes
const btnBurger = document.getElementById("menu-burger"); // btn de menu burger
const btnBalance2 = document.getElementById("btn-balance2"); // btn de balance
const btnCategorias2 = document.getElementById("btn-categorias2"); // btn de categorías
const btnReportes2 = document.getElementById("btn-reportes2"); // btn de reportes
// OPERACIONES
const btnOperacion = document.getElementById("btn-operacion"); // btn de +Nueva operación
const btnEnviar = document.getElementById('btn-enviar-operacion'); // btn de enviar operación (+Nueva operación)
const btnCancelar = document.getElementById('btn-cancelar-operacion'); // btn de cancelar operación (+Nueva operación)
const btnCancelarEdicion = document.getElementById('btn-cancelar-editar'); // btn de cancelar operación editada (div de editar operación)
const btnEnviarEdicion = document.getElementById('btn-enviar-editar-operacion'); // btn de enviar operación editada (div de editar operación)
// CATEGORIAS
const btnAgregarCategoria = document.getElementById('agregar-categoria'); // btn de agregar categorias
const btnCancelarEdicionCategoria = document.getElementById('cancelar-salir-editar') // btn de salir de editar categoria (cancelar)
const btnEnviarCategoriaEditada = document.getElementById('enviar-categoria-editada') // btn de enviar categoria editada 
// SECTION BALANCE
const btnOcultarFiltros = document.getElementById('ocultar-filtro-btn');  // btn de ocultar filtros (section de balance)

// ---------------------------------------
//            NavBar
// ---------------------------------------
// ocultar y mostrar section de balance
const mostarBalance = (e) => {
    sectionBalance.classList.remove("oculto");
    sectionCategorias.classList.add("oculto");
    sectionReportes.classList.add("oculto");
    divNuevaOp.classList.add("oculto");
    divEditarOperacion.classList.add('oculto');
    conReporte.classList.add('oculto');
}
btnBalance.addEventListener("click", mostarBalance)
btnBalance2.addEventListener("click", mostarBalance)

// ocultar y mostrar section de categoria
const mostarCategoria = (e) => {
    sectionBalance.classList.add("oculto");
    sectionCategorias.classList.remove("oculto");
    sectionReportes.classList.add("oculto");
    divNuevaOp.classList.add("oculto");
    divEditarOperacion.classList.add('oculto');
    conReporte.classList.add('oculto')
    conReporte.classList.add('oculto');
}
btnCategorias.addEventListener("click", mostarCategoria)
btnCategorias2.addEventListener("click", mostarCategoria)

// ocultar y mostrar section de reportes
const conReporte = document.getElementById('con-reporte'); // vista con reporte 
const mostarReporte = (e) => {
    sectionBalance.classList.add("oculto");
    sectionCategorias.classList.add("oculto");
    sectionReportes.classList.remove("oculto");
    divNuevaOp.classList.add("oculto");
    divEditarOperacion.classList.add('oculto');
    if(!operaciones.length){
        conReporte.classList.add('oculto')
        sectionReportes.classList.remove('oculto')
    }else{
        conReporte.classList.remove('oculto')
        sectionReportes.classList.add('oculto')
    }
    mayorCategoria(operaciones)
    totalesPorCategoria(operaciones, categorias)
    totalPorMes(operaciones)
    balanceMayor(operaciones)
}
btnReportes.addEventListener("click", mostarReporte)
btnReportes2.addEventListener("click", mostarReporte)

// MENU BURGER
btnBurger.addEventListener("click", (e) => {
    divBurger.classList.toggle("oculto")
})

// -----------------------------------------
//            OPERACIONES
// -----------------------------------------
// btn de + nueva operacion
btnOperacion.addEventListener("click", (e) => {
    sectionBalance.classList.add("oculto");
    divNuevaOp.classList.remove("oculto");
})

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || []; // ARR DE OPERACIONES

// mostrar div con operaciones o sin operaciones 
const mostrarOperaciones = (arr) => {
    if (!arr.length) {
        divSinOperaciones.classList.remove('oculto');
        divConOperaciones.classList.add('oculto');
    } else {
        divSinOperaciones.classList.add('oculto');
        divConOperaciones.classList.remove('oculto');
    }
}

// btn de cancelar operación 
btnCancelar.addEventListener('click', (e) => {
    sectionBalance.classList.remove("oculto");
    divNuevaOp.classList.add("oculto");
})

// btn de enviar operación
btnEnviar.addEventListener("click", (e) => {
    if (inputDescripcion.value.trim().length === 0 || inputMonto.value === 0) {
        alertify.warning(
            "Todos los campos son necesarios y el monto tiene que ser mayor a 0"
        );
        return;
    }
    const operacion = {
        id: uuidv4(),
        descripcion: inputDescripcion.value,
        monto: inputMonto.value,
        tipo: tipoDeOperacion.value,
        categoria: categoriaOperacion.value,
        fecha: inputFecha.value,
    };
    operaciones.push(operacion);
    sectionBalance.classList.remove("oculto");
    divNuevaOp.classList.add("oculto");
    (inputDescripcion.value = ""),
    (inputMonto.value = 0),
    (tipoDeOperacion.value = "gastos"),
    (categoriaOperacion.value = "servicios"),
    mostrarOperaciones(operaciones);
    localStorage.setItem("operaciones", JSON.stringify(operaciones));
    pintarOperaciones(operaciones);
    alertify.success("¡Operación agregada con exito!");
});

// función de pintar operaciones 
const pintarOperaciones = (arr) => {
    let str = "";
    arr.forEach((operacion) => {
        str =
            str +
            `
      <div class="nueva-operacion">
        <div class="column is-3" style="font-weight: 600;" >${operacion.descripcion}</div>
        <div class="column is-3"><span class="tag is-primary is-light">${operacion.categoria}</span></div>
        <div class="column is-2 has-text-right" style="font-size:14px">${operacion.fecha}</div>
        <div class="column is-2 has-text-right ${operacion.tipo === "ganancias" ? "green" : "red"}">$${operacion.monto}</div>
        <div class="column is-2 has-text-right" style="display:flex; font-size:13px">
        <a class="btn-editar" data-id=${operacion.id} aria-label="editar operación btn">Editar</a>
        <a class="btn-eliminar" style="margin-left:5px" data-id=${operacion.id} aria-label="eliminar operación btn">Eliminar</a>
        </div>
      </div>
      `;
        document.getElementById("operaciones").innerHTML = str;
    });
    // función de eleminar operación
    const btnEliminar = document.querySelectorAll(".btn-eliminar");
    btnEliminar.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const arregloSinOperacion = operaciones.filter(
                (operacion) => operacion.id !== e.target.dataset.id
            );
            localStorage.setItem("operaciones", JSON.stringify(arregloSinOperacion));
            operaciones = JSON.parse(localStorage.getItem("operaciones"));
            pintarOperaciones(operaciones);
            mostrarOperaciones(operaciones);
            alertify.success("¡Operación eliminada con exito!");
        });
    });
    // función de editar operación
    const btnEditar = document.querySelectorAll(".btn-editar");
    btnEditar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            operacionAEditar = operaciones.filter((operacion) => operacion.id === e.target.dataset.id);
            editarOperacion(operacionAEditar)
            const opeEditada = editarOperacion(operacionAEditar);
        });
    });
    spanGastos.innerHTML = totalGastos(operaciones);
    spanlGanancias.innerHTML = totalGanancia(operaciones);
    spanResumenTotal.innerHTML = totalGanancia(operaciones) - totalGastos(operaciones);
};

let operacionAEditar = []

btnEnviarEdicion.addEventListener('click', (e) => {
    const opeEditada = {
        ...operacionAEditar[0]
    };
    opeEditada.descripcion = editarInputDescripcion.value;
    opeEditada.monto = editarInputMonto.value;
    opeEditada.tipo = editarSelectTipo.value;
    opeEditada.categoria = editarSelectCategoria.value;
    opeEditada.fecha = editarInputFecha.value;
    sectionBalance.classList.remove("oculto");
    divEditarOperacion.classList.add("oculto");
    const operacionActualizada = operaciones.map((operacion) =>operacion.id === opeEditada.id ? opeEditada : operacion);
    localStorage.setItem('operaciones', JSON.stringify(operacionActualizada));
    operaciones = JSON.parse(localStorage.getItem('operaciones'));
    pintarOperaciones(operaciones)
    alertify.success("¡Operación editada con exito!");
});

const editarOperacion = arr => {
    sectionBalance.classList.add('oculto')
    divEditarOperacion.classList.remove('oculto')
    const {
        descripcion,
        monto,
        tipo,
        categoria,
        fecha
    } = {
        ...arr[0]
    }
    editarInputDescripcion.value = descripcion;
    editarInputMonto.value = monto;
    editarSelectTipo.value = tipo;
    editarSelectCategoria.value = categoria;
    editarInputFecha.valueAsDate = new Date(fecha)
}

// función de cancelar edición de operación
btnCancelarEdicion.addEventListener('click', (e) => {
    sectionBalance.classList.remove("oculto");
    divEditarOperacion.classList.add("oculto");
})

// --------------------------
//          BALANCE
// --------------------------

// total de ganancias
const totalGanancia = arr => arr.filter(operacion => operacion.tipo === 'ganancias').reduce((prev, current) => prev + Number(current.monto) ,0);

// total de gastos
const totalGastos = arr => arr.filter(operacion => operacion.tipo === 'gastos').reduce((prev, current) => prev + Number(current.monto) ,0);

// -------------------------
//         FILTROS 
// -------------------------
 // btn de ocultar filtros
btnOcultarFiltros.addEventListener('click', (e) => {
    contenedorFiltros.classList.toggle("oculto")
})

// filtros
let capiaOperaciones = [...operaciones] // copia del arr de operaciones
const filtros = (e) => {
    const porCategoria = filtroCategoria.value;
    const porTipo = filtroTipo.value;
    const porOrden = filtroOrden.value;
    const ordenDesde = filtroFecha.value;

    let operaciones = capiaOperaciones;

    if (porCategoria !== 'todas') {
        operaciones = operaciones.filter(operacion => operacion.categoria === porCategoria)
    }
    if (porTipo !== 'todos') {
        operaciones = operaciones.filter(operacion => operacion.tipo === porTipo)
    }
    if (porOrden === "menor_monto") {
        operaciones = operaciones.sort((a, b) => Number(a.monto) - Number(b.monto));
    }
    if (porOrden === "mayor_monto") {
        operaciones = operaciones.sort((a, b) => Number(b.monto) - Number(a.monto));
    }
    if (porOrden === 'A/Z') {
        operaciones = operaciones.sort((a, b) => {
            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) { return -1 }})
    }
    if (porOrden === 'Z/A') {
        operaciones = operaciones.sort((a, b) => {
            if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) { return -1 }})
    }
    if (porOrden === 'mas_reciente') {
        operaciones = operaciones.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    }
    if (ordenDesde !== new Date()) {
        operaciones = operaciones.filter(operacion => operacion.fecha == ordenDesde)
    }
    pintarOperaciones(operaciones)
}
filtroCategoria.addEventListener('change', filtros);
filtroTipo.addEventListener('change', filtros);
filtroOrden.addEventListener('change', filtros);
filtroFecha.addEventListener('change', filtros);

// ------------------------------------------
//              CATEGORÍAS
// ------------------------------------------
// Arr de categorías
let categorias = JSON.parse(localStorage.getItem('categorias')) || [
    {
        id: uuidv4(),
        nombre: 'Comida'
    },
    {
        id: uuidv4(),
        nombre: 'Servicios'
    },
    {
        id: uuidv4(),
        nombre: 'Salidas'
    }, 
    {
        id: uuidv4(),
        nombre: 'Transporte'
    },
    {
        id: uuidv4(),
        nombre: 'Educación'
    },
    {
        id: uuidv4(),
        nombre: 'Trabajo'
    }
]

// pintar las categorías en los selects
const generarCategorias = () => {
    for (let j = 0; j < selects.length; j++) {
        selects[j].innerHTML = "";
      }
    for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    if (select.classList.contains('filtro-categoria')) {
        select.innerHTML = '<option value="todas">Todas</option>'
    }
    for (let c = 0; c < categorias.length; c++) {
        select.innerHTML += `<option value=${categorias[c].nombre}>${categorias[c].nombre}</option>`
    }
    }
}

// Mostrar las categorías en la section de categoria
const pintarCategorias = () => {
    contenedorCategorias.innerHTML = "";
    for (let i = 0; i < categorias.length; i++) {
        contenedorCategorias.innerHTML +=
        `<div class="column"> 
            <div class="colum is-6" style="display:flex; justify-content:space-between;"> 
                <span class="tag is-primary is-light">${categorias[i].nombre}</span> 
                <div>
                  <a href="#" style="margin-right:5px; font-size: 13px" class="btn-editar-categoria" data-id=${categorias[i].id} aria-label=" editar categoría btn">Editar</a> 
                  <a href="#" style="font-size: 13px" class="btn-eliminar-categoria" data-id=${categorias[i].id} aria-label=" eliminar categoría btn">Eliminar</a>
                </div>
            </div>
        </div>`
    }
// EDITAR CATEGORIA
const btnEditarCategoria = document.querySelectorAll('.btn-editar-categoria') // btn de editar categoria
btnEditarCategoria.forEach(btn => {
    btn.addEventListener('click', e => {
        sectionCategorias.classList.add('oculto')
        divEditarCategorias.classList.remove('oculto')
        categoriaAEditar = categorias.filter((categoria) => categoria.id === e.target.dataset.id);
        categoriaAEditar.forEach((categoria) => {inputEditarCategoria.value = categoria.nombre});        
})
})

btnEnviarCategoriaEditada.addEventListener("click", (e) => {
  sectionCategorias.classList.remove("oculto");
  divEditarCategorias.classList.add("oculto");

  const cambioCategoria = categorias.filter((categoria) => categoria.id === categoriaAEditar[0].id);

  const editarOperacionesAsociadas = (arr) => {
    arr.forEach((operacionAEditarTambien) => {
      if (operacionAEditarTambien.categoria === categoriaAEditar[0].nombre) {
        operacionAEditarTambien.categoria = inputEditarCategoria.value;
      }
    });
    localStorage.setItem("operaciones", JSON.stringify(arr));
    const nuevasOperaciones = JSON.parse(localStorage.getItem("operaciones"));
    pintarOperaciones(nuevasOperaciones);
  };

  editarOperacionesAsociadas(operaciones);

  const filtrada = cambioCategoria[0];
  filtrada.nombre = inputEditarCategoria.value;
  const accionEditar = categorias.map((categoria) =>categoria.id === categoriaAEditar[0].id ? filtrada : categoria);
  localStorage.setItem("categorias", JSON.stringify(accionEditar));
  categorias = JSON.parse(localStorage.getItem("categorias"));
  pintarCategorias(categorias);
  generarCategorias(categorias);
});
// ELIMINAR CATEGORIA
const btnEliminarCategoria = document.querySelectorAll('.btn-eliminar-categoria') // btn de eliminar categoria 
btnEliminarCategoria.forEach(btn => {
btn.addEventListener('click', e => {
    const arregloSinCategoria = categorias.filter(categoria  => categoria.id !== e.target.dataset.id)
    // ELIMINAR OPERACIÓN A LA VEZ 
    const categoriaAEliminar = categorias.find((categoria) => categoria.id === e.target.dataset.id).nombre;
    const operacionEliminada = operaciones.filter((operacion) => operacion.categoria !== categoriaAEliminar);
    actualizarArreglos(arregloSinCategoria, operacionEliminada)
})
})
}

const actualizarArreglos = (arrCategorias, arrOperaciones) => {
    // categorias
    localStorage.setItem('categorias', JSON.stringify(arrCategorias));
    categorias = JSON.parse(localStorage.getItem('categorias'));
    pintarCategorias(categorias)
    generarCategorias(categorias)
    alertify.success('¡Categoria eliminada con exito!')

    // operaciones
    localStorage.setItem('operaciones', JSON.stringify(arrOperaciones));
    operaciones = JSON.parse(localStorage.getItem('operaciones'));
    pintarOperaciones(operaciones)
}

// Función de cancelar/salir de editar categoría
btnCancelarEdicionCategoria.addEventListener('click', (e) => {
    divEditarCategorias.classList.add('oculto');
    sectionCategorias.classList.remove('oculto')

})

// crear una categoria nueva categoría
const crearCategoria = () => {
    btnAgregarCategoria.addEventListener('click', (e) => {
      document.getElementById('categorias').innerHTML = ''
      const Nuevacategoria = {
        id: uuidv4(),
        nombre: inputCategoria.value
    }
      categorias.push(Nuevacategoria);
      localStorage.setItem('categorias' , JSON.stringify(categorias));
      generarCategorias();
      pintarCategorias();
      inputCategoria.value = "";
  }) 
}


// ---------------------------
//         REPORTES
// --------------------------

// RESUMEN
const balanceMayor = arr => { 
    let balanceCategorias = [];
    //  sacamos las categorÍas del arr de operaciones
    const categoriasDeOperaciones = [...new Set(operaciones.map(operacion => operacion.categoria))]
    for (let i = 0; i < categoriasDeOperaciones.length; i++) {
    const objetoCategoria = arr.filter(operacion => operacion.categoria  === categoriasDeOperaciones[i]) // sacamos los objetos por categoría
    const filtroGanancia = objetoCategoria.filter(operacion => operacion.tipo === 'ganancias').reduce((count, current) => count + Number(current.monto), 0) // filtramos las ganancias de categoriasDeOperaciones
    const filtroGasto = objetoCategoria.filter(operacion => operacion.tipo === 'gastos').reduce((count, current) => count + Number(current.monto), 0) // filtramos los gastos de categoriasDeOperaciones
    const nuevoObjeto = {
        nombreCategoria: categoriasDeOperaciones[i],
        ganancia: filtroGanancia,
        gasto: filtroGasto,
        balance: filtroGanancia - filtroGasto,
      };
      balanceCategorias.push(nuevoObjeto);
    } 
    const categoriaMayorBalance = balanceCategorias.filter((operacion) => operacion.balance).sort(function(a, b){return b.balance - a.balance})
    document.getElementById('categoria-mayor-balance').innerHTML = `<span class="tag is-primary is-light">${categoriaMayorBalance[0].nombreCategoria}</span>`
    document.getElementById('categoria-mayor-balance-monto').innerHTML = `<span class="green">$${categoriaMayorBalance[0].balance}</span>`
}

// Categoria con mayor ganancia 
const mayorCategoria = (arr) => {
    categorias.forEach(categoria => {
        // mayor ganancia
    const porCategoriaGanancia = arr.filter(operacion => operacion.tipo === 'ganancias').sort((a, b) => Number(b.monto) - Number(a.monto));
    document.getElementById('categoria-mayor-resumen').innerHTML = `<span class="green">$${porCategoriaGanancia[0].monto}</span>`
    document.getElementById('categoria-mayor-nombre').innerHTML = `<span class="tag is-primary is-light">${porCategoriaGanancia[0].categoria}</span>`
    // mayor gasto
    const porCategoriaGasto = arr.filter(operacion => operacion.tipo === 'gastos').sort((a, b) => Number(b.monto) - Number(a.monto));
    document.getElementById('categoria-menor-resumen').innerHTML = `<span class="red">$${porCategoriaGasto[0].monto}</span>`
    document.getElementById('categoria-menor-nombre').innerHTML = `<span class="tag is-primary is-light">${porCategoriaGasto[0].categoria}</span>`
})
}


// TOTAL POR CATEGORIA 
const totalesPorCategoria = (operaciones, categorias) => {
    divTotalCategoria.innerHTML = ""
    categorias.forEach(categoria => {
        const porCategoria = operaciones.filter(operacion => operacion.categoria === categoria.nombre)
        const porCategoriaGanancia = porCategoria.filter(operacion => operacion.tipo === 'ganancias').reduce((count, current) => count + Number(current.monto), 0)
        const porCategoriaGasto = porCategoria.filter(operacion => operacion.tipo === 'gastos').reduce((count, current) => count + Number(current.monto), 0)

        divTotalCategoria.innerHTML +=
            `<div class="columns div-responsive-resumen">
                <div class="column is-3 negrita letra-responsive-resumen">${categoria.nombre} </div>
                <div class="column is-3 green letra-responsive-resumen" >$${porCategoriaGanancia}</div>
                <div class="column is-3 red letra-responsive-resumen">$${porCategoriaGasto}</div>
                <div class="column is-3 letra-responsive-resumen ${porCategoriaGanancia > porCategoriaGasto ? "green" : "red"}">${porCategoriaGanancia - porCategoriaGasto}</div>
            </div>`
    })
}


// TOTALES POR MES
const totalPorMes = arr => { 
    let balancePorMeses = []
    document.getElementById('total-por-mes').innerHTML = "";
    const meses = [...new Set(arr.map(operacion => `${new Date(operacion.fecha).getMonth() + 1}/${new Date(operacion.fecha).getFullYear()}`)),].sort(); // sacamos los meses del arr de operaciones
    for (let i = 0; i < meses.length; i++) {
    const objetoPorMes = arr.filter(operacion => `${new Date(operacion.fecha).getMonth() + 1}/${new Date(operacion.fecha).getFullYear()}` === meses[i]) // sacamos los objetos por mes
    const filtroGanancia = objetoPorMes.filter(operacion => operacion.tipo === 'ganancias').reduce((count, current) => count + Number(current.monto), 0) // filtramos las ganancias de esos meses
    const filtroGasto = objetoPorMes.filter(operacion => operacion.tipo === 'gastos').reduce((count, current) => count + Number(current.monto), 0) // filtramos los gastos de esos meses
    
    document.getElementById('total-por-mes').innerHTML += 
    `<div class="columns div-responsive-resumen">
        <div class="column is-3 negrita letra-responsive-resumen">${meses[i]}</div>
        <div class="column is-3 green letra-responsive-resumen">$${filtroGanancia}</div>
        <div class="column is-3 red letra-responsive-resumen">$${filtroGasto}</div>
        <div class="column is-3 letra-responsive-resumen ${filtroGanancia > filtroGasto ? "green" : "red"}">$${(filtroGanancia - filtroGasto)}</div>
    </div>`;

    const nuevoObjeto = {
        mes: meses[i],
        ganancia: filtroGanancia,
        gasto: filtroGasto,
        balance: filtroGanancia - filtroGasto,
      };
      balancePorMeses.push(nuevoObjeto);
    } 
const MesMayorGanancia = balancePorMeses.filter((operacion) => operacion.ganancia).sort(function(a, b){return b.ganancia - a.ganancia})
    document.getElementById('mayor-balance-nombre').innerHTML = `<span class="negrita">${MesMayorGanancia[0].mes}</span>`
    document.getElementById('mayor-balance-monto').innerHTML = `<span class="green">$${MesMayorGanancia[0].ganancia}</span>`
    const MesMayorGasto = balancePorMeses.filter((operacion) => operacion.gasto).sort(function(a, b){return b.gasto - a.gasto})
    document.getElementById('menor-balance-nombre').innerHTML = `<span class="negrita">${MesMayorGasto[0].mes}</span>`
    document.getElementById('menor-balance-monto').innerHTML = `<span class="red">$${MesMayorGasto[0].gasto}</span>`
}

// --------------------------
//      Inicializar
// --------------------------
const inicializar = () => {
    const inputFecha = document.querySelectorAll('input[type="date"]')
    inputFecha.forEach(input => {
        input.valueAsDate = new Date()
    })
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);
    generarCategorias();
    pintarCategorias();
    crearCategoria();
    totalGastos(operaciones);
    totalGanancia(operaciones);
}
window.onload = inicializar