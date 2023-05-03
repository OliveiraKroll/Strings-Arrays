// const nome = prompt ("digite seu nome")
// const cor = prompt ("digite sua cor favoita")
// console.log (`teu nome é ${nome} e sua cor favorita é ${cor}`);

// const nome = prompt("digite seu nome")
// nome.length === 0 ?
// console.log("escreva algo") :
// console.log(`seu nome é ${nome}`);

// const nome ="JOSIAS correa"
// const novoNome = nome.replace("JOSIAS","Drag")
// console.log(novoNome);

// console.log(nome.toLowerCase().includes("josias"));
// console.log(nome.trim());
// console.log(nome.ToLowerCase());
// console.log(nome.trim(). toLowerCase());
// console.log(nome.toUpperCase());

// const frase = prompt("O usuario , escreva uma frase")
// console.log("frase",frase)
// const fraseMaiuscula = frase.toUpperCase()
// console.log("Frase maiuscula: ",fraseMaiuscula);
// const novaFrase = fraseMaiuscula.replace("O","I")
// console.log("Frase alterada: ",novaFrase);
// console.log("O tamanho da fras é: ",novaFrase.length);

// const frutas = ["banana","maça","pera"]

// const valor = Number(prompt("digite um numero"))

// console.log(frutas[valor - 1])




//arrays // são listas que iniciam no indice zero

// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros[0]);


// const dog = ["schnauzer", "pitbull", "pinscher", "são bernardo", "vira raça"]; 
// // const user = prompt ("Digite um numero de zero a quatro")
// // console.log(dog[user])

// const numero = Number (prompt("Insira um numero de 0 a 4"))
// console.log(dog[numero]);

// dog[numero] === undefined ?
// console.log("Você deve informar numeros entre 0 e 4") :
// console.log(dog[numero]);



// const dog = ["schnauzer", "pitbull", "pinscher", "são bernardo", "vira lata"]; 
// console.log(dog.length);
// console.log(dog.includes("vira lata"));

// //length é a quantiadade de itens, lista
// //includes faz uma busca (true ou false)


// dog.push("Outro cachorro qualquer")
// console.log(dog);

// const racadog = prompt("raca de cachorro")
// dog.push(racadog)
// console.log(dog);

// push adiciona no final outro elemento


// //pop retira o ultimo elemento

// const dog = ["schnauzer", "pitbull", "pinscher", "são bernardo", "vira lata"]; 

// // dog.pop()

// //splice retira dentro os elementos

// dog.splice(1,1)
// console.log(dog)


// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros.length);
// numeros.push(7)
// console.log(numeros)
// numeros.splice(3,2)
// console.log(numeros)
// console.log(numeros.length);

//---------------------------------------------------------------------------------------------

//02/05


//Interpretação de código

//1


// let array
// console.log('a. ', array) //undefined

// array = null
// console.log('b. ', array) //null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)  //11

// let i = 0
// console.log('d. ', array[i])  //3

// array[i+1] = 19
// console.log('e. ', array)  // Array(11)
//                               0: 3
//                               1: 19
//                               2: 5
//                               3: 6
//                               4: 7
//                               5: 8
//                               6: 9
//                               7: 10
//                               8: 11
//                               9: 12
//                              10: 13
//                          length: 11
//                 [[Prototype]]: Array(0)


// const valor = array[i+6]
// console.log('f. ', valor) //9

// //2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//toUpperCas - converte para maiusculo
//length - conta letras e espaços
//replaceAll - converte as palavras ou letras solicitadas


//Exercicios de escrita

//1

// const emailDoUsuario = prompt ("digite seu email")
// const nomeDoUsuario = prompt ("digite seu nome")
// console.log (`O e-mail  ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);


//2

// const comidaFavorita = ["sushi", "pizza", "churrasco", "chocolate", "melancia"]; 
// console.log(comidaFavorita) 
// console.log (`Essas são as minhas comidas preferidas: ${comidaFavorita}`)

// const comidaFavoritaUsuario = prompt ("digite uma comida favorita")
// console.log(comidaFavoritaUsuario)

// comidaFavorita[1] = comidaFavoritaUsuario
// console.log(comidaFavorita)

//3

// const listaDeTarefas = []; 
// console.log(listaDeTarefas)

// const Tarefa1 = prompt ("1 tarefa que precisa realizar no seu dia");

// const Tarefa2 = prompt ("2 tarefa que precisa realizar no seu dia");

// const Tarefa3 = prompt ("3 tarefa que precisa realizar no seu dia");

// listaDeTarefas.push(Tarefa1, Tarefa2, Tarefa3)
// console.log(listaDeTarefas)
// const tarefaRealizada = Number(prompt("digite o índice de uma tarefa que já realizou: 1, 2 ou 3"))
// console.log(tarefaRealizada)

// listaDeTarefas.splice(tarefaRealizada -1,1)
// console.log(listaDeTarefas)


const frase = prompt("Digite uma frase")
console.log("frase:, frase);
console.log("frase array: "),frase.split(" "));

