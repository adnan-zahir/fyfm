class MovieCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.img = this.getAttribute("img") || null;
        this.url = this.getAttribute("url") || null;
        this.title = this.getAttribute("title") || null;
        this.date = this.getAttribute("date") || null;
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="${this.url}" class="blank-link">
            <div class="card-thumb">
                <img src="${this.img}" alt="Thumb">
            </div>
            <div class="card-body">
                <div class="card-title">
                    ${this.title}
                </div>
                <div class="card-publish-year">
                    (${this.date})
                </div>
            </div>
        </a>`;
    }
}

customElements.define("movie-card", MovieCard);