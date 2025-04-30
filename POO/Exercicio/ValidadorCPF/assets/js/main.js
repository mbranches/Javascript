class validaFormulario {
    constructor() {
        this.form = document.querySelector(".formulario")

        this.events();
    }

    events() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.areValidFields();
        const validPassword = this.passwordIsValid();

        if(validFields && validPassword) {
            alert("Form sent successfully")
            this.form.submit();
        }
    }

    areValidFields() {
        let valid = true;
        let fields = this.form.querySelectorAll(".validar");

        this.removesAllErrorFields();

        for(let field of fields) {
            const label = field.previousElementSibling.innerText;

            if(!field.value.trim()) {
                this.createsError(field, `The field "${label.replace(':', '')}" cannot be empty.`)

                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.cpfIsValid(field)) valid = false;
            }

            if(field.classList.contains('usuario')) {
                if(!this.userIsValid(field)) valid = false;
            }
        }

        return valid;
    }

    cpfIsValid(cpfField) {
        let valid = true;
        const cpf = new ValidaCpf(cpfField.value);

        if(!cpf.valida()) {
            this.createsError(cpfField, "CPF inválido.");
            valid = false;
        }

        return valid;
    }

    userIsValid(userField) {
        let valid = true;
        const user = userField.value;

        console.log("%%E%$!¨%")
        if(user.length < 3 || user.length > 12) {
            this.createsError(userField, 'Username must be between 3 and 12 characters long.');

            valid = false;
        } 

        // contem apenas letras e numero
        if(!user.match(/^[a-zA-Z0-9]+$/)){
            this.createsError(userField, 'Username must contain only letters or numbers.');

            valid = false;
        }
        
        return valid;

    }

    passwordIsValid() {
        let valid = true;

        const password = this.form.querySelector(".senha");
        const repeatPassword = this.form.querySelector(".repetir-senha");


        console.log(repeatPassword)
        console.log(password)
        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            
            this.createsError(password, 'The "Password" field must be between 6 and 12 characters long.');
        } else if(password.value !== repeatPassword.value) {
            valid = false;

            this.createsError(password, 'The "Password" and "Repeat Password" fields must be same.');
            this.createsError(repeatPassword, 'The "Password" and "Repeat Password" fields must be same.');
        } 
        return valid;
    }


    removesAllErrorFields() {
        const errorFields = this.form.querySelectorAll('.error-text');

        for (const field of errorFields) {
            field.remove();
        }
    }

    createsError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        field.insertAdjacentElement('afterend', div); //-> insere depois do fim do campo
    }


}

const valida = new validaFormulario();