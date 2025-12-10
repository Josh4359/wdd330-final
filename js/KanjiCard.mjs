import Card, { GetPreviewButton } from "./Card.mjs";

function previewTemplate(key, onyomi, kunyomi, heisig, meanings, inDeck) {
    const button = GetPreviewButton(inDeck);
    
    return `
<div class="card preview" data-key="${key}">
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
        // note- attribute (1/8)
        // note- property (1/3)
        this.key = element.kanji;
    }

    getPreview(inDeck) {
        const key = this.key;
        // note- attribute (2/8)
        // note- property (2/3)
        const onyomi = this.element.on_readings.join("、");
        // note- attribute (3/8)
        // note- property (3/3)
        const kunyomi = this.element.kun_readings.join("、");
        // note- attribute (4/8)
        // note- property (4/3)
        const heisig = this.element.heisig_en;
        // note- attribute (5/8)
        // note- property (5/3)
        const meanings = this.element.meanings.join(", ");
        
        return previewTemplate(key, onyomi, kunyomi, heisig, meanings, inDeck);
    }

    getFront() {
        return frontTemplate(this.key);
    }

    getBack() {
        const key = this.key
        const onyomi = this.element.on_readings.join("、");
        const kunyomi = this.element.kun_readings.join("、");
        const heisig = this.element.heisig_en;
        const meanings = this.element.meanings.join(", ");
        return backTemplate(key, onyomi, kunyomi, heisig, meanings);
    }
}