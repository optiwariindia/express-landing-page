import { validateAndSubmit } from "./modules/form.js";
import { Login, Logout} from "./modules/Auth.js"
const forms = document.querySelectorAll("form[api-form]");
forms.forEach(form => {
    form.querySelector("button[type=submit]").addEventListener("click", async (e) => {
        e.preventDefault();
        validateAndSubmit(form);
    });
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
    })
})
Login();
document.addEventListener("login",()=>{
    console.log("Login event called")
});
document.addEventListener("logout",()=>{
    console.log("Logout event called")
});