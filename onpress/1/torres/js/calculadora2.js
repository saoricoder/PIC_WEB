	/* script de javascript */
    class Calculadora {
        constructor() {
            this.num1 = 0;
            this.num2 = 0;
        }

        ingresar() {
            this.num1 = parseFloat(document.getElementById('num1').value);
            this.num2 = parseFloat(document.getElementById('num2').value);
        }

        validar() {
            if (isNaN(this.num1) || isNaN(this.num2)) {
                return "Por favor ingresa números válidos";
            }
            return null;
        }

        suma() {
            return this.num1 + this.num2;
        }

        resta() {
            return this.num1 - this.num2;
        }

        multiplica() {
            return this.num1 * this.num2;
        }

        divide() {
            if (this.num2 === 0) {
                return "No se puede dividir por 0";
            }
            return this.num1 / this.num2;
        }

        calcular(operador) {
            this.ingresar();
            const error = this.validar();
            if (error) {
                document.getElementById('result').value = error;
                return;
            }

            let result;
            switch(operador) {
                case 'suma':
                    result = this.suma();
                    break;
                case 'resta':
                    result = this.resta();
                    break;
                case 'multiplica':
                    result = this.multiplica();
                    break;
                case 'divide':
                    result = this.divide();
                    break;
            }

            document.getElementById('result').value = result;
        }
    }

    const Calculadora = new Calculadora();