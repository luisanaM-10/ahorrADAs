const sectionBalance = document.getElementById("section-balance") // section de balance
const sectionCategorias = document.getElementById("section-categorias") // section de categorías
const sectionReportes = document.getElementById("section-reportes") // section de reportes
const divBurger = document.getElementById("div-burger") // div burger que contiene los btn para las section
const divNuevaOp = document.getElementById("div-operaciones")

const btnBalance = document.getElementById("btn-balance") // btn de balance
const btnCategorias = document.getElementById("btn-categorias") // btn de categorías
const btnReportes = document.getElementById("btn-reportes") // btn de reportes
const btnBurger = document.getElementById("menu-burger") // btn de menu burger
const btnBalance2 = document.getElementById("btn-balance2") // btn de balance
const btnCategorias2 = document.getElementById("btn-categorias2") // btn de categorías
const btnReportes2 = document.getElementById("btn-reportes2") // btn de reportes
const btnOperacion = document.getElementById("btn-operacion")

// ocultar y mostar section 
const balance = (e) => {
    sectionBalance.classList.remove("oculto")
    sectionCategorias.classList.add("oculto")
    sectionReportes.classList.add("oculto")
}
btnBalance.addEventListener("click", balance)
btnBalance2.addEventListener("click", balance)

const categorias = (e) => {
    sectionBalance.classList.add("oculto")
    sectionCategorias.classList.remove("oculto")
    sectionReportes.classList.add("oculto")
}
btnCategorias.addEventListener("click", categorias)
btnCategorias2.addEventListener("click", categorias)

const reportes = (e) => {
    sectionBalance.classList.add("oculto")
    sectionCategorias.classList.add("oculto")
    sectionReportes.classList.remove("oculto")
}
btnReportes.addEventListener("click", reportes)
btnReportes2.addEventListener("click", reportes)

// MENU BURGER
btnBurger.addEventListener("click", (e) => {
    divBurger.classList.toggle("oculto")
})

// btn de + nueva operacion
btnOperacion.addEventListener("click", (e) => {
    sectionBalance.classList.add("oculto")
    divNuevaOp.classList.remove("oculto")
})