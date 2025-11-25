const card = document.querySelector(".card");

const show_answer = document.querySelector(".show-answer");

const good = document.querySelector(".good");
const bad = document.querySelector(".bad");

show_answer.addEventListener("click", (e) => {
    show_back();
});

good.addEventListener("click", (e) => {
    show_front();
});

bad.addEventListener("click", (e) => {
    show_front();
});

function show_front() {
    show_answer.classList.remove("hide");

    good.classList.add("hide");
    bad.classList.add("hide");
}

function show_back() {
    show_answer.classList.add("hide");

    good.classList.remove("hide");
    bad.classList.remove("hide");
}

function test() {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://jisho.org/api/v1/search/words?keyword=猫")}`)
        .then(res => res.json())
        .then(data => console.log(JSON.parse(data.contents)));
}

show_front();
test();
