;(()=>{
    let accordians=document.querySelectorAll("[accordian]");
    if(accordians.length === 0)return ;
    accordians.forEach(accordian=>{
        const caretButtons=accordian.querySelectorAll(".caret-button");
        caretButtons.forEach(button=>{
            button.addEventListener("click",(e)=>{
                const target=e.target;
                const queBlock=target.closest(".que-block");
                if(!queBlock || queBlock.classList.contains("open"))return
                accordian.querySelector(".open").classList.remove("open");
                queBlock.classList.add("open");
            })
        })
    })
})();