document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var isPlaying = false;

    // Verifica se a mensagem já foi exibida usando localStorage
    var messageDisplayed = localStorage.getItem("messageDisplayed");
    if (!messageDisplayed) {
        showDialog();
        localStorage.setItem("messageDisplayed", true);
    }

    // Adiciona um listener para a tecla de espaço
    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            toggleAudio();
        }
    });

    // Função para iniciar ou pausar a música
    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }

    // Função para exibir a caixa de diálogo
    function showDialog() {
        alert("Pressione a tecla Espaço para começar a tocar a música ou pausar.");
    }
});