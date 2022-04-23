function cuadrado(x, y, alto) {
    const canvas = document.querySelector('#lienzo');
    const ctx = canvas.getContext("2d");
    if (canvas.getContext) {
        ctx.beginPath();
        ctx.fillStyle = '#F12C53';
        ctx.fillRect(x, y, alto, alto);
        ctx.closePath();
    }
}