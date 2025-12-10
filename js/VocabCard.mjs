import Card, { GetPreviewButton } from "./Card.mjs";

function previewTemplate(key, kanji, kana, english, inDeck) {
    const button = GetPreviewButton(inDeck);
    
    return `
<div class="card preview" data-key="${key}">
    <h2>${kanji}</h2>
    <p>${kana}</p>
    <p>${english}</p>
    ${button}
</div>
`;
}

function frontTemplate(kanji) {
    return `
<h2>${kanji}</h2>
`;
}

function backTemplate(kanji, kana, english) {
    return `
<h2>${kanji}</h2>
<p>${kana}</p>
<p>${english}</p>
`;
}

export default class VocabCard extends Card {
    constructor(element) {
        super(element);
        // note- attribute (5/8)
        // note- property (5/3)
        this.key = element.slug;
    }

    getPreview(inDeck) {
        const key = this.key;

        // note- attribute (6/8)
        // note- property (6/3)
        const japanese = this.element.japanese[0];
        // note- attribute (7/8)
        // note- property (7/3)
        const sense = this.element.senses[0];

        // note- attribute (8/8)
        // note- property (8/3)
        const kanji = japanese.word || japanese.reading;
        // note- attribute (9/8)
        // note- property (9/3)
        const kana = japanese.reading;

        const english = sense.english_definitions.join(", ");
        
        return previewTemplate(key, kanji, kana, english, inDeck);
    }

    getFront() {
        const japanese = this.element.japanese[0]
        const kanji = japanese.word || japanese.reading;
        return frontTemplate(kanji);
    }

    getBack() {
        const japanese = this.element.japanese[0];
        const sense = this.element.senses[0];

        const kanji = japanese.word || japanese.reading;
        const kana = japanese.reading;
        const english = sense.english_definitions.join(", ");
        return backTemplate(kanji, kana, english);
    }
}