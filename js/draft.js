import KanjiDeck from "./KanjiDeck.mjs";
import VocabDeck from "./VocabDeck.mjs";

// d = data
// e = element
// b = button

const b_vocab = document.querySelector("#vocab");
b_vocab.addEventListener("click", () => newDeck(new VocabDeck()));

const b_kanji = document.querySelector("#kanji");
b_kanji.addEventListener("click", () => newDeck(new KanjiDeck()));

const b_show_answer = document.querySelector(".show-answer");
b_show_answer.addEventListener("click", () => showBack());

const b_good = document.querySelector(".good");
b_good.addEventListener("click", () => review(true));

const b_bad = document.querySelector(".bad");
b_bad.addEventListener("click", () => review(false));

let d_deck;
let d_cards;
let d_card;

function newDeck(deck) {
    d_deck = deck;
    d_cards = Object.values(d_deck.get());
    newCard();
}

function newCard() {
    d_card = d_cards[0];
    showFront();
}

function review(good) {
    d_cards.splice(0, 1);
    if (good)
        d_cards.push(d_card);
    else
        d_cards.splice(1, 0, d_card);

    newCard();
}

const e_card = document.querySelector(".card");

function showFront() {
    e_card.innerHTML = d_card.getFront();

    b_show_answer.classList.remove("hide");

    b_good.classList.add("hide");
    b_bad.classList.add("hide");
}

function showBack() {
    e_card.innerHTML = d_card.getBack();

    b_show_answer.classList.add("hide");

    b_good.classList.remove("hide");
    b_bad.classList.remove("hide");
}

newDeck(new VocabDeck());
