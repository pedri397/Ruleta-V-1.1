let ruleta = document.getElementById("ruleta")
let ganador__numero = document.getElementById("ganador__numero")
let ganador__color = document.getElementById("ganador__color")
let footer__tablero = document.getElementById("footer__tablero")
let saldo = document.getElementById("saldo")
// let main__numeros = Array.from(document.querySelector("#main__numeros")) /** Array.from hace que me lo devuelva en forma de array */
let tablero__caja = document.getElementById("footer__tablero")
let ventana__ganancias__txt = document.getElementById("ventana__ganancias__txt")
let main__numeros = document.getElementById("main__numeros")
let cantidad__apuesta = document.getElementById("cantidad__apuesta")
let ventana__ganancias = document.getElementById("ventana__ganancias")
let boton__lanzar = document.getElementById("boton__lanzar")
saldo.textContent = 1000


/** MOVIMIENTO DE LA RULETA Y DEVUELVE EL NUMERO QUE CAE */


const girar =()=> {

    let rand = Math.floor(Math.random()*7200)
    // console.log(rand)
    
    const  calcular =()=> {
        seleccion = rand / 360
        seleccion = (seleccion - parseInt(seleccion.toString().split(".")[0]))*360
        ruleta.style.transform = "rotate("+ rand +"deg)"
        seleccion = Math.floor(seleccion)
        console.log(seleccion)


        setTimeout(() => {

        
        switch (true) {
            /** NUMERO 34 */
            case seleccion > 360 && seleccion <= 9:
                ganador__numero.textContent = "34"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("34")
                break;
            /** NUMERO 17 */
            case seleccion > 10 && seleccion <= 18:
                ganador__numero.textContent = "17"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("17")
                break;
            /** NUMERO 25 */
            case seleccion > 19 && seleccion <= 28:
                ganador__numero.textContent = "25"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("25")
                break;
            /** NUMERO 2 */
            case seleccion > 29 && seleccion <= 38:
                ganador__numero.textContent = "2"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("2")
                break;
            /** NUMERO 21 */
            case seleccion > 39 && seleccion <= 47:
                ganador__numero.textContent = "21"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("21")
                break;
            /** NUMERO 4 */
            case seleccion > 48 && seleccion <= 57:
                ganador__numero.textContent = "4"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("4")
                break;
            /** NUMERO 19 */
            case seleccion > 58 && seleccion <= 67:
                ganador__numero.textContent = "19"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("19")
                break;
            /** NUMERO 15 */
            case seleccion > 68 && seleccion <= 76:
                ganador__numero.textContent = "15"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("15")
                break;
            /** NUMERO 32 */
            case seleccion > 77 && seleccion <= 86:
                ganador__numero.textContent = "32"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("32")
                break;
            /** NUMERO 0 */
            case seleccion > 87 && seleccion <= 96:
                ganador__numero.textContent = "0"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("verde", "green")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("verde-txt")
                console.log("0")
                break;
            /** NUMERO 26 */
            case seleccion > 97 && seleccion <= 106:
                ganador__numero.textContent = "26"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove()
                ganador__numero.classList.add("negro-txt")
                console.log("26")
                break;
            /** NUMERO 3 */
            case seleccion > 107 && seleccion <= 116:
                ganador__numero.textContent = "3"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("3")
                break;
            /** NUMERO 35 */
            case seleccion > 117 && seleccion <= 125:
                ganador__numero.textContent = "35"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("35")
                break;
            /** NUMERO 12 */
            case seleccion > 126 && seleccion <= 135:
                ganador__numero.textContent = "12"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("12")
                break;
            /** NUMERO 28 */
            case seleccion > 136 && seleccion <= 145:
                ganador__numero.textContent = "28"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("28")
                break;  
            /** NUMERO 7 */
            case seleccion > 146 && seleccion <= 154:
                ganador__numero.textContent = "7"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("7")
                break;   
            /** NUMERO 29 */
            case seleccion > 155 && seleccion <= 164:
                ganador__numero.textContent = "29"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("29")
                break;
            /** NUMERO 18 */
            case seleccion > 165 && seleccion <= 174:
                ganador__numero.textContent = "18"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("18")
                break;
            /** NUMERO 22 */
            case seleccion > 175 && seleccion <= 183:
                ganador__numero.textContent = "22"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("22")
                break; 
            /** NUMERO 9 */
            case seleccion > 184 && seleccion <= 193:
                ganador__numero.textContent = "9"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("9")
                break;
            /** NUMERO 31 */
            case seleccion > 194 && seleccion <= 203:
                ganador__numero.textContent = "31"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("31")
                break;
            /** NUMERO 14 */
            case seleccion > 204 && seleccion <= 213:
                ganador__numero.textContent = "14"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("14")
                break;
            /** NUMERO 20 */
            case seleccion > 214 && seleccion <= 222:
                ganador__numero.textContent = "20"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("20")
                break;
            /** NUMERO 1 */
            case seleccion > 223 && seleccion <= 232:
                ganador__numero.textContent = "1"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("1")
                break;
            /** NUMERO 33 */
            case seleccion > 233 && seleccion <= 242:
                ganador__numero.textContent = "33"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("33")
                break;
            /** NUMERO 16 */
            case seleccion > 243 && seleccion <= 252:
                ganador__numero.textContent = "16"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("16")
                break;
            /** NUMERO 24 */
            case seleccion > 253 && seleccion <= 261:
                ganador__numero.textContent = "24"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("24")
                break;
            /** NUMERO 5 */
            case seleccion > 262 && seleccion <= 271:
                ganador__numero.textContent = "5"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("5")
                break;
            /** NUMERO 10 */
            case seleccion > 272 && seleccion <= 281:
                ganador__numero.textContent = "10"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("10")
                break;
            /** NUMERO 23 */
            case seleccion > 282 && seleccion <= 291:
                ganador__numero.textContent = "23"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("23")
                break;
            /** NUMERO 8 */
            case seleccion > 292 && seleccion <= 300:
                ganador__numero.textContent = "8"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("8")
                break;
            /** NUMERO 30 */
            case seleccion > 301 && seleccion <= 310:
                ganador__numero.textContent = "30"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("30")
                break; 
            /** NUMERO 11 */
            case seleccion > 311 && seleccion <= 320:
                ganador__numero.textContent = "11"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("11")
                break;
            /** NUMERO 36 */
            case seleccion > 321 && seleccion <= 329:
                ganador__numero.textContent = "36"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("36")
                break;
            /** NUMERO 13 */
            case seleccion > 330 && seleccion <= 339:
                ganador__numero.textContent = "13"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("13")
                break;
            /** NUMERO 27 */
            case seleccion > 340 && seleccion <= 349:
                ganador__numero.textContent = "27"
                ganador__color.classList.remove("negro", "black")
                ganador__color.classList.add("rojo", "red")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("27")
                break;
            /** NUMERO 6*/
            case seleccion > 350 && seleccion <= 359:
                ganador__numero.textContent = "6"
                ganador__color.classList.remove("rojo", "red")
                ganador__color.classList.add("negro", "black")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("6")
                break;      
            }  
            comparar_apuesta()
    }, 1000)
}

    calcular(rand)
    console.log(apuesta)

    /** Reseteo la apuesta */
    // apuesta = []
    console.log(apuesta)
}

/**-----------FIN------------ */


/** GUARDAR APUESTA */

let apuesta = []

const guardar__apuesta=(ev)=> {
    console.log(ev.target)
    if(ev.target.nodeName === "SPAN" && saldo.textContent >= 1){
        let numero__apuesta = ev.target.textContent
        apuesta.push(numero__apuesta)
        console.log(apuesta)
        let ficha = document.createElement("IMG")
        ficha.src = "image/ficha__negra.png"
        ficha.classList.add("ficha__negra-img")
        ev.target.appendChild(ficha)

        saldo.textContent = saldo.textContent - 1
        console.log(saldo)  
        // borrar__tablero()
    }
    cantidadApostada()
}

/** BORRO LAS FICHAS APOSTADAS EN EL TABLERO */

const borrar__tablero =()=> {
    // console.log(ficha)
    // console.log(tablero__caja.children.length)
    let hijos_longitud = tablero__caja.children.length
    let hijo = tablero__caja.children
    // console.log(hijo[0].children.length)

    for (let i = 0; i < hijos_longitud; i++) {

        for (let j = hijo[i].children.length; j >= 0; j--) {
            // console.log(hijo[i].children[j])
            let borrar = hijo[i].children[j]
            
            if(borrar != undefined && borrar.nodeName == "IMG"){
                // console.log(hijo[i].children[j])
                // console.log("entra")
                borrar.remove()
            }
            
            
        }
    }
}
/**------FIN---- */



/** CANTIDAD APOSTADA  */

const cantidadApostada=()=> {
    let cantidad_apostada = apuesta.length
    cantidad__apuesta.textContent = cantidad_apostada
}

/**------FIN---- */


const comparar_apuesta=()=> {
    let numero_acertado = ganador__numero.textContent
    let color_acertado = ganador__color.classList[1]

    /** AQUI AÑADIMOS LOS NUMEROS A LA DERECHA */

    /** Condicion si hay mas de 11 numero borra el mas antiguo */
    if(main__numeros.children.length >= 8){
        main__numeros.lastElementChild.remove()

    }

    let span = document.createElement("SPAN")
    span.textContent = numero_acertado
    span.classList.add("numeros__salidos")
    span.style = "background-color: " + ganador__color.classList[2]
    ganador__color.classList.remove("verde")
    
    main__numeros.prepend(span)
    /** ---------------FIN------------- */


    // console.log(apuesta)
    let acertar = apuesta.includes(numero_acertado)
    // console.log(ganador__color.classList[1])
    let acertar__color = apuesta.includes(color_acertado)
    // console.log(color_acertado)
    // console.log(acertar)
    if(acertar){
        
        let cantidad = apuesta.filter(cant => cant === numero_acertado).length
        let ganancias 
        // console.log(cantidad)
        console.log("has ganado")

        ganancias = cantidad * 36
        console.log(ganancias)

        /** MOSTRAR VENTA EMERGENTE */

        mostrarVentana(ganancias)

        /**----FIN------ */

        saldo.textContent = ganancias + parseInt(saldo.textContent)
    }else if(acertar__color){

        let cantidad_color = apuesta.filter(cant => cant === color_acertado).length
        let ganancias 
        // console.log(cantidad)
        console.log("has ganado")

        ganancias = cantidad_color * 2
        console.log(ganancias)

        /** MOSTRAR VENTA EMERGENTE */

        mostrarVentana(ganancias)

        /**----FIN------ */

        saldo.textContent = ganancias + parseInt(saldo.textContent)        
    }else if(!acertar && !acertar__color){
        console.log("has perdido")
    }
    
    apuesta = []
    borrar__tablero()
}


/** MOSTRAR VENTA EMERGENTE */

const mostrarVentana =(ganancias)=> {

    ventana__ganancias.classList.add("transicion__ganancias")
    ventana__ganancias.style = "display: flex"
    ventana__ganancias__txt.textContent = ganancias

    setTimeout(()=>{
        ventana__ganancias.style = "display = none"
        ventana__ganancias.classList.remove("transicion__ganancias")
    }, 3000)
}

/**----FIN------ */


/** BOTON LANZAR BOLA PULSADO */

const lanzarBola =()=> {

    setTimeout(()=>{
        boton__lanzar.classList.remove("boton__lanzar--pulsado")   
    }, 200)
    boton__lanzar.classList.add("boton__lanzar--pulsado")
}
/**----FIN------ */

boton__lanzar.addEventListener("click", girar)
boton__lanzar.addEventListener("click", lanzarBola)
footer__tablero.addEventListener("click", guardar__apuesta)
// ruleta.addEventListener("click", girar)