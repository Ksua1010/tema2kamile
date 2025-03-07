function miau() {
  let nota;

  nota = parseInt(document.getElementById("texto").value);

  //nota no valida (es muy baja O muy alta)
  if (nota<0 || nota>10) {
    alert("nota no valida")
  }

  else {
    if (nota<5) {
      alert("suspenso :,(");
    }
    else{
      alert("aprobado :)");
    }
  }
 
}

