export default class Deck {
    constructor(name) {
        this.name = name;
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
        let load = localStorage.getItem(`deck-${this.name}`);
        load = load ? JSON.parse(load) : { };
        return load;
    }

    save() {
        localStorage.setItem(`deck-${this.name}`, JSON.stringify(this._deck));
    }

    clearCache() {
        this._cache = { };
    }

    render(deck) {
        if (Object.keys(deck).length === 0)
            return "No cards found!";
        
        let content = "";
        
        deck.forEach(card => {
            this._cache[card.key] = card;
            content += card.getPreview(this.has(card.key));
        });

        return content;
    }

    clicked(e) {
        if (e.target.classList.contains("deck-add")) {
            const parent = e.target.parentElement;
            const key = parent.dataset.key;
            const card = this._cache[key];
            this.add(key, card);
            parent.outerHTML = card.getPreview(true);
            console.log(this.get());
        }

        if (e.target.classList.contains("deck-remove")) {
            const parent = e.target.parentElement;
            const key = e.target.parentElement.dataset.key;
            const card = this.find(key);
            this.remove(key);
            parent.outerHTML = card.getPreview(false);
            console.log(this.get());
        }
    }
}
