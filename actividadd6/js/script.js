function calcular() {
 let valorintroducido;
  valorintroducido=document.getElementById("texto").value;
  let resto;

  resto=valorintroducido % 2;
  if(resto == 0){
    document.getElementById("parrafo").innerHTML="número es par";
  }
  else{
    document.getElementById("parrafo").innerHTML="número es impar";
  }
}