/*
    item template
    {
        "nome": "Coca-Cola", // ! obrigatório
        "preco": "5,00", // ! obrigatório
        "descricao": "Refrigerante de cola", // ! obrigatório
        "tamanho": "2 litros", // ? opcional
        "img": "assets/produtos/img1.png", // ! caminho da imagem
        "tipo": // * carnes | bebidas | vegetais | margarinas | graos | temperos | doces | higiene | frutas | peixes
    }
*/

const itens = [
    {
        "nome": "Picanha",
        "preco": "57,99",
        "descricao": "Picanha Friboi tradicional peça a vácuo kg",
        "tamanho": "peça",
        "img": "assets/produtos/img1.png",
        "tipo": "carne"
    },
    
    {
        "nome": "Fraldinha",
        "preco": "36,99",
        "descricao": "Fraldinha Friboi tradicional peça a vácuo",
        "tamanho": "peça",
        "descricao_longa": "",
        "img": "assets/produtos/img2.png",
        "tipo": "carne"
    },

    {
        "nome": "Contrafilé",
        "preco": "41,99",
        "descricao": "Contrafilé pedaço kg",
        "tamanho": "peça",
        "descricao_longa": "",
        "img": "assets/produtos/img3.png",
        "tipo": "carne"
    },
    {
        "nome": "Paleta de Cordeiro",
        "preco": "45,99",
        "descricao": "paleta de cordeiro Do Chef congelada peça kg",
        "tamanho": "peça",
        "descricao_longa": "Paleta de cordeiro Do Chef congelada peça",
        "img": "assets/produtos/img4.png",
        "tipo": "carne"
    },
    {
        "nome": "Cupim Friboi",
        "preco": "36,99",
        "descricao": "Cupim Friboi pedaço kg",
        "tamanho": "kg",
        "descricao_longa": "",
        "img": "assets/produtos/img5.png",
        "tipo": "carne"
    },
    {
        "nome": "Picanha suina",
        "preco": "26,99",
        "descricao": "picanha suína Pamplona temperada resfriada peça kg",
        "tamanho": "Peça",
        "img": "assets/produtos/img6.png",
        "tipo": "carne"
    },
    
    {
        "nome": "Costela suina",
        "preco": "21,99",
        "descricao": "Costela suina Perdigão a granel",
        "tamanho": "a Granel",
        "img": "assets/produtos/img7.png",
        "tipo": "carne"
    },

    {
        "nome": "Bisteca suína",
        "preco": "17,99",
        "descricao": "Bisteca suina Sadia a granel",
        "tamanho": "a Granel",
        "img": "assets/produtos/img8.png",
        "tipo": "carne"
    },
    {
        "nome": "Coxinha da asa de frango",
        "preco": "14,99",
        "descricao": "Coxinha da asa de frango a granel",
        "tamanho": "a granel",
        "img": "assets/produtos/img9.png",
        "tipo": "carne"
    },
    {
        "nome": "Linguiça Toscana",
        "preco": "16,29",
        "descricao": "Linguiça toscana Seara a granel",
        "tamanho": "a granel",
        "img": "assets/produtos/img10.png",
        "tipo": "carne"
    },
    {
        "nome": "Linguiça calabresa",
        "preco": "18,59",
        "descricao": "Linguiça calabresa defumada Seara granel",
        "tamanho": "a granel",
        "img": "assets/produtos/img11.png",
        "tipo": "carne"
    },
    
    {
        "nome": "Margarina Qualy",
        "preco": "4,99",
        "descricao": "Margarina Qualy tradicional",
        "tamanho": "500g",
        "img": "assets/produtos/img12.png",
        "tipo": "margarinas"
    },

    {
        "nome": "Arroz Branco",
        "preco": "22,98",
        "descricao": "arroz branco blue ville tipo 1,5kg",
        "tamanho": "1,5kg",
        "img": "assets/produtos/img13.png",
        "tipo": "graos"
    },
    {
        "nome": "Azeite de oliva",
        "preco": "19,99",
        "descricao": "Azeite de oliva Gallo clássico extra virgem 500ml",
        "tamanho": "500ml",
        "img": "assets/produtos/img14.png",
        "tipo": "temperos"
    },
    {
        "nome": "Leite condensado",
        "preco": "4,69",
        "descricao": "Leite condensado Moça semisdesnatado TP 395g",
        "tamanho": "395g",
        "img": "assets/produtos/img15.png",
        "tipo": "doces"
    },
    {
        "nome": "Chcolate em tablete",
        "preco": "4,19",
        "descricao": "Chocolate em tablete Lacta sabores 90g",
        "tamanho": "90g",
        "img": "assets/produtos/img16.png",
        "tipo": "doces"
    },
    {
        "nome": "Chocolate Lindt",
        "preco": "19,90",
        "descricao": "Chocolate Lindt Lindor Milk ou Swiss Classic 100g",
        "tamanho": "100g",
        "img": "assets/produtos/img16.png",
        "tipo": "doces"
    },
    {
        "nome": "Refrigerante H2OH!",
        "preco": "4,99",
        "descricao": "Refrigerante H2OH!sabores pet 1,5L",
        "tamanho": "1,5L",
        "img": "assets/produtos/img18.png",
        "tipo": "bebidas"
    },
    {
        "nome": "Cerveja Bohemia",
        "preco": "2,49",
        "descricao": "Cerveja Bohemia puro malte lata 350ml",
        "tamanho": "350ml",
        "img": "assets/produtos/img18.png",
        "tipo": "bebidas"
    },
    {
        "nome": "Vinho Espumante",
    "preco": "29,90",
    "descricao": "Vinho Espumante Salton moscatel branco 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img21.png",
    "tipo": "bebidas"
    },
    {
        "nome": "Vinho Salton",
    "preco": "31,90",
    "descricao": "Vinho Salton Intenso merlot tinto 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img22.png",
    "tipo": "bebidas"
    },
    
    {
        "nome": "Vinho Frisante",
    "preco": "19,90",
    "descricao": "Vinho Frisante Mioranza suave rosé 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img23.png",
    "tipo": "bebidas"
    },

    {
        "nome": "Vinho Frances",
    "preco": "31,90",
    "descricao": "Vinho Frances Bois Mirail Rouge tinto 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img24.png",
    "tipo": "bebidas"
    },
    {
        "nome": "Vinho Chileno",
    "preco": "29,90",
    "descricao": "Vinho Chileno Tres Toros cabernet sauvignon tinto 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img25.png",
    "tipo": "bebidas"
    },
    {
        "nome": "Vinho Português",
    "preco": "30,90",
    "descricao": "Vinho Português Terra Mãe tinto 750 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img26.png",
    "tipo": "bebidas"
    },
    {
        "nome": "Kit enxaguante bucal",
    "preco": "19,69",
    "descricao": "Kit enxaguante bucal Colgate Plax Total 12 500 ml + Plax 250 ml",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img27.png",
    "tipo": "higiene"
    },
    
    {
        "nome": "Kit toalha umedecida",
    "preco": "32,89",
    "descricao": "Kit toalha umedecida Johnson’s c/ 48 unidades Leve 4 Pague 3",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img28.png",
    "tipo": "higiene"
    },

    {
        "nome": "Lava roupas concentrado",
    "preco": "17,90",
    "descricao": "Lava roupas concentrado Ariel fragrâncias 1,2 L",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img29.png",
    "tipo": "higiene"
    },

    {
        "nome": "Limpador Veja Gold",
    "preco": "2,99",
    "descricao": "Limpador Veja Gold multiuso original 500 ml com 10% de desconto",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img30.png",
    "tipo": "higiene"
    },
    
    {
        "nome": "Papel higiênico Neve",
    "preco": "6,99",
    "descricao": "Papel higiênico Neve folha dupla ou tripla 20/30 metros com 4 unidades",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img31.png",
    "tipo": "higiene"
    },

    {
        "nome": "Abobrinha italiana",
    "preco": "1,99",
    "descricao": "Abobrinha italiana kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img32.png",
    "tipo": "vegetais"
    },
    {
        "nome": "Alho Roxo",
    "preco": "2,89",
    "descricao": "Alho Roxo cada 100g",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img33.png",
    "tipo": "vegetais"
    },
    {
        "nome": "Batata doce rosada",
        "preco": "1,99",
        "descricao": "Batata doce rosada kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img34.png",
        "tipo": "vegetais"
    },
    {
        "nome": "Berinjela",
    "preco": "3,89",
    "descricao": "Berinjela kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img35.png",
    "tipo": "vegetais"
    },
    
    {
        "nome": "Cenoura",
    "preco": "2,29",
    "descricao": "Cenoura kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img37.png",
    "tipo": "vegetais"
    },

    {
        "nome": "Mandioquinha",
    "preco": "6,99",
    "descricao": "Mandioquinha kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img42.png",
    "tipo": "vegetais"
    },
    {
        "nome": "Pepino japonês",
    "preco": "2,99",
    "descricao": "Pepino japonês kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img44.png",
    "tipo": "vegetais"
    },
    {
        "nome": "Pimentão verde",
    "preco": "3,79",
    "descricao": "Pimentão verde kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img45.png",
    "tipo": "vegetais"
    },
    {
        "nome": "Tomate carmem",
    "preco": "3,99",
    "descricao": "Tomate carmem kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img46.png",
    "tipo": "vegetais"
    },
    
    {
        "nome": "Tomate Grape Mel Trebeschi",
    "preco": "2,39",
    "descricao": "Tomate Grape Mel Trebeschi 180 g",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img47.png",
    "tipo": "vegetais"
    },

    {
        "nome": "Manga tommy",
    "preco": "3,99",
    "descricao": "Manga tommy kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img57.png",
    "tipo": "frutas"
    },
    {
        "nome": "Maracujá azedo",
    "preco": "5,99",
    "descricao": "Maracujá azedo kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img58.png",
    "tipo": "frutas"
    },
    {
        "nome": "Mexerica ponkan",
    "preco": "2,89",
    "descricao": "Mexerica ponkan kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img59.png",
    "tipo": "frutas"
    },
    {
        "nome": "Pera williams",
    "preco": "7,99",
    "descricao": "Pera williams kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img60.png",
    "tipo": "frutas"
    },
    
    {
        "nome": "Uva branca",
    "preco": "5,99",
    "descricao": "Uva branca bandeja 500 g",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img61.png",
    "tipo": "frutas"
    },

    {
        "nome": "Uva preta",
    "preco": "6,49",
    "descricao": "Uva preta bandeja 500 g",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img62.png",
    "tipo": "frutas"
    },
    {
        "nome": "Abacate",
        "preco": "4,59",
        "descricao": "Abacate kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img49.png",
        "tipo": "frutas"
    },
    {
        "nome": "Caqui Fuyu",
    "preco": "4,99",
    "descricao": "Caqui fuyu kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img50.png",
    "tipo": "frutas"
    },
    {
        "nome": "Goiaba vermelha",
    "preco": "3,99",
    "descricao": "Goiaba vermelha kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img51.png",
    "tipo": "frutas"
    },
    
    {
        "nome": "Laranja Pera",
    "preco": "2,79",
    "descricao": "Laranja pera kg",
    "tamanho": "",
    "descricao_longa": "",
    "img": "assets/produtos/img52.png",
    "tipo": "frutas"
    },

    {
        "nome": "Limão taiti",
        "preco": "1,99",
        "descricao": "Limão taiti kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img3.png",
        "tipo": "frutas"
    },
    {
        "nome": "Maçã Fuji",
        "preco": "4,99",
        "descricao": "Maçã Fuji kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img54.png",
        "tipo": "frutas"
    },
    {
        "nome": "Maçã Senninha",
        "preco": "4,49",
        "descricao": "Maçã Senninha pacote 1kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img55.png",
        "tipo": "frutas"
    },
    {
        "nome": "Mamão",
        "preco": "2,99",
        "descricao": "Mamão papaya unid",
        "tamanho": "",
        "img": "assets/produtos/img56.png",
        "tipo": "frutas"
    },
    
    {
        "nome": "Abacaxi",
        "preco": "5,39",
        "descricao": "Abacaxi pérola unid.",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img48.png",
        "tipo": "frutas"
    },

    {
        "nome": "Tilápia",
        "preco": "17,99",
        "descricao": "Tilápia inteira fresca kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img38.png",
        "tipo": "peixe"
    },
    {
        "nome": "Tambaqui",
        "preco": "21,79",
        "descricao": "Tambaqui de cativeiro inteiro fresco kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img39.png",
        "tipo": "peixe"
    },
    {
        "nome": "Pintado",
        "preco": "28,99",
        "descricao": "Pintado de cativeiro inteiro fresco kg",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img40.png",
        "tipo": "peixes"
    },
    {
        "nome": "Camarão Oceani",
        "preco": "39,99",
        "descricao": "Camarão Oceani descascado cozido congelado 400 g",
        "tamanho": "",
        "descricao_longa": "",
        "img": "assets/produtos/img41.png",
        "tipo": "peixes"
    },
].map(produto => {
    produto.price = Number(produto.preco.replace(',', '.'));
    return produto;
});