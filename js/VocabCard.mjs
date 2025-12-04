import Card, { GetPreviewButton } from "./Card.mjs";

function previewTemplate(key, kanji, kana, english, inDeck) {
    const button = GetPreviewButton(inDeck);
    
    return `
<div data-key="${key}">
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
        this.key = element.slug;
    }

    getPreview(inDeck) {
        const japanese = this.element.japanese[0];
        const sense = this.element.senses[0];

        const kanji = japanese.word || japanese.reading;
        const kana = japanese.reading;
        const english = sense.english_definitions.join(", ");
        
        return previewTemplate(this.key, kanji, kana, english, inDeck);
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