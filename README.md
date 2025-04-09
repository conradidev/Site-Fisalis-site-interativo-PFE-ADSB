<<<<<<< HEAD
# README.md

## Tema do Site

O projeto desenvolvido é um *e-commerce de roupas usadas, com a proposta de um brechó moderno e acessível. O objetivo central é promover a **moda renovável*, encorajando o consumo consciente e a reutilização de peças, com impacto positivo tanto no bolso das consumidoras quanto no meio ambiente. O brechó físico coleta roupas diretamente de clientes, que são então disponibilizadas para venda através da plataforma digital.

A proposta estética e funcional do site gira em torno do conceito de que *as mulheres têm liberdade para se vestir de acordo com o que sentem no momento. Por isso, as coleções do site representam diferentes moods e estilos de vida: desde o conforto do look casual até a sofisticação do corporativo, passando pela leveza da praia ou da natureza no campo. O site foi projetado para ser **mutável*, com flexibilidade para adicionar novas coleções e categorias de produtos conforme a necessidade.

## Estrutura do Site

O site é composto por diferentes páginas, com destaque para a *página inicial (home)*, que reúne os principais elementos da experiência do usuário:

- *Header*: contém a logo (clicável, redirecionando à home) e um menu de navegação com dropdowns, divididos em:
  - *Produtos*: por tipo (Roupas, Bolsas, Sapatos etc.)
  - *Coleções*: por estilo (Casual, Corporativo, Praia, Campo)
  - *Ícone de Carrinho: localizado no canto direito, redireciona para a **página do carrinho de compras*, onde o usuário pode visualizar os itens adicionados.

- *Carrossel (banner)*: apresenta imagens grandes com links que redirecionam para a página de produtos filtrada pela coleção selecionada.

- *Grade de Produtos*: mostra todos os produtos disponíveis. Cada produto possui botões para:
  - *Adicionar ao Carrinho*
  - *Ver Similares* (redireciona para outros produtos da mesma *categoria*, e não da mesma coleção).

- *Vídeo de respiro*: adiciona movimento e reforça a estética da marca.

- *Newsletter*: presente em duas seções, para convidar o usuário a assinar, mas ainda não funcional (não envia dados).

- *Footer*: possui apelo visual, com links e créditos. Embora os botões não estejam ainda ativos, ele já indica o uso de imagens de bancos gratuitos e referência visual da identidade do projeto.

## Página do Carrinho

A página do carrinho exibe os itens adicionados pelo usuário, com suas respectivas *informações e valores. Todos os produtos são **instanciados e manipulados dinamicamente por meio de JavaScript, garantindo que os dados apresentados estejam atualizados com base na interação do usuário. O carrinho **calcula automaticamente o valor total da compra* com base nos produtos adicionados.

## Página de Produtos

A página de produtos tem como função exibir os itens filtrados de acordo com o caminho que o usuário utilizou para chegar até ela:

- Se o usuário acessou por meio do *dropdown de categorias* ou clicou em *"ver similares"* na home, os produtos exibidos são filtrados por *categoria* (por exemplo, todos os sapatos, bolsas ou roupas).
- Se o usuário clicou no *carrossel/banner inicial* ou acessou por meio do dropdown de *coleções, os produtos são filtrados por **coleção* (como Praia, Campo, Corporativo, etc.).

Nessa página também é possível *adicionar produtos ao carrinho*, mas não há a opção de ver similares, pois o foco está na exibição filtrada específica conforme a navegação do usuário.

## Página de Checkout

Após o usuário seguir para a etapa seguinte no carrinho, ele é redirecionado para a *página de checkout, onde deve preencher um **formulário com dados pessoais e informações de entrega. Essa página realiza **validações em JavaScript* para garantir que os campos obrigatórios estejam preenchidos corretamente antes de permitir o envio. Essa etapa é fundamental para simular uma compra real e preparar os dados para a finalização do pedido.

## Página de Pagamento (Pix)

Após o preenchimento do formulário de checkout, o usuário é direcionado para a *página de pagamento, onde é apresentada uma simulação de pagamento via **Pix. O sistema exibe um QR Code fictício apenas para **ilustrar a experiência real de pagamento*.

A página possui um contador regressivo de *1 minuto, inspirado em plataformas reais que expiram o código Pix após determinado tempo. A ideia é didática: **incentivar o clique no botão "Já paguei"* para simular a finalização da compra. Apesar de não haver integração real com sistemas de pagamento, a página cumpre o papel de representar essa etapa da jornada de forma funcional e visualmente coerente com o restante do projeto.

## Página de Sucesso (Finalização)

A última página do site é a *página de sucesso, que confirma ao usuário que a compra foi finalizada com sucesso. Nela, uma mensagem informa que a **nota fiscal será enviada por e-mail* e um *código fictício de rastreio* é exibido para simular o acompanhamento do pedido pelos Correios.

Essa etapa tem como objetivo *aumentar a imersão e o realismo da experiência*, encerrando o fluxo de compra de maneira clara e satisfatória para o usuário.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- *HTML*: estruturação das páginas e componentes do site;
- *CSS*: estilização, responsividade, animações e aparência geral do projeto;
- *JavaScript*: 
  - Manipulação do DOM;
  - Validação de formulários;
  - Filtros e buscas por categoria e coleção;
  - Criação e manipulação dinâmica dos produtos e carrinho de compras;
  - Simulação de fluxo de pagamento e timer;

Embora muitas funcionalidades tenham sido desenvolvidas com base no conteúdo das aulas, *houve ampla pesquisa externa* para implementar efeitos visuais, comportamentos e simulações mais complexas. O aprendizado foi contínuo durante o processo, exigindo entendimento de novas abordagens e soluções para tornar a aplicação funcional e agradável.
=======
# Site-Fisalis-site-interativo-PFE-ADSB
Site interativo, feito para a matéria de desenvolvimento front-end 
>>>>>>> d11015cfdafe2e8d4f663045bf2fe1a619dcf42e
