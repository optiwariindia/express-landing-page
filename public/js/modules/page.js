import API from "./api.js";

export default async function () {
  let table = document.querySelector("[datatable=page]");
  if (!table) return;
  let endpoint = table.getAttribute("data-api");
  if (!endpoint) return;
  const api = new API();
  const data = await api.get(endpoint);
  if (data.status === "success" && "data" in data && data.data.length) {
    let tbody = document.createElement("tbody");
    for (let index = 0; index < data.data.length; index++) {
      const info = data.data[index];
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1} </td>
        <td>${info.slug} </td>
        <td>${info.title}</td>
        <td>
          <div class=buttons>
          <a href="/admin/page/${info._id}/delete" class="small button delete">Delete</a>
          <a href="/admin/page/${info._id}/edit" class="small button edit">Edit</a>
          <a href="/admin/page/${info._id}/preview" class="small button preview">Preview</a>
          <a href="/admin/page/${info._id}/banner" class="small button banner">Banner</a>
          <a href="/admin/page/${info._id}/about" class="small button banner">About us</a>
          <a href="/admin/page/${info._id}/usp" class="small button banner">USP</a>
          <a href="/admin/page/${info._id}/testimonials" class="small button banner">Testimonials</a>
          <a href="/admin/page/${info._id}/faq" class="small button banner">FAQ</a>
          <a href="/admin/page/${info._id}/footer" class="small button banner">Footer</a>
          </div>
        </td>
        `;
      tbody.append(row);
    }
    table.append(tbody);
  }
}
