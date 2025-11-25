import Deck from "./Deck.mjs";

const deck = new Deck();

const e_search = document.querySelector("#search")
e_search.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        search();
});

const e_go = document.querySelector("#go")
e_go.addEventListener("click", search);

const e_list = document.querySelector("#list")
e_list.addEventListener("click", (e) => deck.clicked(e));

let loading = false;

function search() {
    if (loading) return;
    deck.clearCache();
    list.innerHTML = "Loading..."
    loading = true
    const term = e_search.value;
    const url = encodeURIComponent(`https://jisho.org/api/v1/search/words?keyword=${term}`);
    fetch(`https://api.codetabs.com/v1/proxy?quest=${url}`)
        .then(res => res.json())
        .then(results => deck.render(e_list, results.data))
        .catch(() => {
            list.innerHTML = "Error- Please try again."
        })
        .then(() => loading = false);
}
