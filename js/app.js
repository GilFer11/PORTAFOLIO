const buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    document.querySelectorAll(".evidencia").forEach(card => {

        const contenido =
            card.textContent.toLowerCase();

        card.style.display =
            contenido.includes(texto)
            ? "block"
            : "none";
    });

});

const btnArriba =
document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnArriba.style.display="block";

    }else{

        btnArriba.style.display="none";
    }

});

btnArriba.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"
    });

});