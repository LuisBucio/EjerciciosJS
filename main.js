/*alert("hola Mundo");

var nombre = 'Luis';
var apellidos= 'Martínez Bucio';
var edad = '27'

console.log(nombre + apellidos);
console.log('Mi edad es '+ edad + ' años');*/

// Problema de condicionales
/*
var edad = prompt('¿Cual es tu edad?');

if(edad >= 18 && edad <= 29){
    console.log('Fuiste aceptado en el curso de Generation');
}else{
    console.log('No cumples con la edad requerida')
}*/

// Problema de Aritmética
/*
var dato1 = 12;
var dato2 = 15;*/

var dato1 = prompt('Ingresa tu primer número');
var dato2 = prompt('Ingresa el segundo número');

console.log('La suma de tus datos es:' + (dato1 + dato2));
console.log('La resta de tus datos es:' + (dato1 - dato2));
console.log('La multiplicación de tus datos es:' + (dato1 * dato2));
console.log('La división de tus datos es:' + (dato1 / dato2));

console.log(dato1 + dato2);
console.log(dato1 - dato2);
console.log(dato1 * dato2);
console.log(dato1 / dato2);


//Problema de salario
/*
var salario = prompt('Ingresa tu salario por día:');
var diasTrabajados = prompt('¿Cuántos días trabajaste en el mes?');
var isr = 0.30;
var imss = 0.10;
var bruto = salario + diasTrabajados;
var neto = bruto - ((bruto * isr) + (bruto * imss));
var diario = salario - ((salario * isr) + (salario * imss));


console.log('Salario bruto:' + (bruto));
console.log('Salario neto:' + (neto));
console.log('Salario de quincena antes de impuestos:' + (salario * 15));
console.log('Salario de quincena:' + (diario * 15));
console.log('Salario de mensual antes de impuestos:' + (salario * 30));
console.log('Salario del mes:' + (diario * 30)); */