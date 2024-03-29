const POPULARES = [
    {
        id: "01",
        nome: "rosa",
        nomeCien: "rosa",
        nomePopular: "roseira, rosa-arbustiva",
        desc: "As rosas pertencem à família Rosaceae, e ao gênero Rosa L., com mais de 100 espécies, e milhares de variedades, híbridos e cultivares. São arbustos ou trepadeiras, providos de acúleos. As folhas são simples, partidas em 5 ou 7 lóbulos de bordos denteados. As flores, na maioria das vezes, são solitárias. Apresentam originalmente 5 pétalas, muitos estames e um ovário ínfero. Os frutos são pequenos, normalmente vermelhos, algumas vezes comestíveis",
        familia: "Rosaceae",
        especie: "Rosa acicularis Lindl.",
        luzSolar: "4",
        tamanho: "10 - 30cm",
        irrigacao: "2 em 2 dias",
        toleranciaCalor: "22°",
        solo: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Red_rose.jpg/280px-Red_rose.jpg",
        imagemCard: "https://www.floresefolhagens.com.br/wp-content/uploads/2017/01/tipos-de-rosas-1-4.jpg",
    },
    {
        id: "02",
        nome: "girassol",
        nomeCien: "Helianthus annuus",
        nomePopular: "Mirassol",
        desc: "Os girassóis são plantas originárias da América do Norte cultivada pelos povos indígenas para alimentação, foram domesticadas por volta do ano 1 000 a.C. Francisco Pizarro encontrou diversos objetos incas e imagens moldadas em ouro que fazem referência aos girassóis como seu Deus do Sol.",
        familia: "Asteraceae",
        especie: "H. annuus",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
        imagemCard: "https://s2.glbimg.com/fEGESP9MWt53d4dxlrZewiQXceg=/620x480/smart/e.glbimg.com/og/ed/f/original/2019/11/27/decoracao-com-girassol-curiosidades-sobre-o-girassol.jpg",
    },
    {
        id: "03",
        nome: "samambaia",
        nomeCien: "phlebodium decumanum",
        nomePopular: "Calaguala, Guaririnha, Cipó cabeludo, Erva de macaco, Rabo de caxinguelê",
        desc: "As samambaias, ou fetos, são vegetais vasculares membros do táxon das pteridófitas (que deixou de ter validade taxonômica e só é utilizado como uma denominação informal). Elas possuem tecidos vasculares (xilema e floema), folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores. A diversificação das samambaias parece ter ocorrido no Devoniano (há mais de 400 milhões de anos). Elas foram essenciais na ocupação dos ambientes terrestres pelos animais, fornecendo habitat e alimento além de serem importantes na formação do solo rico em nutrientes que viria a propiciar a formação das grandes florestas do carbonífero. Neste período as samambaias e as licófitas eram as principais representantes vegetais do planeta.",
        luzSolar: "Meia sombra",
        tamanho: "30 a 150 centimetros",
        irrigacao: "Regar todo dia em quantidades pequenas pra manter o solo úmido, mas não encharcar",
        toleranciaCalor: "Gostam de clima temperados, suporta calor, mas não suporta frio",
        solo: "Solo ricos em matéria orgânica e que retenha água",
        img: "https://jardim.biz/wp-content/uploads/2021/06/Tipos-de-samambaia.jpg",
        imagemCard: "https://www.cultivando.com.br/wp-content/uploads/2016/02/samambaia1-e1455936471471.jpg",
    },
    {
        id: "04",
        nome: "comigo ninguem pode",
        nomeCien: "Dieffenbachia seguine",
        nomePopular: "Aningapara",
        desc: "É uma planta da família das Araceae muito apreciada como ornamental de interiores, dada a sua tolerância à baixa luminosidade ambiente e baixa umidade relativa do ar. Produz grandes folhas variegadas, com vários tons de verde e amarelo, lustrosas e duradouras, o que o torna muito interessante em decoração de interiores. Em algumas regiões do mundo, a sua popularidade como planta doméstica é acrescida devido à fama que a planta leva de espantar o mau-olhado e maus-espíritos",
        luzSolar: "Meia sombra",
        tamanho: "Pode crescer até 2 metros; ",
        irrigacao: "Regar quando estiver seco",
        toleranciaCalor: "Gosta de calor e não tolera muito bem ao frio",
        solo: "Gosta de um solo com boa drenagem",
        img: "https://http2.mlstatic.com/D_NQ_NP_674470-MLB32141548686_092019-O.jpg",
        imagemCard: "https://projetojardinando.com.br/wp-content/uploads/2020/08/diefenbachia_destaque_1280x720_1-1024x576-1.jpg",
    },
    {
        id: "05",
        nome: "lirio-da-paz",
        nomeCien: "Spathiphyllum wallisii",
        nomePopular: "Bandeira branca, Espatifilo, Bandeira da paz",
        desc: "Esta planta não se adapta muito bem em climas muito frios, abaixo de 15°C no caso. Meia sombra é o ideal para que as flores surjam mais rápido. Estas são em forma de espádice, brancas e com um perfume muito leve. O florescimento acontece o ano inteiro, mais abundante durante a primavera e verão.",
        familia: "Araceae",
        especie: "S. wallisii",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://i0.wp.com/guiadassuculentas.com/wp-content/uploads/2020/12/Lirio-da-Paz-Saiba-Tudo-Sobre-Essa-Planta.jpg?re",
        imagemCard: "https://i1.wp.com/files.agro20.com.br/uploads/2020/02/Lírio-da-paz-2.jpg?fit=1024%2C615&ssl=1",
    },
    {
        id: "06",
        nome: "espada de são jorge",
        nomeCien: "Dracaena trifasciata",
        nomePopular: "Língua de sogra, Rabo de lagarto, Sanseviéria",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus maximus sem, tincidunt porta massa dictum et. Nulla mollis ullamcorper auctor. Sed pellentesque massa et lorem imperdiet ultricies. Donec sodales metus non magna bibendum imperdiet. Fusce vitae commodo odio. In hac habitasse platea dictumst.",
        familia: "Ruscaceae",
        especie: "D. trifasciata",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://cdn.awsli.com.br/600x450/163/163535/produto/157510471/49e186fe38.jpg",
        imagemCard: "https://www.petz.com.br/blog/wp-content/uploads/2021/12/como-plantar-espada-de-sao-jorge3-1280x720.jpg",
    },
    {
        id: "07",
        nome: "hibisco",
        nomeCien: "Hibiscus",
        nomePopular: "Mimô de vênus, Graxa de estudante",
        desc: "Apresenta pétalas de tons vermelhos intensos. Além de elas serem utilizadas na produção de chás e fitoterápicos, por exemplo, seus frutos e caule também podem fazer parte das linhas de produção, tornando a planta um alimento quase todo comestível.",
        familia: "Malvaceae",
        especie: "Hibiscus palustris ",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://meulindojardim.com.br/wp-content/uploads/2020/11/tipos-de-hibisco.jpg",
        imagemCard: "https://ciclovivo.com.br/wp-content/uploads/2018/07/hibisco-soff-garavano-unsplash.jpg",
    },
    {
        id: "08",
        nome: "jiboia",
        nomeCien: "Epipremnum pinnatum",
        nomePopular: "Hera-do-diabo",
        desc: "A planta jiboia é uma ótima opção para decorar a casa. É uma trepadeira com oito espécies diferentes e é muito fácil de cuidar, por isso é a escolha de muitas pessoas que querem dar um toque verde ao espaço",
        familia: "Araceae",
        especie: "Epipremnum",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://a-static.mlcdn.com.br/1500x1500/planta-jiboia-njoy-epipremnum-aureum-njoy-verdadeira-inspira-flora/inspiraflora/420da048c1bd11ecb0d14201ac18506b/a51485aa9d72fa7589bc267e0e41d5cd.jpeg",
        imagemCard: "https://www.simplichique.com.br/wp-content/uploads/2017/02/jiboia-na-decora%C3%A7%C3%A3o-13.jpg",
    },
    {
        id: "09",
        nome: "orquídea",
        nomeCien: "Orchidaceae",
        nomePopular: "Lélia, Laélia",
        desc: "Apresentam muitíssimas e variadas formas, cores e tamanhos e existem em todos os continentes, exceto na Antártida, predominando nas áreas tropicais. Não são plantas parasitas, nutrindo-se apenas de material em decomposição que cai das árvores e acumula-se ao emaranhar-se em suas raízes.",
        familia: "Orchidaceae",
        especie: "Orquídea Olho-de-boneca",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://i0.wp.com/www.comocuidardasorquideas.com/wp-content/uploads/2020/07/orqu%C3%ADdeas-no-inverno-Cymbidium.jpg?fit=1024%2C633&ssl=1",
        imagemCard: "https://tribunadejundiai.com.br/wp-content/uploads/2022/06/orquidea-horta-e-jardim-1-compressed.jpg",
    },
    {
        id: "10",
        nome: "violeta",
        nomeCien: "Viola",
        nomePopular: "Viola, Amores-perfeitos",
        desc: "Esta planta não se adapta muito bem em climas muito frios, abaixo de 15°C no caso. Meia sombra é o ideal para que as flores surjam mais rápido. Estas são em forma de espádice, brancas e com um perfume muito leve. O florescimento acontece o ano inteiro, mais abundante durante a primavera e verão.",
        familia: "Violaceae",
        especie: "Viola odorata",
        luzSolar: "2",
        tamanho: "1 - 3m",
        irrigacao: "3 em 3 dias",
        toleranciaCalor: "25°",
        solo: "",
        img: "https://imagens-revista.vivadecora.com.br/uploads/2019/02/Violetas-no-vaso-pequeno.jpg",
        imagemCard: "https://s2.glbimg.com/kFjJBp34XR1h3oZzbtQqkikV-hI=/780x440/e.glbimg.com/og/ed/f/original/2018/09/25/aubretia-1371599_960_720.jpg",
    },
]
export default POPULARES;