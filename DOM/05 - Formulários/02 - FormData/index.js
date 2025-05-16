"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.nome.value;
    const password = form.password.value;

    const formData = new FormData(form);

    formData.set("dadoNovo", "newData");

    // formData.forEach(element => console.log(element));


    if (nome && password) {
        // console.log(nome);
        // console.log(password);  
        
        // form.submit();
    }

    if(formData.has('dadoNovo')) {
        console.log("tem o campo dado novo");
    }

    formData.delete('dadoNovo');
    console.log(formData.has('dadoNovo'));

})