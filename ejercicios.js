function ejerci1() {
    var formulario = document.formulario1.numero.value ;
    var nombres = [] ;

    for(n=0;n<formulario;n++){
        var x = prompt("Ingresar nombre: ");
        nombres.push(x);
    }
    nombres.forEach(nombre =>{
        document.write(
            `   <ul>
                    <li>${nombre}</li>
                </ul>
            `
        );
    });
}

//*********************************************** */

function ejerci2() {
    var eleccion = document.formulario2.opcion.value;
    var valores = [];

    if(eleccion=="Par") {
        for(e=1;e<=100;e++){
            if(e%2==0 && e%5==0){
                valores.push(e);
            }
        }
    }else{
            for (e=1;e<=100; e++){
              if(e%2!=0 && e%5==0){
                  valores.push(e);
              }

            }

        }
            
        for (e=0;e<=(valores.length -1);e++){
            document.write(valores[e]+" ");
        }        
        
    }

//********************************************************** */

function ejerci3() {
    var operacion = document.formulario3.opciones.value;
    var op1 = document.formulario3.v1.value;
    var op2 = document.formulario3.v2.value;
    
    if (operacion=="1") {
        var sumar = parseInt(op1) + parseInt(op2);
        document.write("El resultado de la suma es : " + sumar);
    }
    else if(operacion=="2"){
            var restar = op1-op2;
            document.write("El resultado de la resta es : " + restar);
        }
        else{
            var multiplicar = op1*op2;
            document.write("El resultado de la multiplicacion es : " + multiplicar);
        }   
}
