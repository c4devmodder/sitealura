function exibirDetalhes(id) {
    const detalhes = document.getElementById(id);
    
    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
        detalhes.innerText = "Aqui estão mais informações sobre este projeto. Ele foi desenvolvido utilizando HTML, CSS, e JavaScript.";
    } else {
        detalhes.style.display = "none";
    }
}
