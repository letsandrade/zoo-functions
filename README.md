# Zoo Functions 🦁🐘

Hey there! Welcome to my Zoo Functions project. This was the final project of the fundamentals module (the first module out of 4) in the Trybe course. The project focuses on using higher order functions to manipulate data received in JSON format, simulating a Zoo with its animals and employees. 💻

## About the Project

This project involves working with data in JSON format and using various utility functions that perform different operations on the data.

## What You Need to Know

- **Language Used:** JavaScript (ES6+)
- **Project Origin:** This was part of my coursework at Trybe, and my work here was on the development of the functions. 🎓
- **Year Created:** 2021

## How to Use

1. Clone this repository:

   ```sh
    git clone https://github.com/seuusuario/zoo-functions.git
   ```

2. Navigate to the project directory:

   ```sh
    cd zoo-functions
   ```

3. Use the functions by importing them:

   ```js
   const { functionName } = require("./path-to-your-functions-file");
   ```

## Functions Included

Here's a sneak peek at some of the functions you'll find in these files:

- `getOldestFromFirstSpecies(id)`: Returns the oldest animal from the first species managed by the employee with the given ID.

- `isManager(id)`: Checks if the employee with the given ID is a manager.

- `getRelatedEmployees(managerId)`: Returns an array of names of employees managed by the manager with the given ID.

## Example Usage

```js
const data = require("../data/zoo_data");

const {
  getOldestFromFirstSpecies,
  isManager,
  getRelatedEmployees,
} = require("./path-to-your-functions-file");

console.log(getOldestFromFirstSpecies("c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1")); // Example output: ['Bucky', 'male', 4]
console.log(isManager("fdb2543b-5662-46a7-badc-93d960fdc0a8")); // Example output: true
console.log(getRelatedEmployees("fdb2543b-5662-46a7-badc-93d960fdc0a8")); // Example output: ['Burl Bethea', 'Ola Orloff', 'Emery Elser']
```

Feel free to explore the code, use the functions, and improve them!

## Acknowledgements

A big shoutout to Trybe for kickstarting my programming career, the great instructors they have over there, and my fellow students at the time, who always helped out a lot! And thanks to anyone who checks out this project. You rock! 🤘

---

## pt-BR

# Zoo Functions 🦁🐘

Olá! Boas vindas ao meu projeto Zoo Functions. Esse foi o projeto final do módulo de fundamentos (o primeiro de 4) no curso da Trybe. O projeto foca no uso de higher order functions para manipular dados recebidos em formato JSON, simulando um zoologico com seus animais e funcionários. 💻

## Sobre o projeto

Esse projeto envolve o trabalho com dados no formato JSON e uso de várias funções utilitárias para executar diversas operações usando os dados.

## What You Need to Know

- **Language Used:** JavaScript (ES6+)
- **Project Origin:** Esse projeto foi parte do curso da Trybe e meu trabalho aqui foi desenvolver as funções. 🎓
- **Year Created:** 2021

## How to Use

1. Clone o repositório:

   ```sh
    git clone https://github.com/seuusuario/zoo-functions.git
   ```

2. Vá até o diretório do projeto:

   ```sh
    cd zoo-functions
   ```

3. Use as funções importando nos arquivos desejados:

   ```js
   const { functionName } = require("./caminho-do-arquivo");
   ```

## Algumas das Funcões Inclusas

Aqui está uma prévia de algumas das funções que você encontrará nesses arquivos:

- `getOldestFromFirstSpecies(id)`: Retorna o animal mais velho da primeira espécie gerenciada pelo funcionário com o ID fornecido..

- `isManager(id)`: Verifica se o funcionário com o ID fornecido é um gerente.

- `getRelatedEmployees(managerId)`: Retorna um array com os nomes dos funcionários gerenciados pelo gerente com o ID fornecido.

## Exemplo de Uso

```js
const data = require("../data/zoo_data");

const {
  getOldestFromFirstSpecies,
  isManager,
  getRelatedEmployees,
} = require("./caminho-para-seu-arquivo-de-funcoes");

console.log(getOldestFromFirstSpecies("c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1")); // Exemplo de saída: ['Bucky', 'macho', 4]
console.log(isManager("fdb2543b-5662-46a7-badc-93d960fdc0a8")); // Exemplo de saída: true
console.log(getRelatedEmployees("fdb2543b-5662-46a7-badc-93d960fdc0a8")); // Exemplo de saída: ['Burl Bethea', 'Ola Orloff', 'Emery Elser']
```

Sinta-se à vontade para explorar o código, usar as funções e melhorá-las!

## Agradecimentos

Um grande agradecimento à Trybe por iniciar minha carreira de programação, aos excelentes instrutores que eles têm lá, e aos meus colegas de curso na época, que sempre ajudaram bastante! E obrigado a todos que conferirem este projeto. Vocês são demais! 🤘
