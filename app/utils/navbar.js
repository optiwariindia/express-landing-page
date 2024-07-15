export default class Navbar {
    #navitem = [];
    #activeLink = "/";
    constructor(navitems) {
        this.#navitem = navitems;
    }
    set activeLink(link) {
        if (typeof link !== "string") {
            this.#activeLink = "";
            return;
        }
        this.#activeLink = link;
    }
    get sidenav() {
        return JSON.parse(JSON.stringify(this.#navitem)).map((itm) => {
            if (itm.link === this.#activeLink) itm.active = true;
            return itm;
        });
    }
}
