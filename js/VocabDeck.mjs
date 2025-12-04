import Deck from "./Deck.mjs";
import VocabCard from "./VocabCard.mjs";

export function toCards(elements) {
    let cards = [];
    elements.forEach(element => cards.push(new VocabCard(element)));
    return cards;
}

export default class VocabDeck extends Deck {
    constructor() {
        super("vocab");
    }
    load() {
        let load = super.load();
        for (const key in load) {
            const value = load[key];
            load[key] = new VocabCard(value.element);
        }
        return load;
    }
}