export function GetPreviewButton(inDeck) {
    return inDeck
        ? '<button class="deck-remove">Remove from Deck</button>'
        : '<button class="deck-add">Add to Deck</button>';
}

export default class Card {
    constructor(element) {
        this.element = element;
        this.key = "";
    }

    getPreview(inDeck) { }
    
    getFront() { }
    
    getBack() { }
}