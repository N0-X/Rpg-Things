function openTab(evt, tabName) {
    // Esconde todas as abas
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove o estado 'active' de todos os botões
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba clicada e adiciona o estado 'active' ao botão
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
window.onload = function() {
    document.querySelector(".tablinks").click();
};
