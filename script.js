// Seleciona todas as imagens clicáveis
const images = document.querySelectorAll('.clickable-image');

// Função para criar o efeito de clique
images.forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modalImage.classList.add('image-modal');

        // Adiciona o modal ao corpo do documento
        document.body.appendChild(modalImage);

        // Remove o modal ao clicar na imagem expandida
        modalImage.addEventListener('click', () => {
            modalImage.classList.add('hidden');
            setTimeout(() => modalImage.remove(), 300); // Espera pela transição antes de remover
        });
    });
});
function playVideo(button, videoSrc) {
    // Remover a classe 'clicked' de todos os botões
    const buttons = document.querySelectorAll('.video-button');
    buttons.forEach(btn => btn.classList.remove('clicked'));
  
    // Adicionar a classe 'clicked' ao botão clicado
    button.classList.add('clicked');
  
    // Aqui você coloca o código para iniciar o vídeo
    const videoElement = document.getElementById('video-player'); // Supondo que você tenha um elemento de vídeo com esse ID
    videoElement.src = videoSrc;
    videoElement.play();
  }

  