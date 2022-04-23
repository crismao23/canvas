function pentagono(x1, y1, radio, l){
    const canvas = document.querySelector('#lienzo');
    const ctx = canvas.getContext("2d");
    if (canvas && canvas.getContext) {
        ctx.beginPath();
        ctx.fillStyle = "#972CF1";
        // si L == 6 el ángulo es de 2π/6 o sea 60°
        var rad = (2*Math.PI)/l;
        // traslada el contexto en el centro del canvas1 
        // para poder girar el contexto alrededor del centro 
        ctx.translate(canvas.width/2, canvas.height/2);
        //gira el contexto unos 270deg
        ctx.rotate(3*Math.PI/2);
        // dibuja el trazado
        for(i = 0; i < l; i++ ){
            x = x1 + radio * Math.cos( rad*i );
            y = y1 + radio * Math.sin( rad*i );
            ctx.lineTo(x, y);
        }
        ctx.fill();
        ctx.closePath();
    }
};