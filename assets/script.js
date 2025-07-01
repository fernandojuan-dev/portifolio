// FADE IN PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.section_container').forEach(section => {
        observer.observe(section);
    });
});

// PROJETO FRASES
function gerarFraseMotivacional(){
    const frasesMotivacionais = [
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "Não espere por oportunidades, crie-as.",
        "Você é mais forte do que imagina e está mais perto do que pensa.",
        "Desafios existem para mostrar do que você é capaz.",
        "A jornada pode ser difícil, mas cada passo te aproxima do seu objetivo.",
        "Não precisa ser perfeito, apenas comece.",
        "A persistência realiza o impossível.",
        "Grandes conquistas começam com a decisão de tentar.",
        "Você não precisa ver a escada inteira, apenas dê o primeiro passo.",
        "Acredite no processo. Cada esforço conta."
    ];
    const numeroAleatorio = [Math.floor(Math.random() * 10)]
    const frase = frasesMotivacionais[numeroAleatorio]
    document.getElementById('frase').innerHTML = frase
}
