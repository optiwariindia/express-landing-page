export function Login(){
    let token=localStorage.getItem("token");
    if(!token)return;
    if(!location.pathname.startsWith("/admin"))location.pathname="/admin";
}
export function Logout(){

}