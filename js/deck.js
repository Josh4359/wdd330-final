import KanjiDeck from "./KanjiDeck.mjs";
import VocabDeck from "./VocabDeck.mjs";

const b_vocab = document.querySelector("#vocab");
b_vocab.addEventListener("click", () => newDeck(new VocabDeck()));

const b_kanji = document.querySelector("#kanji");
b_kanji.addEventListener("click", () => newDeck(new KanjiDeck()));

const e_list = document.querySelector("#list")

let clickEvent;

function newDeck(deck) {
    if (clickEvent)
        e_list.removeEventListener("click", clickEvent);
    clickEvent = (e) => deck.clicked(e);
    e_list.addEventListener("click", clickEvent);

    e_list.innerHTML = deck.render(Object.values(deck.get()));
}

newDeck(new VocabDeck());