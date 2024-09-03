function obtenerFechaHoraActual() {
    const fecha = new Date();
    const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const fechaActual = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaActual = fecha.toLocaleTimeString('es-ES', opcionesHora);
    return `${fechaActual} ${horaActual}`;
}

function enviarMensaje() {
    return "Hola";
}

module.exports = { obtenerFechaHoraActual, enviarMensaje };
