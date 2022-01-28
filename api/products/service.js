/**
    SERVICIO -> LÓGICA DEL API
        -> RECIBIR DATOS DEL CONTROLADOR
        -> MANIPULAR LOS DATOS -> TRANSFORMARLO POR MEDIO DE OPERACIONES LÓGICAS Y MATEMÁTICAS.
            -> CONSULTAR EN EL MODELO DATOS DE LA BASE DE DATOS.
            -> ENVIAR AL MODELO DATOS PARA ALMACENAR
        -> ENVIAR AL CONTROLADOR DATOS PARA LA RESPUESTA DE LA PETICIÓN
*/

export const getProducts = async url => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}