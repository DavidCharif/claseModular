import { tableElement } from "../../scripts/user/domElements.js"

export const addHtml = obj => {
    obj.forEach((elemento) => {
       
        
        let {url,name,email,description,id} = elemento;
        tableElement.innerHTML += `
        <tr>
          <td><img src=${url} width="50"><img/></td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${description}</td>
          <td><a id=${id} href="#" class="btn btn-outline-dark" style="background-color: #db7093;">Delete</a></td>
        </tr>
      `
    })
}