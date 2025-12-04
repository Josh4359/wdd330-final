import Deck from "./Deck.mjs";
import KanjiCard from "./KanjiCard.mjs";

export function toCards(elements) {
    let cards = [];
    elements.forEach(element => cards.push(new KanjiCard(element)));
    return cards;
}

export default class KanjiDeck extends Deck {
    constructor() {
        super("kanji");
    }
    load() {
        let load = super.load();
        for (const key in load) {
            const value = load[key];
            load[key] = new KanjiCard(value.element);
        }
        return load;
    }
}