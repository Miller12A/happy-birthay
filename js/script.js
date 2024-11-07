document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('heart-container');
  const numImages = 110;
  const imagePaths = Array.from({ length: numImages }, (_, i) => `../img/IMG-20241106-WA${(i + 1).toString().padStart(4, '0')}.jpg`);

  imagePaths.forEach((path, index) => {
    const img = document.createElement('img');
    img.src = path;
    img.style.position = 'absolute';
    img.style.opacity = 0;  // Inicialmente invisible
    img.style.transform = 'scale(1)';  // Mantener las imágenes en tamaño normal
    img.style.transition = 'opacity 1s ease-in, transform 1s ease-in';  // Transición suave
    container.appendChild(img);

    // Retraso para que las imágenes aparezcan una tras otra
    setTimeout(() => {
      const x = Math.random() * (window.innerWidth - img.width);  // Posición aleatoria X
      const y = Math.random() * (window.innerHeight - img.height);  // Posición aleatoria Y
      img.style.left = `${x}px`;  // Ubicación en el eje X
      img.style.top = `${y}px`;   // Ubicación en el eje Y
      img.style.opacity = 1;  // Hacerla visible
      img.style.transform = 'scale(1.5)';  // Asegurarse de que esté al tamaño original
    }, index * 450);  // Retraso entre las imágenes (150ms entre cada una)
  });
});
