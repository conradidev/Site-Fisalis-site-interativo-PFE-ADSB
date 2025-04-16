

const produtos = [
    {
      id: 1,
      nome: "Conjunto Clássico Creme",
      preco: 130.99,
      imagem: "/imagens/conjuntoCreme.jpg",
      categoria: "roupa",
      colecao: "casual"
    },
    {
      id: 2,
      nome: "T-shirt Solta Verde",
      preco: 89.90,
      imagem: "/imagens/tshirtVerde.jpg",
      categoria: "roupa",
      colecao: "casual"
    },
    {
      id: 3,
      nome: "Calça Branca Linho",
      preco: 160.90,
      imagem: "/imagens/calcaLinho.jpg",
      categoria: "roupa",
      colecao: "praia"
    },
    {
      id: 4,
      nome: "Macacão Elegante",
      preco: 180.90,
      imagem: "/imagens/macacaElegante.jpg",
      categoria: "roupa",
      colecao: "campo"
    },
    {
      id: 5,
      nome: "Calça Branca Algodão",
      preco: 150.99,
      imagem: "/imagens/calcaAlgodao.jpg",
      categoria: "roupa",
      colecao: "corporativo"
    },
    {
      id: 6,
      nome: "Vestido Moda Praia",
      preco: 110.99,
      imagem: "/imagens/vestidoPraia.jpg",
      categoria: "roupa",
      colecao: "praia"
    },
    {
      id: 7,
      nome: "Vestido Princesa Campo",
      preco: 189.99,
      imagem: "/imagens/vestidoCampo.jpg",
      categoria: "roupa",
      colecao: "campo"
    },
    {
      id: 8,
      nome: "Conjunto AllBlack",
      preco: 259.99,
      imagem: "/imagens/roupa1.jpg",
      categoria: "roupa",
      colecao: "corporativo"
    },
    {
      id: 9,
      nome: "Bolsa Vermelho Púrpura",
      preco: 40.99,
      imagem: "/imagens/bolsa1.jpg",
      categoria: "bolsa",
      colecao: "corporativo"
    },
    {
      id: 10,
      nome: "Bolsa Branca Pura",
      preco: 50.99,
      imagem: "/imagens/bolsa2.jpg",
      categoria: "bolsa",
      colecao: "campo"
    },
    {
      id: 11,
      nome: "Bolsa Versátil Marrom",
      preco: 80.99,
      imagem: "/imagens/bolsa3.jpg",
      categoria: "bolsa",
      colecao: "corporativo"
    },
    {
      id: 12,
      nome: "Bolsa Charme",
      preco: 30.99,
      imagem: "/imagens/bolsa4.jpg",
      categoria: "bolsa",
      colecao: "campo"
    },
    {
      id: 13,
      nome: "Bolsa Tricot",
      preco: 50.99,
      imagem: "/imagens/bolsa5.jpg",
      categoria: "bolsa",
      colecao: "praia"
    },
    {
      id: 14,
      nome: "Bolsa Mar",
      preco: 69.99,
      imagem: "/imagens/bolsa6.jpg",
      categoria: "bolsa",
      colecao: "praia"
    },
    {
      id: 15,
      nome: "Bolsa Prática Creme",
      preco: 49.99,
      imagem: "/imagens/bolsa7.jpg",
      categoria: "bolsa",
      colecao: "casual"
    },
    {
      id: 16,
      nome: "Mochila Azul Bebe",
      preco: 39.99,
      imagem: "/imagens/bolsa8.jpg",
      categoria: "bolsa",
      colecao: "casual"
    },
    {
      id: 17,
      nome: "Sandália Cinderela Branca",
      preco: 29.99,
      imagem: "/imagens/sapato1.jpg",
      categoria: "calçado",
      colecao: "praia"
    },
    {
      id: 18,
      nome: "Salto Médio Elegante",
      preco: 35.99,
      imagem: "/imagens/sapato2.jpg",
      categoria: "calçado",
      colecao: "praia"
    },
    {
      id: 19,
      nome: "Tênis Delicado Branco",
      preco: 49.99,
      imagem: "/imagens/sapato3.jpg",
      categoria: "calçado",
      colecao: "campo"
    },
    {
      id: 20,
      nome: "Tênis básico Creme",
      preco: 39.99,
      imagem: "/imagens/sapato4.jpg",
      categoria: "calçado",
      colecao: "campo"
    },
    {
      id:21,
      nome: "Tênis Conforto Dia a Dia",
      preco: 65.99,
      imagem: "/imagens/sapato5.jpg",
      categoria: "calçado",
      colecao: "casual"
    },
    {
      id: 22,
      nome: "Tênis Fem Delicado",
      preco: 65.99,
      imagem: "/imagens/sapato6.jpg",
      categoria: "calçado",
      colecao: "casual"
    },
    {
      id:23,
      nome: "Salto Bico Fino Branco",
      preco: 59.99,
      imagem: "/imagens/sapato7.jpg",
      categoria: "calçado",
      colecao: "corporativo"
    },
    {
      id: 24,
      nome: "Salto Bico Fino Branco Nude",
      preco: 59.99,
      imagem: "/imagens/sapato8.jpg",
      categoria: "calçado",
      colecao: "corporativo"
    },
    {
      id: 25,
      nome: "Brinco Flores Douradas",
      preco: 15.99,
      imagem: "/imagens/brinco1.jpg",
      categoria: "brinco",
      colecao: "corporativo"
    },
    {
      id: 26,
      nome: "Argola Dourada",
      preco: 14.99,
      imagem: "/imagens/brinco2.jpg",
      categoria: "brinco",
      colecao: "corporativo"
    },
    {
      id: 27,
      nome: "Brinco concha",
      preco: 10.99,
      imagem: "/imagens/brinco3.jpg",
      categoria: "brinco",
      colecao: "praia"
    },
    {
      id: 28,
      nome: "Brinco Argola Mar",
      preco: 16.99,
      imagem: "/imagens/brinco4.jpg",
      categoria: "brinco",
      colecao: "praia"
    },
    {
      id: 29,
      nome: "Brinco Floral",
      preco: 10.99,
      imagem: "/imagens/brinco5.jpg",
      categoria: "brinco",
      colecao: "campo"
    },
    {
      id: 30,
      nome: "Brinco Mini Flor",
      preco: 10.99,
      imagem: "/imagens/brinco6.jpg",
      categoria: "brinco",
      colecao: "campo"
    },
    {
      id: 31,
      nome: "Dois pares Argolas",
      preco: 20.99,
      imagem: "/imagens/brinco7.jpg",
      categoria: "brincos",
      colecao: "casual"
    },
    {
      id: 32,
      nome: "Brinco Triangular Dourado",
      preco: 20.99,
      imagem: "/imagens/brinco8.jpg",
      categoria: "brinco",
      colecao: "casual"
    }
  ];

  