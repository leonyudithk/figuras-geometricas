let btnCuadrado = document.getElementById("cuadrado");
let btnRectangulo = document.getElementById("rectangulo");
let btnTriangulo = document.getElementById("triangulo");
let btnRombo = document.getElementById("rombo");
let btnParalelogramo = document.getElementById("paralelogramo");
let btnCirculo = document.getElementById("circulo");
let btnTrapecio = document.getElementById("trapecio");
let solucion = document.getElementById("solucion");

//--------------------Cuadrado----------------------------------//
btnCuadrado.addEventListener('click', (e) => {
    e.preventDefault();
    cuadrado();

})

const cuadrado = () => {
      let lado = prompt('Ingrese lado: ')
       let area = 0
    area = lado*4
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El cuadrado tiene como lado:  ${lado} </h3>
        <h3>Su área es L*4: ${area}</h3>
        <img src="./helpers/cuadrado.jpg" width="40%">

    </div>
</center>
    
    `
}

//--------------------Rectangulo----------------------------------//
btnRectangulo.addEventListener('click', (e) => {
    e.preventDefault();
    rectangulo();

})

const rectangulo = () => {
      let base = prompt('Ingrese base: ')
      let altura = prompt('Ingrese altura: ')
       let area = 0
    area =base*altura
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El rectángulo tiene como base:  ${base} y como altura:  ${altura}</h3>
        <h3>Su área es base x altura: ${area}</h3>
        <img src="./helpers/rectangulo.png" width="40%">

    </div>
</center>
    
    `
}

//--------------------Triangulo----------------------------------//
btnTriangulo.addEventListener('click', (e) => {
    e.preventDefault();
    triangulo();

})

const triangulo = () => {
      let base = prompt('Ingrese base: ')
      let altura = prompt('Ingrese altura: ')
       let area = 0
    area =(base*altura)/2
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El Triángulo tiene como base:  ${base} y como altura:  ${altura}</h3>
        <h3>Su área es (base x altura)/2: ${area}</h3>
        <img src="./helpers/triangulo.png" width="40%">

    </div>
</center>
    
  `
}

//-------------------Paralelogramo----------------------------------//
btnParalelogramo.addEventListener('click', (e) => {
    e.preventDefault();
    paralelogramo();

})

const paralelogramo = () => {
      let base = prompt('Ingrese base: ')
      let altura = prompt('Ingrese altura: ')
       let area = 0
    area =base*altura
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El Paralelogramo tiene como base:  ${base} y como altura:  ${altura}</h3>
        <h3>Su área es base x altura: ${area}</h3>
        <img src="./helpers/paralelogramo.png" width="40%">

    </div>
</center>
    
  `
}


//-------------------Rombo----------------------------------//
btnRombo.addEventListener('click', (e) => {
    e.preventDefault();
    Rombo();

})

const Rombo = () => {
      let base = prompt('Ingrese Diagonal del rombo: ')
      let altura = prompt('Ingrese la segunda diagonal: ')
       let area = 0
    area =(base*altura)/2
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El Rombo tiene como Diagonal Principal:  ${base} y como diagonal:  ${altura}</h3>
        <h3>Su área es base x altura: ${area}</h3>
        <img src="./helpers/rombo.png" width="40%">

    </div>
</center>
    
  `
}

//-------------------Circulo--------------------------------//
btnCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    circulo();

})

const circulo = () => {
      let radio = prompt('Ingrese el radio de la círculo ')
     
       let area = 0
    area = Math.PI*Math.pow(radio, 2)
    console.log(area)
    solucion.innerHTML=`
    <center>
    <div class="figura m-30">  
        <h3>El Círculo tiene radio:  ${radio}</h3>
        <h3>Su área es: ${area}</h3>
        <img src="./helpers/circulo.jpg" width="40%">

    </div>
</center>
    
  `
}