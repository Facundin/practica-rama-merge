// esto agrega a la pantalla el valor del boton de la calculadora  que toquemos 
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
// esto borra en pantalla con el boton "c"
function borrar(){
    document.getElementById('pantalla').value = ''
}
// aqui lo que hace es calcular 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado 
}