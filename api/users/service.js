/**
    SERVICIO -> LÓGICA DEL API
        -> RECIBIR DATOS DEL CONTROLADOR
        -> MANIPULAR LOS DATOS -> TRANSFORMARLO POR MEDIO DE OPERACIONES LÓGICAS Y MATEMÁTICAS.
            -> CONSULTAR EN EL MODELO DATOS DE LA BASE DE DATOS.
            -> ENVIAR AL MODELO DATOS PARA ALMACENAR
        -> ENVIAR AL CONTROLADOR DATOS PARA LA RESPUESTA DE LA PETICIÓN
*/

import { addtoDB } from "./model.js";


export const getUsers = async url => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

export const addUser = async (user,url) => {
    await addtoDB(user,url);
}