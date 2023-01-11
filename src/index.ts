/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;

*/

type Person = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "NORMAL",
};

const cliente: Person = {
  id: "1b2b3b3",
  name: "Tião",
  email: "tiao@email.com",
  password: "123",
  role: "NORMAL"
}


// 2. Type Aliases de conta, com as propriedades account e permission: 
//   a. AdminAccount 
//   b. NormalAccount

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

//  PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL;

enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

const novoCliente :Person = {
  id:"1b5345b24b",
  name: "Claudia",
  email: "claudia@email.com",
  password: "claudia123",
  role: Role.ADMIN
}


// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type NormalUser = Person & NormalAccount
type AdminUser = Person & AdminAccount

// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

type UnionTypeToArray = NormalUser | AdminUser
const normalAccountArray : UnionTypeToArray[] = []

// 4. Crie duas pessoas, uma com permissão normal e a outra admin;

const userNormal: NormalUser = {
  id: "n4n2n2",
  name: "Dev",
  email: "dev@gmail.com",
  password: "dev123",
  role: Role.NORMAL,
  account: "Dev TS",
  permission: false
}

const userAdmin: AdminUser = {
  id: "f42v564b",
  name: "Sekiro",
  email: "Sekiro@gmail.com",
  password: "Sekiro321",
  role: Role.ADMIN,
  account: "Sekiro Lobo",
  permission: true
}

const pessoaCliente: Person = {
  id: "xc3v243",
  name: "Malenia",
  email: "Malenia@gmail.com",
  password: "Malenia555",
  role: Role.NORMAL

}
// 5. Guarde essas pessoas no array de usuários.

normalAccountArray.push(userNormal)
normalAccountArray.push(userAdmin)

console.log("Array de usuarios")
console.table(normalAccountArray)