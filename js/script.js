// Exemplo de script JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio carregado!');
});

// Função para abrir o modal
function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('myModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Fechar o modal quando clicar fora da imagem
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
