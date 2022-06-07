function calcular(n1){
    n1 = parseFloat(document.getElementById("n1").value)
    

    selector = document.getElementById("selector").value
    resultado = document.getElementById("Igual")
    switch(selector){
        case "euro":
            calculo = n1 * 5.28
            resultado.innerHTML= calculo
            console.log(calculo)
            break 
        case "dolar":
            calculo = n1 * 4.77
            resultado.innerHTML= calculo
            break

                    }
                }
                