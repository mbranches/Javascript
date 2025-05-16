const form = document.forms.namedItem("registration"); // referencia o id;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.nome.value;
    const password = form.password.value;
    console.log(name);
    console.log(password);
})