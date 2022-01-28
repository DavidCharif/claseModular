/**
    CONTROLADOR
        -> RECIBIR DATOS DEL CLIENTE -> DESDE LA PETICIÓN
        -> PASAR AL SERVICIO
        -> RECIBIR DATOS DEL SERVICIO
        -> ENVIAR UNA RESPUESTA.
*/
import { urlUsers } from "../../conexion/url.js";

import {getUsers} from "../users/service.js"
import { addHtml } from "./vista.js";

export const getElements = async () => {
    let users = await getUsers(urlUsers);
    addHtml(users);
}
