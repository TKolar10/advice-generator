function _fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            console.log(response);
            if (!response.ok)
                throw new Error(`Shomething goes wrong -> ${response.status}`);
            return response.json();
        })
        .then(_getAdvice)
        .catch((error) => console.log("error" + error));
}

function _getAdvice(parametar) {
    document.querySelector(
        ".card__title"
    ).innerHTML = `ADVICE #${parametar.slip.id}`;
    document.querySelector(
        ".card__content"
    ).innerHTML = `"${parametar.slip.advice}"`;
}

document.querySelector(".card__button").addEventListener("click", _fetchAdvice);

_fetchAdvice();