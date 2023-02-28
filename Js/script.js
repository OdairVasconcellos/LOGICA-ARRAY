function tres() {

    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    let resultado = [a, b, c];
    let resultado2 = [a, c, b];
    let resultado3 = [b, a, c];
    let resultado4 = [b, c, a];
    let resultado5 = [c, a, b];
    let resultado6 = [c, b, a];


    if (a > b && a > c) {
        resultado = resultado
    }
    else if (a > c && c > b) {
        resultado2 = resultado2
    }
    else if (b > a && a > c) {
        resultado3 = resultado3
    }
    else if (b > c && c > a) {
        resultado4 = resultado4
    }
    else if (c > a && a > b) {
        resultado5 = resultado5
    }
    else if (c > b && b > a) {
        resultado6 = resultado6
    }
    else {
    }



    document.getElementById("crescente").innerHTML = resultado;

}

