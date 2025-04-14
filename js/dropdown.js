// Carrega o conteúdo de dropdown.html dentro do elemento com id "dropdown-container"
fetch('html/dropdown.html') // Faz uma requisição para obter o arquivo HTML
  .then(response => response.text()) // Converte a resposta em texto
  .then(data => {
    // Insere o conteúdo dentro do container
    document.getElementById('dropdown-container').innerHTML = data;
  });
