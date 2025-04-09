// Carregar o menu.html dentro do #menu-container
fetch('dropdown.html')
.then(response => response.text())
.then(data => {
    document.getElementById('dropdown-container').innerHTML = data;
});