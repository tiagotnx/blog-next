---
title: "Usando Fetch no TypeScript"
excerpt: "O TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript, permitindo que os desenvolvedores detectem erros mais cedo no processo de desenvolvimento e facilitem a manutenção do código. Além disso, o TypeScript permite o uso de recursos mais avançados do JavaScript, como async/await e a biblioteca Fetch, que permite fazer solicitações HTTP de forma assíncrona."
coverImage: "/assets/blog/typescript/typescript.webp"
date: "2023-04-04T05:35:07.322Z"
author:
    name: Tiago
    picture: "/assets/blog/authors/tiago.webp"
ogImage:
    url: "/assets/blog/typescript/typescript.webp"
---

O TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript, permitindo que os desenvolvedores detectem erros mais cedo no processo de desenvolvimento e facilitem a manutenção do código. Além disso, o TypeScript permite o uso de recursos mais avançados do JavaScript, como async/await e a biblioteca Fetch, que permite fazer solicitações HTTP de forma assíncrona.

### O que é o Fetch?

O Fetch é uma API moderna de busca de recursos em rede que fornece uma interface para recuperar recursos de rede usando o protocolo HTTP. Ele é uma alternativa ao antigo XMLHttpRequest (XHR) e oferece uma maneira mais fácil e limpa de buscar dados da rede. O Fetch API é uma API assíncrona, o que significa que a resposta da solicitação é gerenciada de forma assíncrona e você precisa usar uma Promise para acessar os dados.

### Usando Fetch no TypeScript

Com o TypeScript, é possível aproveitar os recursos do Fetch API de maneira mais segura e eficiente. Aqui está um exemplo de como usar o Fetch no TypeScript:

```typescript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

Este código busca os dados de usuários da API JSONPlaceholder e os registra no console. Observe que usamos as Promises para lidar com a resposta da solicitação e capturar quaisquer erros que possam ocorrer.

Para tornar o código ainda mais seguro e eficiente, podemos usar o tipo de retorno da função fetch. A função fetch retorna uma Promise que resolve em um objeto Response, que contém a resposta HTTP completa, incluindo o corpo da resposta. Podemos usar o tipo de retorno da função fetch para garantir que estamos tratando os dados corretamente. Aqui está um exemplo:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data: User[]) => console.log(data))
    .catch((error) => console.error(error));
```

Neste exemplo, definimos uma interface chamada User que descreve a estrutura dos dados que esperamos receber da API. Ao especificar o tipo de retorno da função fetch como User[], garantimos que estamos tratando os dados de forma correta e segura.

Além disso, o TypeScript oferece suporte a recursos avançados do JavaScript, como async/await, que tornam o código ainda mais fácil de entender e manter. Aqui está um exemplo de como usar o Fetch com async/await no TypeScript:

```typescript
async function getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

getUsers()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

Este código usa a palavra-chave async para criar uma função assíncrona que retorna uma Promise de um array de objetos User. Usamos a palavra-chave await para esperar a resposta da solicitação Fetch e o método json() para extrair os dados do corpo da resposta. Finalmente, usamos a palavra-chave await novamente para retornar os dados em um formato seguro e fácil de usar.

### Conclusão

Em resumo, o Fetch API é uma maneira moderna e eficiente de fazer solicitações HTTP em JavaScript e o TypeScript oferece uma maneira ainda mais segura e eficiente de aproveitar esse recurso. Usando o TypeScript, podemos especificar o tipo de retorno da função fetch e garantir que estamos tratando os dados de forma correta e segura. Além disso, o TypeScript suporta recursos avançados do JavaScript, como async/await, que tornam o código ainda mais fácil de entender e manter.

Ao usar o Fetch no TypeScript, é importante lembrar de lidar com as Promises e capturar quaisquer erros que possam ocorrer. Também é uma boa prática definir interfaces para os dados que esperamos receber da API e usar o tipo de retorno da função fetch para garantir que estamos tratando os dados corretamente.

Esperamos que este artigo tenha sido útil para você entender como usar o Fetch no TypeScript. Com essas informações em mãos, você poderá aproveitar melhor os recursos avançados do TypeScript e criar aplicativos mais seguros e eficientes.
