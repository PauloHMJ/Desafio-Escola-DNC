function Verificar() {
    var nameInput = document.getElementById("Name");
    var emailInput = document.getElementById("Email");
  
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      //Não Faz Nada

    } else {
        //Manda mensagem informando ao usuario que o Formulario foi enviado!
      window.alert("Formulario enviado!")
    }
}
  