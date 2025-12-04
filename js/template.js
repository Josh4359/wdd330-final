function headerTemplate() {
    return `
<header>
<ul>
    <li>
        <a href="./search.html">Search</a>
    </li>
    <li>
        <a href="./deck.html">Deck</a>
    </li>
    <li>
        <a href="./draft.html">Study</a>
    </li>
</ul>
</header>
`
}

function footerTemplate() {
    return `
<footer>
    <p>this is a footer</p>
</footer>    
`
}

const header = headerTemplate();
document.body.insertAdjacentHTML("afterbegin", header);

const footer = footerTemplate();
document.body.insertAdjacentHTML("beforeend", footer);
