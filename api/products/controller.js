/**
    CONTROLADOR
        -> RECIBIR DATOS DEL CLIENTE -> DESDE LA PETICIÓN
        -> PASAR AL SERVICIO
        -> RECIBIR DATOS DEL SERVICIO
        -> ENVIAR UNA RESPUESTA.
*/
import { urlProducts } from "../../conexion/url.js";
import {getProducts} from "../products/service.js"
import { addHtml } from "./vista.js";

export const getElements = async () => {
    let products = await getProducts(urlProducts);
    addHtml(products);
}
