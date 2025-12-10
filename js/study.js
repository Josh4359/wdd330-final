import KanjiDeck from "./KanjiDeck.mjs";
import VocabDeck from "./VocabDeck.mjs";

// d = data
// e = element
// b = button

const b_vocab = document.querySelector("#vocab");
// note- event (9/5)
b_vocab.addEventListener("click", vocabDeck);

const b_kanji = document.querySelector("#kanji");
// note- event (10/5)
b_kanji.addEventListener("click", kanjiDeck);

const e_label = document.querySelector("#label");

function vocabDeck() {
    e_label.textContent = "Vocabulary";
    newDeck(new VocabDeck());
}

function kanjiDeck() {
    e_label.textContent = "Kanji";
    newDeck(new KanjiDeck());
}

const b_show_answer = document.querySelector(".show-answer");
// note- event (11/5)
b_show_answer.addEventListener("click", () => showBack());

const b_good = document.querySelector(".good");
// note- event (12/5)
b_good.addEventListener("click", () => review(true));

const b_bad = document.querySelector(".bad");
// note- event (13/5)
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
    renderFront();
    renderBack();
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

const e_flashcard = document.querySelector(".flashcard-card");

const e_front = document.querySelector(".card.front");

function renderFront() {
    e_front.innerHTML = d_card.getFront();
}

function showFront() {
    e_flashcard.classList.remove("flipped");

    b_show_answer.classList.remove("hide");

    b_good.classList.add("hide");
    b_bad.classList.add("hide");
}

const e_back = document.querySelector(".card.back");

function renderBack() {
    e_back.innerHTML = d_card.getBack();
}

function showBack() {
    e_flashcard.classList.add("flipped");

    b_show_answer.classList.add("hide");

    b_good.classList.remove("hide");
    b_bad.classList.remove("hide");
}

vocabDeck();
