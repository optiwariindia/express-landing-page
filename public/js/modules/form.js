import API from "./api.js";
import Toast from "./toast.js";
let api = new API();
export async function validateAndSubmit(form) {
  if (!form) return console.log("Invalid request");
  if (!form.checkValidity()) {
    let invalidInputs = form.getInvalidInputs();
    invalidInputs.forEach((input) => {
      if (input.validity.valueMissing) input.showError("Required");
      else input.showError("Invalid Input");
      input.addEventListener(
        "keyup",
        (e) => {
          input.clearError();
        },
        { once: true },
      );
    });
    return;
  }
  let action = form.getAttribute("action");
  let method = form.getAttribute("method");
  if (form.hasFile()) {
    const formData = new FormData(form);
    const token = localStorage.getItem("token");
    let temp = await fetch(action, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    console.log(await temp.json());
    return;
  }
  let data = form.getData();
  let resp = await api[method.toLowerCase()](action, data);
  if ("token" in resp) {
    localStorage.setItem("token", resp.token);
    let event = new CustomEvent("login");
    document.dispatchEvent(event);
  }
  if (resp?.status === "success") {
  }
  if ("message" in resp) {
    new Toast(resp?.message, "success");
  }
  if (resp?.status === "error") {
    if (resp?.message === "invalid token") {
      localStorage.removeItem("token");
      let event = new CustomEvent("logout");
      document.dispatchEvent(event);
    }
    new Toast(resp?.message, "error");
  }
  if ("reload" in resp) {
    location.reload();
  }
}
