HTMLFormElement.prototype.checkValidity = function () {
    const valid = Array.from(this.querySelectorAll("[name]")).reduce((a, c) => {
        return c?.validity?.valid && a;
    }, true);
    return valid;
};
HTMLFormElement.prototype.getData = function () {
    const data = Array.from(this.querySelectorAll("[name]")).reduce((a, c) => {
        let fldName = c.getAttribute("name");
        let fldType = c.getAttribute("type");
        switch (fldType) {
            case "radio":
            case "checkbox":
                if (!c.checked) return a;
                break;
            default:
                break;
        }
        if (!(fldName in a)) {
            a[fldName] = c.value;
            return a;
        }
        if (a[fldName] instanceof Array) {
            a[fldName].push(c.value);
            return a;
        }
        a[fldName] = [
            a[fldName],
            c.value
        ];
        return a;
    }, {});
    return data;
};
HTMLFormElement.prototype.getInvalidInputs = function () {
    return Array.from(this.querySelectorAll(":invalid"));
};
HTMLFormElement.prototype.hasFile = function () {
    return !!this.querySelector("[type=file]");
};
HTMLElement.prototype.showError=function(error){
    let parent =this.closest(".form-group")??this.parentElement;
    parent.classList.add("has-error");
    let er=parent.querySelector(".error");
    if(!er){
        er=document.createElement("span");
        er.classList.add("error");
        parent.append(er);
    }
    er.innerText=error;
}
HTMLElement.prototype.clearError=function(){
    let parent=this.closest(".form-group")??this.parentElement;
    parent.classList.remove("has-error");
    let er=parent.querySelector(".error");
    if(er){
        er.remove();
    }
}
Array.prototype.rotate = function (direction = "right") {
    let array = this;
    switch (direction) {
        case "left":
            let firstElement = array[0];
            array.shift();
            array.push(firstElement);
            break;
        case "right":
            let lastElement = array.pop();
            array.unshift(lastElement);
            break;
    }
};
window.addEventListener("beforeunload", async (e) => {
    console.log("Unloading");
    await setTimeout(() => { }, 10000);
    console.log("Unloaded");
    return false;
});
String.prototype.slug = function () {
    let exp = RegExp(/\W/g);
    return this.replace(exp, "-").toLowerCase();
};
Number.prototype.toDataSize = function (precision = 3) {
    let bytes = this;
    const units = [
        "bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    let i = 0;
    while (bytes >= 1024) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(3)} ${units[i]}`;
};