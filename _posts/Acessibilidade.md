---
title: "Como aumentar a acessibilidade de um site na web"
excerpt: "Acessibilidade na web é a criação de um site que seja acessível para todas as pessoas, especialmente usuários com deficiências. Um site acessível permite que cada pessoa possa perceber, entender, navegar, interagir e contribuir para a web, independentemente de suas condições físicas, sensoriais, cognitivas ou neurológicas. A acessibilidade na web é uma questão de ética, inclusão, oportunidade e também de cumprimento da legislação."
coverImage: "/assets/blog/acessibilidade/acessibilidade.webp"
date: "2023-04-25"
author:
    name: Tiago
    picture: "/assets/blog/authors/tiago.webp"
ogImage:
    url: "/assets/blog/acessibilidade/acessibilidade.webp"
---

Acessibilidade na web é a criação de um site que seja acessível para todas as pessoas, especialmente usuários com deficiências. Um site acessível permite que cada pessoa possa perceber, entender, navegar, interagir e contribuir para a web, independentemente de suas condições físicas, sensoriais, cognitivas ou neurológicas. A acessibilidade na web é uma questão de ética, inclusão, oportunidade e também de cumprimento da legislação.

Neste post, vamos apresentar algumas dicas de como aumentar a acessibilidade de um site na web, seguindo as recomendações do World Wide Web Consortium (W3C), um consórcio internacional que desenvolve padrões para a web.

1 - Faça descrição alternativa das imagens, pois assim os leitores de tela poderão identificá-las e descrevê-las para os usuários cegos. Use o atributo alt nas tags img e seja claro e conciso na descrição. Por exemplo:

```html
<img src="logo.png" alt="Logo da empresa X" />
```

2 - Não use apenas cores para destacar uma informação. Algumas pessoas podem ter dificuldades para distinguir certas cores ou podem usar dispositivos que não reproduzem as cores adequadamente. Por isso, use também outros elementos visuais, como ícones, formas ou textos, para complementar o uso das cores. Por exemplo: use um asterisco vermelho e uma nota explicativa para indicar um campo obrigatório em um formulário.

3 - Simplifique seu texto. Use palavras simples e frases curtas. Evite jargões, siglas e abreviações sem explicação. Organize seu texto em parágrafos, listas e subtítulos. Use uma fonte legível e um tamanho adequado. Isso facilita a compreensão do conteúdo por pessoas com deficiências intelectuais ou cognitivas, bem como por pessoas que não dominam o idioma do site.

4 - Crie áreas de clique maiores nos botões, isso ajudará usuários que não têm precisão nos cliques a acessar conteúdos específicos. Além disso, use labels claros e consistentes nos botões, indicando qual é a ação esperada. Por exemplo: use "Enviar" em vez de "OK" em um botão de envio de formulário.

5 - Coloque um link para saltar os menus e ir diretamente para os conteúdos. Isso permite que os usuários que usam teclado ou leitores de tela possam navegar mais rapidamente pelo site, sem ter que passar por todos os itens do menu a cada página. No HTML basta colocar um link no topo da página (logo após o `<body>`). Por exemplo:

```html
<a href="#conteudo">Ir para o conteúdo</a>
```

6 - Use legendas nos vídeos e áudios. Isso permite que os usuários surdos ou com deficiência auditiva possam acompanhar o conteúdo multimídia do site. As legendas devem ser sincronizadas com o áudio e conter informações relevantes sobre o contexto sonoro, como música, ruídos ou emoções. Você pode usar ferramentas online para gerar legendas automaticamente ou manualmente.

Essas são apenas algumas dicas de como aumentar a acessibilidade de um site na web. Existem muitas outras técnicas e ferramentas que podem ser usadas para tornar seu site mais inclusivo e universal. Para saber mais sobre o assunto, consulte os recursos do W3C sobre acessibilidade na web: https://www.w3.org/WAI/

[Imagem de storyset no Freepik](https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-estrutura-de-conteudo_13246584.htm#query=acessibilidade%20na%20web&position=0&from_view=search&track=robertav1_2_sidr)
