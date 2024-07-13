import { validateAndSubmit } from "./modules/form.js";
import { Login, Logout,LoadDashboard} from "./modules/Auth.js"
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
if(Login()){
    LoadDashboard();
}
document.addEventListener("login",()=>{
    LoadDashboard();
});
document.addEventListener("logout",()=>{
    Logout();
    LoadDashboard();
});
document.querySelectorAll("[action=logout]").forEach(actionButton=>{
    actionButton.addEventListener("click",(e)=>{
        e.preventDefault();
        document.dispatchEvent(new Event("logout"));
    })
})