/*
    MODELO -> MANIPULAR LA BASE DE DATOS
        -> RECIBE UNA SOLICITUD DESDE EL SERVICIO
            -> OBTENER DATOS DE LA BASE DATOS
            -> ACTUALIZAR
            -> GUARDAR NUEVOS DATOS
            -> ELIMINAR DATOS EXISTENTES.
        -> LOS ENVÍA AL SERVICIO
*/
// post - put - delete 

export const addtoDB = async (user,url) => {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type" : "application/json; charset=utf-8"
        }
    })
}

export const delUser = async (id,url) => {
    await fetch(url+id,{
        method: 'DELETE'
    })
}