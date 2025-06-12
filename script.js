document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();  // Impede o comportamento padrão do link (não vai recarregar a página)

    const article = this.closest('.article');  // Encontra o elemento .article mais próximo do botão clicado
    const fullArticle = article.querySelector('.full-article');  // A gaveta (conteúdo completo da notícia)

    // Verifica se a gaveta está visível ou não
    if (fullArticle.style.display === 'none' || fullArticle.style.display === '') {
      fullArticle.style.display = 'block';  // Mostra o conteúdo completo
      this.textContent = 'Leia menos';  // Muda o texto do botão
    } else {
      fullArticle.style.display = 'none';  // Oculta o conteúdo completo
      this.textContent = 'Leia mais';  // Muda o texto do botão novamente
    }
  });