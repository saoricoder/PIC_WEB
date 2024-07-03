
        class ValidadorFibonacci {
            constructor(numero) {
                this.numero = numero;
            }

            esFibonacci() {
                if (this.numero < 0) return false;

                let a = 0, b = 1;
                if (this.numero === a || this.numero === b) return true;

                let c = a + b;
                while (c <= this.numero) {
                    if (c === this.numero) return true;
                    a = b;
                    b = c;
                    c = a + b;
                }
                return false;
            }

            validar() {
                const resultado = this.esFibonacci();
                const textoResultado = resultado ? 'Sí' : 'No';
                document.getElementById('result').innerText = `${this.numero} pertenece a la serie de Fibonacci: ${textoResultado}`;
            }
        }

        function validarFibonacci() {
            const numero = parseInt(document.getElementById('numero').value);
            const validador = new ValidadorFibonacci(numero);
            validador.validar();
        }
