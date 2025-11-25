export default class Deck {
    constructor() {
        this._deck = this.load();
        this._cache = { };
    }

    get() {
        return this._deck;
    }

    set(value) {
        this._deck = value;
        this.save();
    }

    add(key, value) {
        this._deck[key] = value;
        this.save();
    }

    remove(key) {
        delete this._deck[key];
        this.save();
    }

    find(key) {
        return this._deck[key];
    }

    has(key) {
        return key in this._deck;
    }

    load() {
        let load = localStorage.getItem("deck");
        load = load ? JSON.parse(load) : { }
        console.log(load);
        return load;
    }

    save() {
        localStorage.setItem("deck", JSON.stringify(this._deck));
    }

    clearCache() {
        this._cache = { };
    }

    template(element) {
        const kanji = element.japanese[0].word || element.japanese[0].reading;
        const kana = element.japanese[0].reading;
        const english = element.senses[0].english_definitions.join(", ");
        const button = this.has(element.slug)
            ? '<button class="deck-remove">Remove from Deck</button>'
            : '<button class="deck-add">Add to Deck</button>';

        return `
    <div data-slug="${element.slug}">
        <div>${kanji}</div>
        <div>${kana}</div>
        <div>${english}</div>
        ${button}
    </div>
    `;
    }

    render(container, deck) {
        console.log(Object.keys(deck).length)
        if (Object.keys(deck).length === 0) {
            container.innerHTML = "No cards found!";
            return;
        }
        
        let content = "";
        
        deck.forEach(element => {
            this._cache[element.slug] = element;
            content += this.template(element)
        });

        container.innerHTML = content;
    }

    clicked(e) {
        if (e.target.classList.contains("deck-add")) {
            const parent = e.target.parentElement;
            const slug = parent.dataset.slug;
            const element = this._cache[slug];
            this.add(slug, element);
            parent.outerHTML = this.template(element);
            console.log(this.get());
        }

        if (e.target.classList.contains("deck-remove")) {
            const parent = e.target.parentElement;
            const slug = e.target.parentElement.dataset.slug;
            const element = this.find(slug);
            this.remove(slug);
            parent.outerHTML = this.template(element);
            console.log(this.get());
        }
    }
}
