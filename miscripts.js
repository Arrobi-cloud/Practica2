
function sumar() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1 + n2 + n3;
    document.getElementById("total").value = suma;
}

function obtener_texto1() {
    var a = document.getElementById("sumar").value;
    alert(a)
}

function obtener_texto2() {
    var a = document.getElementById("h2").textContent;
    alert(a)
}

function agregar() {
    document.getElementById("div1").innerHTML = "Hola <input type='text'>";
}

function aumentar() {
    document.getElementById("div1").append("<br> mundo");
}

function eliminar() {
    document.getElementById("div1").remove();
}

function aumentar_HTML() {
    document.getElementById("div1").innerHTML += "HOLAAAAAAAAAAAA";
}

function vaciar() {
    document.getElementById("div1").innerHTML = "";
}

function enviar_formulario() {
    var radio = document.querySelector('input[name="radio"]:checked').value;

    let checkboxes = document.querySelectorAll('input[name="check"]:checked');
    let check_seleccionados = [];

    checkboxes.forEach((checkbox) => {
        check_seleccionados.push(checkbox.value);
    });

    var select = document.getElementById("select").value;

    alert(radio + "\n" + check_seleccionados + "\n" + select);
}

document.getElementById("cambiar_fondo").addEventListener("click", function () {
    document.getElementById("midiv").style.backgroundColor = "green";
});

document.getElementById("cambiar_color").addEventListener("click", function () {
    document.getElementById("midiv").style.color = "white";
});

document.getElementById("borde").addEventListener("click", function () {
    document.getElementById("midiv").style.border = "3px solid black";
});

document.getElementById("negrita").addEventListener("click", function () {
    document.getElementById("midiv").style.fontWeight = "bold";
});

document.getElementById("clase").addEventListener("click", function () {
    document.getElementById("midiv").classList.add("miestilo");
});

document.getElementById("quitar_clase").addEventListener("click", function () {
    document.getElementById("midiv").classList.remove("miestilo");
});

document.querySelector("#asdfg").onclick = () => {
    const nombre = "Ariel";
    alert("Bienvenido " + nombre);
}