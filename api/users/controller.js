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
import { addUser } from "../users/service.js";
import { recolectarInputs } from "./vista.js";
import { urlUsers as url } from "../../conexion/url.js";
import { delUser } from "./model.js";

export const getElements = async () => {
    let users = await getUsers(urlUsers);
    addHtml(users);
}

export const getUserData = async () => {
    let datos = recolectarInputs();
    await addUser(datos,url);
    console.log("Usuario agregado");

}

export const deleteButton = async (id) => {
    await delUser(id,url)
    console.log("Usuario eliminado")

}