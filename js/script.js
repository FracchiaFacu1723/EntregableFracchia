document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let destino = document.getElementById("destino").value;
    let dias = parseInt(document.getElementById("dias").value);
    let personas = parseInt(document.getElementById("personas").value);
    let tipoGasto = document.getElementById("tipoGasto").value;

    function calcularCosto(dias, personas, tipoGasto) {
        let costo = 0;
        if (tipoGasto == "Económico") {
            costo = 1000;
        } else if (tipoGasto == "Medio") {
            costo = 2000;
        } else if (tipoGasto == "Lujoso") {
            costo = 3000;
        }
        return costo * dias * personas;
    }
    
    let costoTotal = calcularCosto(dias, personas, tipoGasto);
    
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El costo total del viaje a ${destino} para ${personas} personas por ${dias} días es de $${costoTotal} por persona.`;
});
