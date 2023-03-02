// Prática Guiada - 1
// a) utilizando if aninhado
// const idadeDependente = Number(prompt(`Qual é a idade da pessoa dependente?`))
// if(idadeDependente >= 13) {
//  if(idadeDependente < 18) {
//     console.log(`Cartão de crédito para dependente APROVADO!`)
// } else { 
//     console.log(`MAIOR DE IDADE: Consulte outras opções do Labank.`)
// }
// } else {
//     console.log(`IDADE ABAIXO: Consulte outras opções do Labank.`)
// }


// Relembrando else if
// const estaChovendo = false
// const temPipoca = true

// if (estaChovendo) {
//   console.log('PEGAR ROUPAS NO VARAL')
// } else if (temPipoca) {
//   console.log('Hmm pipoquinha, vou ver um filme')
// } else {
//   console.log('Vou dar uma volta!')
// }

// b) utilizando operador lógico
// if(idadeDependente >= 13 && idadeDependente < 18) {
//   console.log(`Cartão de crédito para dependente APROVADO!`)
// } else {
//   console.log(`Consulte outras opções do Labank.`)
// }

// Prática Guiada - 2
// Verificar se a idade é exatamente 13 anos usando if ternário
// SINTAXE DO TERNÁRIO
// condição ? expressão1 : expressão2

// idadeDependente >= 13 ? console.log(`Já pode ter conta!`) : console.log(`Não pode ter conta, jogue banco imobiliário.`)


// Prática Guiada - 3
// switch case
/*
1 para 'Fácil
2 para 'Black'
3 para 'Platinum'
4 para 'Master Gold'
*/

// const tipoCartao = Number(prompt(`Digite o número correspondente ao tipo de cartão escolhido.`))

// switch(tipoCartao) {
//   case 1:
//     console.log(`Cartão de crédito FÁCIL!`)
//     break
//   case 2:
//     console.log(`Cartão de crédito BLACK!`)
//     break
//   case 3:
//     console.log(`Cartão de crédito PLATINUM!`)
//     break
//   case 4:
//     console.log(`Cartão de crédito MASTER GOLD!`)
//     break
//   default:
//     console.log(`Escolha uma das opções acima.`)
//     break
// }

// switch (nacionalidade) {
//     case 'brasileira':
//     case 'brasileiro':
//         mensagem = `Dale Brasil`
//         break;
// }



// Para Guardar na Cabeça - 1
// a) utilizando if aninhado
const numeroDivisivelDoisETres = Number(prompt(`Digite um número:`))
// if(numeroDivisivelDoisETres % 2 === 0) {
//  if(numeroDivisivelDoisETres % 3 === 0) {
//     console.log(`O número ${numeroDivisivelDoisETres} é divisível por 2 e por 3!`)
// } else { 
//     console.log(`O número ${numeroDivisivelDoisETres} é divisível por 2, mas não é divisível por 3.`)
// }
// } else {
//     console.log(`O número ${numeroDivisivelDoisETres} é divisível por 3, mas não é divisível por 2.`)
// }


// // b) utilizando operador lógico
// if(numeroDivisivelDoisETres % 2 === 0 && numeroDivisivelDoisETres % 3 === 0) {
//   console.log(`O número ${numeroDivisivelDoisETres} é divisível por 2 e por 3!`)
// } else {
//   console.log(`O número ${numeroDivisivelDoisETres} não é divisível por 2 e/ou por 3.`)
// }

// Para Guardar na Cabeça - 2
// if(numeroDivisivelDoisETres % 2 === 0 && numeroDivisivelDoisETres % 3 === 0) {
//   console.log(`O número ${numeroDivisivelDoisETres} é divisível por 2 e por 3!`)
// // verificando se o número é 30 com o ternário
// numeroDivisivelDoisETres === 30 ? console.log(`UFA, PASSEI!`) : console.log(`Não foi dessa vez.`)
// } else {
//   console.log(`O número ${numeroDivisivelDoisETres} não é divisível por 2 e/ou por 3.`)
// }


// Para Guardar na Cabeça - 3
if(numeroDivisivelDoisETres % 2 === 0 && numeroDivisivelDoisETres % 3 === 0) {
    console.log(`O número ${numeroDivisivelDoisETres} é divisível por 2 e por 3!`)
// switch case
/*
Números aceitos divisíveis por 2 e 3 dentro <= 30 e >= 6:
case 6;
case 12;
case 18;
case 24;
case 30;
*/
switch(numeroDivisivelDoisETres) {
  case 6:
    console.log(`6 é meia dúzia.`)
    break
  case 12:
    console.log(`12 é uma dúzia.`)
    break
  case 18:
    console.log(`18 é maioridade penal.`)
    break
  case 24:
    console.log(`24 é o número do veado no jogo do bicho.`)
    break
  case 30:
    console.log(`Trintooou!!!`)
   break
  default:
    console.log(`O número é maior que 30 ou menor que 6!`)
    break
}
} else {
    console.log(`O número ${numeroDivisivelDoisETres} não é divisível por 2 e/ou por 3.`)
  }