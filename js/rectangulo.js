function rectangulo(x, y, ancho, alto) {
    const canvas = document.querySelector('#lienzo');
    const ctx = canvas.getContext("2d");
    if (canvas.getContext) {
        ctx.beginPath();
        ctx.fillStyle = '#139A34';
        ctx.fillRect(x, y, ancho, alto);
        ctx.closePath();
    }
}