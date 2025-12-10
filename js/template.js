function headerTemplate() {
    return `
<header>
    <button class="hamburger" id="hamburger">☰</button>
    <ul class="hide-mobile">
        <li>
            <a href="./index.html">Home</a>
        </li>
        <li>
            <a href="./search.html">Search</a>
        </li>
        <li>
            <a href="./deck.html">Deck</a>
        </li>
        <li>
            <a href="./study.html">Study</a>
        </li>
    </ul>
</header>
`
}

function footerTemplate() {
    return `
<footer>
    <div>
        <p>&copy 2025 Josh</p>
        <p>WWD330 Final Project</p>
    </div>
</footer>    
`
}

const header = headerTemplate();
document.body.insertAdjacentHTML("afterbegin", header);

const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector("header ul");
// note- event (14/5)
hamburger.addEventListener("click", () => {
    if (ul.classList.contains("hide-mobile"))
        ul.classList.remove("hide-mobile");
    else
        ul.classList.add("hide-mobile");
})

const footer = footerTemplate();
document.body.insertAdjacentHTML("beforeend", footer);
