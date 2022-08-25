const sectionBalance = document.getElementById("section-balance") // section de balance
const sectionCategorias = document.getElementById("section-categorias") // section de categorías
const sectionReportes = document.getElementById("section-reportes") // section de reportes
const divBurger = document.getElementById("div-burger") // div burger que contiene los btn para las section
const divNuevaOp = document.getElementById("div-operaciones") // div de +Nueva operación
const inputDescripcion = document.getElementById('input-descripcion'); // input de descripción (+Nueva operación)
const inputMonto = document.getElementById('input-monto'); // input de monto (+Nueva operación)
const tipoDeOperacion = document.getElementById('select-tipo'); // select de tipo (+Nueva operación)
const categoriaOperacion = document.getElementById('categoria-select-operacion'); // select categorias (+Nueva operación)
const inputFecha = document.getElementById('input-fecha'); // input de fecha (+Nueva operación)
const divSinOperaciones = document.getElementById('sin-operaciones'); // div a mostrar cuando no hay operaciones 
const divConOperaciones = document.getElementById('con-operaciones'); // div a mostrar cuando hay operaciones 
const divEditarOperacion = document.getElementById('div-editar-operaciones') // div de editar operación
const editarInputDescripcion = document.getElementById('editar-input-descripcion') // input de editar descripción (div de editar operación)
const editarInputMonto = document.getElementById('editar-input-monto') // input de editar monto (div de editar operación)
const editarSelectTipo = document.getElementById('editar-select-tipo') // select de editar tipo de operación (div de editar operación)
const editarSelectCategoria = document.getElementById('editar-select-categoria') // select de editar categotia (div de editar operación)
const editarInputFecha = document.getElementById('editar-input-fecha') // input de editar fecha (div de editar operación)
const spanGastos = document.getElementById('total-gastos') // span de total de gastos (div de balance / section de balance)
const spanlGanancias = document.getElementById('total-ganancias') // span de total de ganancias (div de balance / section de balance)
const spanResumenTotal = document.getElementById('resumen-total') // span de total (div de balance / section de balance)
const contenedorFiltros = document.getElementById('contenedor-filtros') // contenedor de filtros (section de balance)
const selects = document.getElementsByClassName('select-categorias'); // selects de categorias
const contenedorCategorias = document.getElementById('categorias') // contenedor de categorias
const inputCategoria = document.getElementById('categoria-input') // input de categoria


const btnBalance = document.getElementById("btn-balance") // btn de balance
const btnCategorias = document.getElementById("btn-categorias") // btn de categorías
const btnReportes = document.getElementById("btn-reportes") // btn de reportes
const btnBurger = document.getElementById("menu-burger") // btn de menu burger
const btnBalance2 = document.getElementById("btn-balance2") // btn de balance
const btnCategorias2 = document.getElementById("btn-categorias2") // btn de categorías
const btnReportes2 = document.getElementById("btn-reportes2") // btn de reportes
const btnOperacion = document.getElementById("btn-operacion") // btn de +Nueva operación
const btnEnviar = document.getElementById('btn-enviar-operacion'); // btn de enviar operación (+Nueva operación)
const btnCancelar = document.getElementById('btn-cancelar-operacion') // btn de cancelar operación (+Nueva operación)
const btnAgregarCategoria = document.getElementById('agregar-categoria') // btn de agregar categorias
const btnCancelarEdicion = document.getElementById('btn-cancelar-editar') // btn de cancelar operación editada (div de editar operación)
const btnEnviarEdicion = document.getElementById('btn-enviar-editar-operacion') // btn de enviar operación editada (div de editar operación)
const btnOcultarFiltros = document.getElementById('ocultar-filtro-btn')  // btn de ocultar filtros (section de balance)
// ---------------------------------------
//            NavBar
// ---------------------------------------
// ocultar y mostar section 
const mostarBalance = (e) => {
    sectionBalance.classList.remove("oculto")
    sectionCategorias.classList.add("oculto")
    sectionReportes.classList.add("oculto")
    divNuevaOp.classList.add("oculto")
}
btnBalance.addEventListener("click", mostarBalance)
btnBalance2.addEventListener("click", mostarBalance)

const mostarCategoria = (e) => {
    sectionBalance.classList.add("oculto")
    sectionCategorias.classList.remove("oculto")
    sectionReportes.classList.add("oculto")
    divNuevaOp.classList.add("oculto")
}
btnCategorias.addEventListener("click", mostarCategoria)
btnCategorias2.addEventListener("click", mostarCategoria)

const mostarReporte = (e) => {
    sectionBalance.classList.add("oculto")
    sectionCategorias.classList.add("oculto")
    sectionReportes.classList.remove("oculto")
    divNuevaOp.classList.add("oculto")
}
btnReportes.addEventListener("click", mostarReporte)
btnReportes2.addEventListener("click", mostarReporte)

// MENU BURGER
btnBurger.addEventListener("click", (e) => {
    divBurger.classList.toggle("oculto")
})

// -----------------------------------------
//            Operaciones
// -----------------------------------------
// btn de + nueva operacion
btnOperacion.addEventListener("click", (e) => {
    sectionBalance.classList.add("oculto")
    divNuevaOp.classList.remove("oculto")
})
let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];

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
    sectionBalance.classList.remove("oculto")
    divNuevaOp.classList.add("oculto")
})

// btn de enviar operación
btnEnviar.addEventListener('click', (e) => {
    if (inputDescripcion.value.trim().length === 0 || inputMonto.value === 0) {
        alertify.warning('Todos los campos son necesario y el monto tiene que ser mayor a 0')
        return
    }
    const operacion = {
        id: uuidv4(),
        descripcion: inputDescripcion.value,
        monto: inputMonto.value,
        tipo: tipoDeOperacion.value,
        categoria: categoriaOperacion.value,
        fecha: inputFecha.value
    }
    operaciones.push(operacion)
    sectionBalance.classList.remove("oculto")
    divNuevaOp.classList.add("oculto")
    inputDescripcion.value = '',
    inputMonto.value = 0,
    tipoDeOperacion.value = 'gastos',
    categoriaOperacion.value = 'servicios',
    mostrarOperaciones(operaciones)
    localStorage.setItem('operaciones', JSON.stringify(operaciones))
    pintarOperaciones(operaciones);
    alertify.success('¡Operación agregada con exito!');
})

const pintarOperaciones = arr => {
    let str = '';
    arr.forEach((operacion) => {
        str = str +
            `
      <div class="nueva-operacion">
        <div class="column is-3" style="font-weight: 600;">${operacion.descripcion}</div>
        <div class="column is-3"><span class="tag is-primary is-light">${operacion.categoria}</span></div>
        <div class="column is-2 has-text-right" style="font-size:14px">${operacion.fecha}</div>
        <div class="column is-2 has-text-right ${operacion.tipo === 'ganancias'? 'green' : 'red'}">$${operacion.monto}</div>
        <div class="column is-2 has-text-right" style="display:flex; font-size:13px">
        <a class="btn-editar" data-id=${operacion.id}>Editar</a>
        <a class="btn-eliminar" style="margin-left:5px" data-id=${operacion.id}>Eliminar</a>
        </div>
      </div>
      `
        document.getElementById('operaciones').innerHTML = str;
    })
    const btnEliminar = document.querySelectorAll('.btn-eliminar')
    btnEliminar.forEach(btn => {
        btn.addEventListener('click', e => {
            const arregloSinOperacion = operaciones.filter(operacion => operacion.id !== e.target.dataset.id)
            localStorage.setItem('operaciones', JSON.stringify(arregloSinOperacion))
            operaciones = JSON.parse(localStorage.getItem('operaciones'))
            pintarOperaciones(operaciones)
            mostrarOperaciones(operaciones)
            alertify.success('¡Operación eliminada con exito!')
        })
    })
    const btnEditar = document.querySelectorAll('.btn-editar')
    btnEditar.forEach(btn => {
        btn.addEventListener('click', e => {
            const operacionAeditar = operaciones.filter(operacion => operacion.id === e.target.dataset.id)
            editarOperacion(operacionAeditar)

            btnEnviarEdicion.addEventListener('click', () => {
                const filtrar = operaciones.filter(operacion => operacion.id === operacionAeditar[0].id)
                const filtrado = filtrar[0]

                filtrado.descripcion = editarInputDescripcion.value
                filtrado.id = operacionAeditar[0].id
                filtrado.monto = editarInputMonto.value
                filtrado.tipo = editarSelectTipo.value
                filtrado.categoria = editarSelectCategoria.value
                filtrado.fecha = editarInputFecha.value

                const operacionEditada = operaciones.map((operacion) => operacion.id === operacionAeditar[0].id ? filtrado : operacion)
                localStorage.setItem('operaciones', JSON.stringify(operacionEditada));
                const operacionesEditadas = JSON.parse(localStorage.getItem('operaciones'))
                pintarOperaciones(operacionesEditadas)

                sectionBalance.classList.remove('oculto')
                divEditarOperacion.classList.add('oculto')
                alertify.success('¡Operación editada con exito!')
            })

        })
    })
    spanGastos.innerHTML = totalGastos(operaciones)
    spanlGanancias.innerHTML = totalGanancia(operaciones)
    spanResumenTotal.innerHTML = totalGanancia(operaciones) - totalGastos(operaciones)
}

// const pintarObejo =
const editarOperacion = arr => {
    if (arr.length === 0) return
    sectionBalance.classList.add('oculto')
    divEditarOperacion.classList.remove('oculto')
    const {
        descripcion,
        monto,
        tipo,
        categoria,
        fecha
    } = arr[0]
    editarInputDescripcion.value = descripcion;
    editarInputMonto.value = monto;
    editarSelectTipo.value = tipo;
    editarSelectCategoria.value = categoria;
    editarInputFecha.valueAsDate = new Date(fecha)
}

btnCancelarEdicion.addEventListener('click', (e) => {
    sectionBalance.classList.remove("oculto")
    divEditarOperacion.classList.add("oculto")
})

// -----------------------
//        Balance
// -----------------------

// total de ganancias
const totalGanancia = arr => 
arr.filter(operacion => operacion.tipo === 'ganancias').reduce((prev, current) => 
prev + Number(current.monto) ,0)


// total de gastos
const totalGastos = arr => 
   arr.filter(operacion => operacion.tipo === 'gastos').reduce((prev, current) => 
   prev + Number(current.monto) ,0)

// -----------------------
//        Filtros 
// -----------------------

btnOcultarFiltros.addEventListener('click', (e) => {
    contenedorFiltros.classList.toggle("oculto")
})

// tipo de operación
// const filtroTipo = document.getElementById('filto-tipo')
// filtroTipo.addEventListener('change', (e) => {
//     if (e.target.value !== 'todos'){
//         const porTipo = operaciones.filter(operacion => operacion.tipo === e.target.value)
//         localStorage.setItem('operaciones', porTipo)
//         pintarOperaciones(porTipo)
//         console.log(porTipo)
//     }else {
//         pintarOperaciones(operaciones)
//     }
// })

// tipo de categoria 




// ------------------------------------------
//              Categorías
// ------------------------------------------
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

// let categorias = JSON.parse(localStorage.getItem('categorias')) || [
//     'Comida',
//     'Servicios',
//     'Salidas',
//     'Transporte',
//     'Educación',
//     'Trabajo'
// ]

// crear una categoria nueva
const crearCategoria = () => {
    btnAgregarCategoria.addEventListener('click', (e) => {
      document.getElementById('categorias').innerHTML = ''
      const Nuevacategoria = {
        id: uuidv4(),
        nombre: inputCategoria.value
    }
      categorias.push(Nuevacategoria)
      localStorage.setItem('categorias' , JSON.stringify(categorias))
      generarCategorias()
      pintarCategorias()
  }) 
}

// pintar las categorias en los selects
const generarCategorias = () => {
    for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    selects.innerHTML = '';
    if (select.classList.contains('filtro-categoria')) {
        select.innerHTML = '<option>Todas</option>'
    }
    for (let c = 0; c < categorias.length; c++) {
        select.innerHTML += `<option value=${categorias[c].nombre}>${categorias[c].nombre}</option>`
    }
    }
}

const pintarCategorias = () => {
    for (let i = 0; i < categorias.length; i++) {
        contenedorCategorias.innerHTML +=
        `<div class="column"> 
            <div class="colum is-6" style="display:flex; justify-content:space-between;"> 
                <span class="tag is-primary is-light">${categorias[i].nombre}</span> 
                <div>
                  <a href="#" style="margin-right:5px; font-size: 13px" class="btn-editar-categoria" data-id=${categorias[i].id}>Editar</a> 
                  <a href="#" style="font-size: 13px" class="btn-eliminar-categoria" data-id=${categorias[i].id}>Eliminar</a>
                </div>
            </div>
        </div>`
    }
//     const btnEliminarCategoria = document.querySelectorAll('.btn-eliminar-categoria')
//     btnEliminarCategoria.forEach(btn => {
//     btn.addEventListener('click', e => {
//         const arregloSinCategoria = categorias.filter(categoria  => categoria.id !== e.target.dataset.id)
//         localStorage.setItem('categorias', JSON.stringify(arregloSinCategoria))
//         categorias = JSON.parse(localStorage.getItem('categorias'))
//         pintarCategorias(categorias)
//         generarCategorias(categorias)
//         alertify.success('¡Categoria eliminada con exito!')
//     })
// })
// const btnEditarCategoria = document.querySelectorAll('.btn-editar-categoria')
// btnEditarCategoria.forEach(btn => {
//     btn.addEventListener('click', e => {
//         sectionCategorias.classList.add('oculto')
//         document.getElementById('div-editar-categoria').classList.remove('oculto')
// })

// })
}

// REPORTE



const inicializar = () => {
    const inputFecha = document.querySelectorAll('input[type="date"]')
    inputFecha.forEach(input => {
        input.valueAsDate = new Date()
    })
    mostrarOperaciones(operaciones)
    pintarOperaciones(operaciones)
    generarCategorias()
    pintarCategorias()
    crearCategoria()
    totalGastos(operaciones)
    totalGanancia(operaciones)
}
window.onload = inicializar