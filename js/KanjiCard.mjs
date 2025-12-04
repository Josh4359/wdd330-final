import Card, { GetPreviewButton } from "./Card.mjs";

function previewTemplate(key, onyomi, kunyomi, heisig, meanings, inDeck) {
    const button = GetPreviewButton(inDeck);
    
    return `
<div data-key="${key}">
    <h2>${key}</h2>
    <p>${onyomi}</p>
    <p>${kunyomi}</p>
    <p>${heisig}</p>
    <p>${meanings}</p>
    ${button}
</div>
`;
}

function frontTemplate(kanji) {
    return `
<h2>${kanji}</h2>
`;
}

function backTemplate(kanji, onyomi, kunyomi, heisig, meanings) {
    return `
<h2>${kanji}</h2>
<p>${onyomi}</p>
<p>${kunyomi}</p>
<p>${heisig}</p>
<p>${meanings}</p>
`;
}

export default class VocabCard extends Card {
    constructor(element) {
        super(element);
        this.key = element.kanji;
    }

    getPreview(inDeck) {
        const onyomi = this.element.on_readings;
        const kunyomi = this.element.kun_readings;
        const heisig = this.element.heisig_en;
        const meanings = this.element.meanings;
        
        return previewTemplate(this.key, onyomi, kunyomi, heisig, meanings, inDeck);
    }

    getFront() {
        return frontTemplate(this.key);
    }

    getBack() {
        const onyomi = this.element.on_readings;
        const kunyomi = this.element.kun_readings;
        const heisig = this.element.heisig_en;
        const meanings = this.element.meanings;
        return backTemplate(this.key, onyomi, kunyomi, heisig, meanings);
    }
}