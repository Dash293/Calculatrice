const pad = [...document.querySelectorAll('.btn')];
const allKeyCode = pad.map(btn => btn.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown',(e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
    console.log(valeur);
})

pad.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur);
        console.log(valeur);
    });
});

const calculer = (valeur) => {
    if (allKeyCode.includes(valeur)) {
        switch (valeur){
            case '67' :
                screen.textContent = "";
                break;
            case '13' :
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default :
            const indexKeycode = allKeyCode.indexOf(valeur);
            const btn = pad[indexKeycode];
            screen.textContent += btn.innerHTML;
            
        }
    }
}

window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});


 