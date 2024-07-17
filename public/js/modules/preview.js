export default function () {
  let imageInputs = document.querySelectorAll("img[input]");
  imageInputs.forEach((img) => {
    const form = img.closest("form");
    if (!form) return;
    const inputName = img.getAttribute("input");
    if (!inputName) return;
    const inputElement = form.querySelector(`[name='${inputName}']`);
    if (!inputElement) return;
    inputElement.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const fileReader = new FileReader();
      fileReader.onload = function (ev) {
        img.src = ev.target.result;
      };
      fileReader.readAsDataURL(file);
    });
  });
}
