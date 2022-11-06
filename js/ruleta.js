let ruleta = document.getElementById("ruleta")
let ganador__numero = document.getElementById("ganador__numero")
let ganador__color = document.getElementById("ganador__color")
let footer__tablero = document.getElementById("footer__tablero")

/** MOVIENTO DE LA RULETA Y DEVUELVE EL NUMERO QUE CAE */


const girar =()=> {

    let rand = Math.floor(Math.random()*7200)
    // console.log(rand)
    
    const  calcular =()=> {
        seleccion = rand / 360
        seleccion = (seleccion - parseInt(seleccion.toString().split(".")[0]))*360
        ruleta.style.transform = "rotate("+ rand +"deg)"
        console.log(seleccion)


        setTimeout(() => {

        
        switch (true) {
            /** NUMERO 34 */
            case seleccion > 360 && seleccion <= 9:
                ganador__numero.textContent = "34"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("34")
                break;
            /** NUMERO 17 */"negro"
            case seleccion > 10 && seleccion <= 18:
                ganador__numero.textContent = "17"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("17")
                break;
            /** NUMERO 25 */
            case seleccion > 19 && seleccion <= 28:
                ganador__numero.textContent = "25"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("25")
                break;
            /** NUMERO 2 */
            case seleccion > 29 && seleccion <= 38:
                ganador__numero.textContent = "2"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("2")
                break;
            /** NUMERO 21 */
            case seleccion > 39 && seleccion <= 47:
                ganador__numero.textContent = "21"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("21")
                break;
            /** NUMERO 4 */
            case seleccion > 48 && seleccion <= 57:
                ganador__numero.textContent = "4"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("4")
                break;
            /** NUMERO 19 */
            case seleccion > 58 && seleccion <= 67:
                ganador__numero.textContent = "19"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("19")
                break;
            /** NUMERO 15 */
            case seleccion > 68 && seleccion <= 76:
                ganador__numero.textContent = "15"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("15")
                break;
            /** NUMERO 32 */
            case seleccion > 77 && seleccion <= 86:
                ganador__numero.textContent = "32"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("32")
                break;
            /** NUMERO 0 */
            case seleccion > 87 && seleccion <= 96:
                ganador__numero.textContent = "0"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("0")
                break;
            /** NUMERO 26 */
            case seleccion > 97 && seleccion <= 106:
                ganador__numero.textContent = "26"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove()
                ganador__numero.classList.add("negro-txt")
                console.log("26")
                break;
            /** NUMERO 3 */
            case seleccion > 107 && seleccion <= 116:
                ganador__numero.textContent = "3"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("3")
                break;
            /** NUMERO 35 */
            case seleccion > 117 && seleccion <= 125:
                ganador__numero.textContent = "35"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("35")
                break;
            /** NUMERO 12 */
            case seleccion > 126 && seleccion <= 135:
                ganador__numero.textContent = "12"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("12")
                break;
            /** NUMERO 28 */
            case seleccion > 136 && seleccion <= 145:
                ganador__numero.textContent = "28"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("28")
                break;  
            /** NUMERO 7 */
            case seleccion > 146 && seleccion <= 154:
                ganador__numero.textContent = "7"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("7")
                break;   
            /** NUMERO 29 */
            case seleccion > 155 && seleccion <= 164:
                ganador__numero.textContent = "29"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("29")
                break;
            /** NUMERO 18 */
            case seleccion > 165 && seleccion <= 174:
                ganador__numero.textContent = "18"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("18")
                break;
            /** NUMERO 22 */
            case seleccion > 175 && seleccion <= 183:
                ganador__numero.textContent = "22"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("22")
                break; 
            /** NUMERO 9 */
            case seleccion > 184 && seleccion <= 193:
                ganador__numero.textContent = "9"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("9")
                break;
            /** NUMERO 31 */
            case seleccion > 194 && seleccion <= 203:
                ganador__numero.textContent = "31"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("31")
                break;
            /** NUMERO 14 */
            case seleccion > 204 && seleccion <= 213:
                ganador__numero.textContent = "14"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("14")
                break;
            /** NUMERO 20 */
            case seleccion > 214 && seleccion <= 222:
                ganador__numero.textContent = "20"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("20")
                break;
            /** NUMERO 1 */
            case seleccion > 223 && seleccion <= 232:
                ganador__numero.textContent = "1"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("1")
                break;
            /** NUMERO 33 */
            case seleccion > 233 && seleccion <= 242:
                ganador__numero.textContent = "33"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("33")
                break;
            /** NUMERO 16 */
            case seleccion > 243 && seleccion <= 252:
                ganador__numero.textContent = "16"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("16")
                break;
            /** NUMERO 24 */
            case seleccion > 253 && seleccion <= 261:
                ganador__numero.textContent = "24"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("24")
                break;
            /** NUMERO 5 */
            case seleccion > 262 && seleccion <= 271:
                ganador__numero.textContent = "5"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("5")
                break;
            /** NUMERO 10 */
            case seleccion > 272 && seleccion <= 281:
                ganador__numero.textContent = "10"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("10")
                break;
            /** NUMERO 23 */
            case seleccion > 282 && seleccion <= 291:
                ganador__numero.textContent = "23"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("23")
                break;
            /** NUMERO 8 */
            case seleccion > 292 && seleccion <= 300:
                ganador__numero.textContent = "8"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("8")
                break;
            /** NUMERO 30 */
            case seleccion > 301 && seleccion <= 310:
                ganador__numero.textContent = "30"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("30")
                break; 
            /** NUMERO 11 */
            case seleccion > 311 && seleccion <= 320:
                ganador__numero.textContent = "11"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("11")
                break;
            /** NUMERO 36 */
            case seleccion > 321 && seleccion <= 329:
                ganador__numero.textContent = "36"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("36")
                break;
            /** NUMERO 13 */
            case seleccion > 330 && seleccion <= 339:
                ganador__numero.textContent = "13"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("13")
                break;
            /** NUMERO 27 */
            case seleccion > 340 && seleccion <= 349:
                ganador__numero.textContent = "27"
                ganador__color.classList.remove("negro")
                ganador__color.classList.add("rojo")
                ganador__numero.classList.remove("negro-txt")
                ganador__numero.classList.add("rojo-txt")
                console.log("27")
                break;
            /** NUMERO 6*/
            case seleccion > 350 && seleccion <= 359:
                ganador__numero.textContent = "6"
                ganador__color.classList.remove("rojo")
                ganador__color.classList.add("negro")
                ganador__numero.classList.remove("rojo-txt")
                ganador__numero.classList.add("negro-txt")
                console.log("6")
                break;      
        }  
    }, 10000)
    }

    calcular(rand)
    console.log(apuesta)


    /** Reseteo la apuesta */
    apuesta = []
    console.log(apuesta)
}

/**-----------FIN------------ */


/** GUARDAR APUESTA */

let apuesta = []

const guardar__apuesta=(ev)=> {
    // console.log(ev.target.textContent)
    let numero__apuesta = ev.target.textContent
    apuesta.push(numero__apuesta)
    console.log(apuesta)

}



footer__tablero.addEventListener("click", guardar__apuesta)
ruleta.addEventListener("click", girar)