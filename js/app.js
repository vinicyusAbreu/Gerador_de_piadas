(function() {
    const texto = document.querySelector("p");
    const btn = document.querySelector('button');
    const url = "https://icanhazdadjoke.com/";
    const header = "application/json";

    btn.addEventListener('click', ajaxPiada)

    function ajaxPiada() {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url)
        ajax.setRequestHeader('Accept', header)
        ajax.send(null)


        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    const json = JSON.parse(ajax.responseText);

                    texto.innerHTML = json['joke'];
                } else {
                    alert('deu ruim')
                }
            }
        }
    }
    ajaxPiada();
})()