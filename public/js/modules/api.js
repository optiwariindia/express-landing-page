export default class API {
  #headers = {
    "Content-Type": "application/json",
  };
  get header() {
    return this.#headers;
  }
  set header(value) {
    this.#headers = { ...this.#headers, ...value };
  }
  constructor() {
    let token = localStorage.getItem("token");
    if (!token) return;
    this.header = {
      Authorization: `Bearer ${token}`,
    };
  }
  async get(endpoint = "/") {
    let response = await fetch(endpoint);
    return await response.json();
  }
  async post(endpoint = "/", data = {}) {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: this.header,
      body: JSON.stringify(data),
    });
    return await response.json();
  }
  async put(endpoint = "/", data = {}) {
    let response = await fetch(endpoint, {
      method: "PUT",
      headers: this.header,
      body: JSON.stringify(data),
    });
    return await response.json();
  }
  async patch(endpoint = "/", data = {}) {}
  async delete(endpoint = "/") {}
}
