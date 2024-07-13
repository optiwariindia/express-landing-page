export function Login(){
    let token=localStorage.getItem("token");
    return !!token;
}
export function Logout(){
    localStorage.removeItem("token");
    return true;
}
export function LoadDashboard(){
    if(Login() && !location.pathname.startsWith("/admin")){
        location.pathname="/admin";
        return;
    }
    if(!Login()){
        location.pathname="/login";
        return;
    }
}