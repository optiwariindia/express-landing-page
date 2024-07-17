import { validateAndSubmit } from "./modules/form.js";
import { Login, Logout, LoadDashboard } from "./modules/Auth.js";
import PreveiwOnFileChange from "./modules/preview.js";
import Page from "./modules/page.js";
import API from "./modules/api.js";
const forms = document.querySelectorAll("form[api-form]");
forms.forEach((form) => {
  form
    .querySelector("button[type=submit]")
    .addEventListener("click", async (e) => {
      e.preventDefault();
      validateAndSubmit(form);
    });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  });
});
if (Login()) {
  LoadDashboard();
}
document.addEventListener("login", () => {
  LoadDashboard();
});
document.addEventListener("logout", () => {
  Logout();
  LoadDashboard();
});
document.querySelectorAll("[action=logout]").forEach((actionButton) => {
  actionButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.dispatchEvent(new Event("logout"));
  });
});
(() => {
  const newButton = document.querySelector(".new-btn");
  if (!newButton) return;
  newButton.addEventListener("click", (e) => {
    const newFrm = document.querySelector(".new-form");
    if (!newFrm) return;
    newFrm.classList.add("show");
  });
})();
(() => {
  const closeBtns = document.querySelectorAll("button.close");
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      const parent =
        closeBtn.closest(".show") ?? closeBtn.closest("form").parentElement;
      if (!parent) return;
      parent.classList.remove("show");
    });
  });
})();
(() => {
  Page();
})();
(() => {
  PreveiwOnFileChange();
})();
(() => {
  let deleteButtons = document.querySelectorAll("[delete]");
  deleteButtons.forEach((btn) => {
    const endpoint = btn.getAttribute("endpoint");
    const data = {
      id: btn.getAttribute("delete"),
    };
    btn.addEventListener("click", () => {
      const api = new API();
      api.delete(endpoint, data).then((r) => {
        location.reload();
        console.log(r);
      });
    });
    console.log({ endpoint, data });
  });
})();
