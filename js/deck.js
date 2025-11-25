import Deck from "./Deck.mjs";

const deck = new Deck();

const e_list = document.querySelector("#list")
e_list.addEventListener("click", (e) => deck.clicked(e));

deck.render(e_list, Object.values(deck.get()));