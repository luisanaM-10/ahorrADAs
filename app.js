const sectionBalance = document.getElementById("section-balance") // section de balance
const sectionCategorias = document.getElementById("section-categorias") // section de categorías
const sectionReportes = document.getElementById("section-reportes") // section de reportes
const divBurger = document.getElementById("div-burger") // div burger que contiene los btn para las section
const divNuevaOp = document.getElementById("div-operaciones") // div de +Nueva operación
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
const btnAgregar = document.getElementById('agregar-categoria') // btn de agregar categorias


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

// btn de + nueva operacion
btnOperacion.addEventListener("click", (e) => {
    sectionBalance.classList.add("oculto")
    divNuevaOp.classList.remove("oculto")
})

// CATEGORÍAS
const categorias = [
    'Comida',
    'Servicios',
    'Salidas',
    'Transporte',
    'Educación',
    'Trabajo',
    'Salud'
]
// agregar categorias
// const agregarCategoria = () => {
    
// }
// categorias.push(inputCategoria.value)


// pintar las categorias en los selects
const generarCategorias = () => {
    for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    selects.innerHTML = '';
    if (select.classList.contains('filtro-categoria')) {
        select.innerHTML = '<option>Todas</option>'
    }
    for (let c = 0; c < categorias.length; c++) {
        select.innerHTML += `<option value=${categorias[c]}>${categorias[c]}</option>`
    }
    }
}
generarCategorias()

const pintarCategorias = () => {
    for (let i = 0; i < categorias.length; i++) {
        contenedorCategorias.innerHTML +=
        `<div class="column"> 
            <div class="colum is-6" style="display:flex; justify-content:space-between;"> 
                <span class="tag is-primary is-light">${categorias[i]}</span> 
                <div>
                  <a href="#" style="margin-right:5px; font-size: 13px">Editar</a> 
                  <a href="#" style="font-size: 13px">Eliminar</a>
                </div>
            </div>
        </div>`
    }
}
pintarCategorias()

console.log(categorias)