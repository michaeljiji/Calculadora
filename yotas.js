function calcularIMC() {
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);

            if (!isNaN(peso) && !isNaN(altura)) {
                var imc = peso / (altura * altura);

                document.getElementById("resultado").textContent = imc.toFixed(2);

                var interpretacion = "";

                if (imc < 18.5) {
                    interpretacion = "Está bajo de peso.";
                } else if (imc >= 18.5 && imc < 25) {
                    interpretacion = "Tiene un peso saludable.";
                } else if (imc >= 25 && imc < 30) {
                    interpretacion = "Tiene sobrepeso.";
                } else {
                    interpretacion = "Tiene obesidad.";
                }

                document.getElementById("interpretacion").textContent = interpretacion;
            } else {
                alert("Por favor, ingrese un peso y altura válidos.");
            }
        }