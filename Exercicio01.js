/*Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
dinheiro, guarde as respostas separadamente. Com base nas respostas do usuário:
a. Se ele estiver com fome E com dinheiro, exiba uma mensagem
recomendando uma lanchonete.
b. Se não estiver com fome OU não tiver dinheiro, exiba uma mensagem
informando que é melhor ele comer em casa. */

var fome = prompt ("Você esta com Fome?: S ou N")
var dinheiro = prompt ("Você tem Dinheiro?: S ou N")

if (fome == "S" && dinheiro == "S"){
    console.log("Vá para uma lanchonete comer!!!")
}else if (fome == "N" || dinheiro == "N"){
    console.log("É melhor você comer em casa!")
}