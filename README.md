# Hogwarts Journeys

Site conceitual de uma agência de viagens temática, criado para estudo de
desenvolvimento front-end. A página apresenta destinos, hospedagens, galeria,
visitantes com as cores das Casas e um formulário demonstrativo de reserva.

> Projeto fictício e sem vínculo oficial com os titulares de Harry Potter ou
> Hogwarts. Valores, depoimentos e informações de viagem são ilustrativos.

## Tecnologias

- HTML5
- CSS3
- JavaScript

O projeto não precisa de instalação de dependências nem de processo de build.

## Como visualizar

1. Clone ou baixe este repositório.
2. Abra `index.html` no navegador.

Também é possível abrir a pasta no Visual Studio Code e iniciar um servidor
local, como a extensão Live Server.

## Imagens

- `imagens/`: fotos dos destinos, suítes e ambientes da galeria.
- `depoimentos/`: retratos dos visitantes associados às Casas.

Os caminhos das imagens usadas nos cards e na galeria estão configurados no
objeto `FOTOS`, no início de `script.js`. Para trocar uma foto, atualize o
caminho correspondente. As imagens da seção de visitantes são referenciadas
diretamente em `index.html`.

## Recursos

- Layout responsivo e tema escuro.
- Menu móvel com suporte à tecla Esc.
- Animações de entrada e efeito parallax, respeitando a preferência por
  movimento reduzido do sistema.
- Formulário com validação nativa do navegador e confirmação demonstrativa.

O formulário não envia dados para um servidor: ele apenas exibe uma mensagem
de confirmação no navegador.
