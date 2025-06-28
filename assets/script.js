// Exemplo: mostrar pop-up manualmente com JavaScript (caso não queira usar só CSS)
document.querySelectorAll('.icon-container').forEach(container => {
  const popup = container.querySelector('.popup');

  container.addEventListener('mouseenter', () => {
    popup.style.display = 'block';
  });

  container.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
});

// Você também pode adicionar funções para botões futuramente, por exemplo:
document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('click', () => {
    console.log("Botão clicado:", botao.textContent.trim());
    // aqui você pode redirecionar, abrir modal etc.
  });
});