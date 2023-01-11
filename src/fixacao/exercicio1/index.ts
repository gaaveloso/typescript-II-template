//  EXERCÍCIO DE FIXAÇÃO
// 1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//   a. nome, que é uma string;
//   b. idade, que é um número;
//   c. corFavorita, que é uma string.

// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.

// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

type PersonEx1 = {
  name: string;
  age: number;
  favouriteColor: Rainbow;
}

enum Rainbow {
  VERMELHO = "VERMELHO",
  LARANJA = "LARANJA",
  AMARELO = "AMARELO",
  VERDE = "VERDE",
  AZUL = "AZUL",
  ANIL = "ANIL",
  VIOLETA = "VIOLETA"
}

const firstPerson: PersonEx1 = {
  name: "Radagon",
  age: 40,
  favouriteColor: Rainbow.AMARELO
}

const secondPerson: PersonEx1 = {
  name: "Malenia",
  age: 30,
  favouriteColor: Rainbow.AZUL
}

const thirdPerson: PersonEx1 = {
  name: "Miquella",
  age: 25,
  favouriteColor: Rainbow.VERDE
}

console.table(firstPerson)
console.table(secondPerson)
console.table(thirdPerson)