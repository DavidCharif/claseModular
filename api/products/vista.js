import { ulElement } from "../../scripts/index/domElements.js"

export const addHtml = obj => {
    obj.forEach((elemento) => {
        
        let {name,description,img,price,id} = elemento;
        ulElement.innerHTML += `     
        <li class="list-group-item">
        <span class="lead">${name}</span>
        <img src="${img}" width="50px"></img>
        <p class="text">${price}</p>
        <p class="text">${description}</p>
        <button id="${id}" class="btn btn-dark btm-sm float-end">
            Borrar
        </button>
        </li>
        `
    })
}