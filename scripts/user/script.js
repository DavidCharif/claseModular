import { getElements as getUsers} from "../../api/users/controller.js";
import { getUserData } from "../../api/users/controller.js";
import { button } from "./domElements.js";
import { tableElement } from "../../scripts/user/domElements.js"
import { deleteButton } from "../../api/users/controller.js";

document.addEventListener("DOMContentLoaded",getUsers);
button.addEventListener("click", e => {
    e.preventDefault();
    getUserData();
});

tableElement.addEventListener("click", async evento => {
    const btnEliminar = evento.target.classList.contains("btn-outline-dark");
    if(btnEliminar === true){
        const id = evento.target.id;
        deleteButton(id)
    }
})

