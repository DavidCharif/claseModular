import { getElements as getUsers} from "../../api/users/controller.js";
import { getUserData } from "../../api/users/controller.js";
import { button } from "./domElements.js";


document.addEventListener("DOMContentLoaded",getUsers);
button.addEventListener("click", e => {
    e.preventDefault();
    getUserData();
});
 