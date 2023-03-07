//funcion para nivel 1
function nivel_1(canint,nivel1){
  while(canint<nivel1){
    const restantes = parseInt(nivel1-canint)
    alert("Sigue ingresando mas datos te queda: "+restantes)

    let pre = prompt("Cuanto vas a ingresar? Te queda "+restantes)
    let preint = parseInt(pre)
    canint+=preint

    if (canint >= nivel1){
      total = document.getElementById("resultado")
      total.innerHTML = 'ya no quedan mas cupos.'
      resul1= document.getElementById("resultado1")
      resul1.innerHTML ='¡¡Te sugiero los niveles disponibles, nivel 2 o nivel 3!!'
      const nivel_1 = document.querySelector("[name=nivel_1]")
      nivel_1.style.display="none";
}
    if (pre == null){
      inicial = document.getElementById("inicial")
      inicial.innerHTML = "Cupos disponibles anteriormente en el cinema "+nivel1
      queda = document.getElementById("queda")
      queda.innerHTML = ("Quedan "+restantes+" de cupos disponibles. Gracias por su compra")
    }
  }
}

//funcion para nivel 2
function nivel_2(canint,nivel2){
  while(canint<nivel2){
    const restantes = parseInt(nivel2-canint)
    alert("Sigue ingresando mas datos te queda: "+restantes)

    let pre = prompt("Cuanto vas a ingresar? Te queda "+restantes)
    let  preint = parseInt(pre)
    canint+=preint

    if (canint >= nivel2){
      total = document.getElementById("resultado")
      total.innerHTML = 'ya no quedan mas cupos.'
      resul1= document.getElementById("resultado1")
      resul1.innerHTML ='¡¡Te sugiero los niveles que estan disponibles, nivel 1 o nivel 3 !!'
      const nivel_2 = document.querySelector("[name=nivel_2]")
      nivel_2.style.display="none";
}
    if (pre == null){
      inicial = document.getElementById("inicial")
      inicial.innerHTML = "Cupos disponibles anteriormente en el cinema "+nivel2
      queda = document.getElementById("queda")
      queda.innerHTML = ("Quedan "+restantes+" de cupos disponibles. Gracias por su compra")
    }
  }
}

//funcion para el nivel 3
function nivel_3(canint,nivel3){
  while(canint<nivel3){
    const restantes = parseInt(nivel3-canint)
    alert("Sigue ingresando mas datos te queda: "+restantes)

    let pre = prompt("Cuanto vas a ingresar? Te queda "+restantes)
    let  preint = parseInt(pre)
    canint+=preint

    if (canint >= nivel3){
      total = document.getElementById("resultado")
      total.innerHTML = 'ya no quedan mas cupos.'
      resul1= document.getElementById("resultado1")
      resul1.innerHTML ='¡¡Te sugiero los niveles disponibles, nivel 2 o nivel 1!!'
      const nivel_3 = document.querySelector("[name=nivel_3]")
      nivel_3.style.display="none";
}
    if (pre == null){
      inicial = document.getElementById("inicial")
      inicial.innerHTML = "Cupos disponibles anteriormente en el cinema "+nivel3
      queda = document.getElementById("queda")
      queda.innerHTML = ("Quedan "+restantes+" de cupos disponibles. Gracias por su compra")
    }
  } 
}

//funcion del boton principal mostrar
function mostrar() {
    let tick = parseInt(document.getElementById("bus_tipo").value);

    const nivel1 = 20
    const nivel2 = 40
    const nivel3 = 30

    
    let cantidad = prompt("Cuantos tickets vas a comprar?")
    let  canint = parseInt(cantidad)

    if (tick == 1){
    nivel_1(canint,nivel1)
    }

    if (tick == 2){
    nivel_2(canint,nivel2)
  }
  if (tick == 3){
    nivel_3(canint,nivel3)
      
  }
}