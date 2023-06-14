//var

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;
//nao eh obrigado declarar a variavel "area" mas eh uma boa pratica declarar var para area 
 if (forma === "quadrado" ){
area = altura * comprimento;
 }else{
    area = (altura * comprimento) /2;
 }

console.log("tamanho da area é ", area);



//diferenã let para var é que a var eu não preciso declarar antes mas let sim 
