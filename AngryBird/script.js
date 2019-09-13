class Personaje{
constructor(nombre, forma, posicion){
    this.nombre = nombre;
    this.forma = forma; 
    this.posicion = posicion;
}
    obtDetalle(mensaje) {
        alert(mensaje);
    }
}


class Ave extends Personaje{
constructor(nombre,forma,posicion,habilidad,masa){
    super(nombre,forma,posicion);
    this.habilidad = habilidad;
    this.masa = masa;
}

detalle(){
    super.obtDetalle("Detalle de "+this.nombre+ ": \nForma: "+this.forma+"\nPosicion: "+this.posicion+"\nHabilidad: "+this.habilidad+"\nMasa:"+this.masa);
}
volar(){
    console.log("VUELA");
}

}

class Pig extends Personaje{
    constructor(nombre,forma,posicion,fortaleza,puntos){
        super(nombre,forma,posicion);
        this.fortaleza = fortaleza;
        this.puntos = puntos;
    }
    detalle(){
        super.obtDetalle("Detalle de "+this.nombre+ ": \nForma: "+this.forma+"\nPosicion: "+this.posicion+"\nFortaleza: "+this.fortaleza+"\nPuntos:"+this.puntos);
    }
    morir(){
        console.log("MUERE");
    }
    
}

const pig1 = new Pig("Pig 1", "img/pig1.png","pig1",100,150);
const pig2 = new Pig("Pig 2", "img/pig2.png","pig2",100,150);
const pig3 = new Pig("Pig 3", "img/pig3.png","pig3",100,150);

const red = new Ave("Red", "img/red.png", "red","fast",20);
const blue = new Ave("Blue", "img/blue.png", "blue","divide",50);
const yellow = new Ave("Yellow", "img/yellow.png", "yellow","pico",10);


function setImages(){
    var p1 = document.getElementById(pig1.posicion);
    p1.innerHTML = '<img src=' + pig1.forma +' width="90rem">';
    var p2 = document.getElementById(pig2.posicion);
    p2.innerHTML = '<img src=' + pig2.forma +' width="150rem">';
    var p3 = document.getElementById(pig3.posicion);
    p3.innerHTML = '<img src=' + pig3.forma +' width="90rem">';

    var a1 = document.getElementById(red.posicion);
    a1.innerHTML = '<img src=' + red.forma +' width="90rem">';
    var a2 = document.getElementById(blue.posicion);
    a2.innerHTML = '<img src=' + blue.forma +' width="90rem">';
    var a3 = document.getElementById(yellow.posicion);
    a3.innerHTML = '<img src=' + yellow.forma +' width="90rem">';
}
