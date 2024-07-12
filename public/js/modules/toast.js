export default class Toast{
    constructor(message,type="success",duration=5000){
        let toast=document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add(type);
        toast.innerText=message;
        document.body.append(toast);
        setTimeout(()=>{
            toast.remove();
        },duration)
    }
}