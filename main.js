// creo un array para ingresar los lenguajes 

const lenguajes = [
    {
        nombre: "HTML",
        img: '/imgs/html-64.png'
    },
    {
        nombre: "CSS",
        img: '/imgs/css-3.png'
    },
    {
        nombre: "JavaScript",
        img: '/imgs/js.png'
    },
    {
        nombre: "PYTHON",
        img: '/imgs/phyton.png'
    },
    {
        nombre: "SQL",
        img: '/imgs/servidor-sql.png'
    }
]

let div_lenguajes = document.querySelector('.lenguajes')

function cargaLenguajes() {
    for (const len of lenguajes) {
        //crear div1 con class "col-md-4 col-sm-6"
        let div1 = document.createElement('div')
        div1.setAttribute('class', "col-md-4 col-sm-6")
        //crear div2 con class "tarjeta-lenguaje">
        let div2 = document.createElement('div')
        div2.setAttribute('class', "tarjeta-lenguaje")
        //creo imagen y titulo
        let im = document.createElement('img')
        im.src = len.img
        let h3 = document.createElement('h3')
        h3.innerText = len.nombre
        //agregar imagen y nombre a div2
        div2.appendChild(im)
        div2.appendChild(h3)
        //agregar div2 a div1
        div1.appendChild(div2)
        //agregar div1 a div_lenguajes
        div_lenguajes.appendChild(div1)
    }
}

cargaLenguajes()