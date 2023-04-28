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


const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.length);
numeros.push(7)
console.log(numeros)
numeros.splice(3,2)
console.log(numeros)
console.log(numeros.length);

