function convertirTemperatura() {
    let celsius;

    while (true) {
        const temperatura = prompt("Ingrese la temperatura en grados Celsius:");
        
        // Intentamos convertir la entrada a un número
        celsius = parseFloat(temperatura);

        // Este if nos mostrara un error si la entrada no es un número
        if (!isNaN(celsius)) {
            break; 
        } else {
            alert("Por favor ingrese un número válido.");
        }
    }

    // Formulas para convertir a Fahrenheit y Kelvin
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // Mostrar resultados en la consola
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);

    // Mostrar resultados en el DOM
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
}


// Llamar a la función para iniciar el programa
convertirTemperatura();
