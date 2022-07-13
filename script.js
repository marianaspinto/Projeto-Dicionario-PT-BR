let url = "https://significado.herokuapp.com/v2/";

let inputTxt = document.querySelector('#container_inputtxt');
let btnTxt = document.querySelector('#container_btn');
let result = document.querySelector('#container_result');

btnTxt.addEventListener('click', () => {
    let word = inputTxt.value;
    if (word === '') {
        result.innerHTML = `<p id="container_result">Escreva alguma palavra no campo de busca!!</p>`
    } else {
        fetch(`${url}${word}`)
            .then((resposta) => resposta.json())
            .then((data) => {
                console.log(data)
                result.innerHTML =
                    `<h3 id="container_word">${word}</h3>
                <p id="container_result"><span>1.</span>${data[0].meanings[0]}</p>
                <p id="container_result"><span>2.</span>${data[0].meanings[1]}</p>`
            }).catch(() => {
                result.innerHTML = `<p id="container_result">Não foi possível e ncontrar esta palavra!!</p>`
            })

    }
})