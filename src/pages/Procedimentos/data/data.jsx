const procedimentos = [
  {
    id: 1,
    tratamento: "Aplicação de enzimas",
    descricao: "Aplicação de Enzimas para Gordura Localizada, Celulite, Flacidez, Calvície, Papada e Redução de Apetite. Este tratamento consiste na aplicação de enzimas compostas por proteínas capazes de acelerar reações químicas, ou seja, assim que for aplicada na região ela terá um efeito de acelerar o metabolismo, facilitando a quebra de gordura dentro das células, para depois o organismo eliminar de forma natural.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/enzimas.png",  
  },

  {
    id: 1,
    tratamento: "Bcaa injetavel",
    descricao: "O BCAA injetável é um dos procedimentos mais procurados nas clínicas de estética por quem procura o modelamento corporal. Além disso, pela injeção de BCAA é possível ganhar um bom nível de massa muscular, podendo a quantidade de gordura ser nula. Essa abordagem é ideal para quem deseja melhorar a aparência e entrar em forma de maneira mais rápida, podendo os resultados serem adquiridos em questão de meses ou semanas. Contudo, isso irá depender do desempenho e do nível de atividade física praticada.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/bcaa.png",  
  },

  {
    id: 1,
    tratamento: "Bigode chinês",
    descricao: "Bigode Chinês é uma linha de expressão conhecida como sulco nasogeniano. Ele é um dos sinais do envelhecimento mais comuns depois dos 30 anos, pois é quando a pele começa a perder o colágeno, causando assim a flacidez, além disso essas marcas aparecem devido à perda natural de gordura da região, que se estende desde o fim das narinas até os cantos da boca. Tratamos com o preenchimento, que possui em sua substância o ácido hialurônico e que após a aplicação devolve o volume perdido e melhora a hidratação da região. ",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/bigode.png",  
  },

  {
    id: 1,
    tratamento: "Clareamento da axila",
    descricao: "Tratamento especial que promove  o clareamento epitelial pela sua ação esfoliativa sobre a camada superficial da pele  induzindo o nivelamento e melhorando o aspecto de algumas áreas que  se  tornam escuras, grosseiras  e sem viço.Além de um melhor aspecto  da pele melhoramos o aporte sanguíneo no local tratado,promovemos uma revitalização, além de melhorar a absorção e permeação da pele,que é uma das suas principais funções.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/ClareamentoAxila.png",  
  },

  {
    id: 1,
    tratamento: "Clareamento da virilha",
    descricao: "O surgimento de manchas na virilha é algo relativamente comum, sobretudo entre as mulheres. Processos considerados corriqueiros como a depilação na região ou pernas grossas que atritam entre si ao caminhar podem resultar no escurecimento da área. Acontece que a presença dessas manchas pode causar desde uma pequena vergonha, até um desconforto estético grande, que inibe a pessoa de frequentar um clube ou praia, por exemplo, ou mesmo de se relacionar. ",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/ClareamentoVirilha.png",  
  },
  {
    id: 1,
    tratamento: "Corrente russa",
    descricao: "A Corrente Russa é uma forma de estimulação de ondas elétricas de alta frequência. É realizada através de um equipamento que se utiliza de estímulos elétricos de baixa e média frequência que provocam uma contração muscular, em planos profundos, no local em que ele é aplicado. ",
    resultado: "Em média 02 sessões",
    restricao: "Grávidas e lactantes - Portadores de marca-passo -Próteses metálicas, epilepsia -  Problemas cardíacos - Hipertensão ou hipotensão não controlada - Diabetes descompensadas - Problemas hepáticos e renais - Varizes",    
    image: "./images/procedimentos/CorreteRussa.png",  
  },
  {
    id: 1,
    tratamento: "Design de sobrancelhas",
    descricao: "Design de sobrancelha é realizado com pinça ou linha para harmonizar o contorno, formato e cor dos fios com as proporções faciais, cor da pele, dos olhos e dos cabelos da cliente. A modelagem reforça a identidade ajudando a transmitir maior personalidade. O procedimento é baseado nas técnicas do visagismo e contribui para harmonização facial, realçando o olhar.",
    resultado: "Em média 01 sessão",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/DesignSobrancelha.png",  
  },
  {
    id: 1,
    tratamento: "Detox Bela",
    descricao: "O detox corporal, além de não ser invasivo, é ideal para quem busca eliminar líquidos e toxinas, inchaço e melhorar a saúde vascular, pois atua diretamente no sistema linfático. O procedimento acelera o metabolismo, proporciona relaxamento muscular e melhora a elasticidade da pele.",
    resultado: "Em média 01 sessão",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/DetoxBela.png",  
  },

  {
    id: 1,
    tratamento: "Drenagem linfática ",
    descricao: "Drenagem linfática é uma técnica de massagem manual (DLM) que tem como objetivo estimular o sistema linfático a eliminar o excesso de fluidos do corpo. Apoiada em evidências científicas, a DLM é reconhecida e indicada para auxiliar em vários tratamentos estéticos, além de promover relaxamento e bem-estar.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/DrenagemLimfatica.png",  
  },



  {
    id: 1,
    tratamento: "Fotodepilação ",
    descricao: "É uma maneira de extrair os pelos do corpo por meio da LIP (Luz Intensa Pulsada). O tratamento tem como base a capacidade da melanina de absorver quantidades consideráveis de energia em forma de luz para efetuar a depilação. Esse procedimento adormece o pelo por tempo maior, no entanto, não elimina a raiz. Sendo assim, o resultado tende a ser mais duradouro do que o de outros métodos, como a lâmina de barbear e a cera, por exemplo.",
    resultado: "Em média 01 sessão",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/FotoDepilacao.png",  
  },
  {
    id: 1,
    tratamento: "Hidrolipoclasia",
    descricao: "Procedimento minimamente invasivo, a Hidrolipoclasia Não Aspirativa tem como finalidade a redução das medidas, eliminando, ao mesmo tempo, a gordura localizada. Para isso, recorre-se a uma quebra de tecido adiposo, graças a uma solução (como um soro fisiológico) que é aplicada diretamente na gordura localizada.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/Hidropoclasia.png",  
  },
  {
    id: 1,
    tratamento: "Laser fluence",
    descricao: "O Fluence é um equipamento de fototerapia com a mais alta tecnologia em microcontroladores para tratamentos estéticos e dermatológicos, através da inovadora tecnologia de LEDs e LASER.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/LaserFluence.png",  
  },

  {
    id: 1,
    tratamento: "Limpeza de pele ",
    descricao: "A limpeza de pele é um procedimento estético que tem como objetivo remover cravos e impurezas da pele. É indicada, principalmente, para remoção de cravos abertos (pontos pretos) ou fechados (pontos brancos) e remoção de miliuns. Serve também para remover as células mortas e manter a pele macia e saudável. Todos os tipos de pele recebem muito bem esse procedimento.",
    resultado: "Em média 01 sessão",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/LimpezaDePele.png",  
  },

  {
    id: 1,
    tratamento: "Manta térmica",
    descricao: "Com a manta térmica, a pele passa por um processo de higienização. Com isso, a pele é esfoliada, retirando as camandas de impurezas. Após isso, um gel com enzimas é aplicado para ajudar na quebra de gordura, além de um filme plástico para abafar. Agora, é a hora da manta térmica.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/MantaTermica.png",  
  },
  {
    id: 1,
    tratamento: "Mesoterapia capilar",
    descricao: "O procedimento é feito primeiramente com uma limpeza da região a ser tratada, seguida da aplicação diretamente no couro cabeludo, por meio de uma agulha fina, de substâncias capazes de melhorar a circulação sanguínea da região e estimular o crescimento saudável dos fios.",
    resultado: "Em média 05 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/MesoterapiaCapilar.png",  
  },
  {
    id: 1,
    tratamento: "Microagulhamento ",
    descricao: "O microagulhamento consiste na aplicação de agulhas feitas de aço cirúrgico ou titânio, as quais podem estar dispostas em dermaroller ou em uma caneta. Com elas são realizados movimentos de vai e vem em toda área a ser tratada. Em média, são feitas de 10 a 15 passadas em um mesmo local e com quatro cruzamentos cada.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/MicroAgulhamento.png",  
  },

  {
    id: 1,
    tratamento: "Peeling  ",
    descricao: "O peeling estimula a renovação das células da pele por meio de uma descamação controlada com o uso de substâncias químicas ou de métodos físicos, como a dermoabrasão. O procedimento pode ser utilizado para clarear manchas e cicatrizes de acne, além de atuar no tratamento de rugas e linhas de expressão.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/Peeling.png",  
  },

  {
    id: 1,
    tratamento: "Peim",
    descricao: "(Procedimento Estético injetável em microvasos) é indicado para quem quer se livrar daqueles vasinhos finos mais superficiais que ficam aparente e que podem surgir nas pernas por alguns motivos como idade, passar muito tempo em pé, fatores genéticos, fatores hormonais, gravidez e traumas no local. Nosso tratamento é simples e não cirúrgico, cada sessão dura em média 25 minutos. O procedimento consiste na aplicação de glicose hipertônica. Essa substância seca o vasinho, resultando em cicatrizes que acabam por fazer o seu fechamento e uma vez que é fechado, desaparece e é reabsorvido no tecido local. O resultado é a melhora da aparência estética e de alguns sintomas como dor e inchaço.",
    resultado: "Em média 02 sessões",
    restricao: "Contra indicado para diabéticos",    
    image: "./images/procedimentos/Peim.png",  
  },

  {
    id: 1,
    tratamento: "Preenchimento de olheiras",
    descricao: "O preenchimento de olheiras é realizado com ácido hialurônico, uma substância presente de forma natural no nosso organismo. Este procedimento é praticamente indolor e dura cerca de 30 minutos. Com ele, é possível reduzir o sulco abaixo dos olhos e alcançar um olhar mais descansado..",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/PreenchimentoDeOrelhas.png",  
  },

  {
    id: 1,
    tratamento: "Preenchimento labial ",
    descricao: "O preenchimento labial é um procedimento estético para aperfeiçoar o formato dos lábios. Com a utilização de uma agulha ou de microcânulas, ele pode ser realizado no próprio consultório. A técnica utiliza uma substância absorvível chamada ácido hialurônico, de um tipo específico para a região sensível dos lábios..",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/PreenchimentoLabial.png",  
  },

  {
    id: 1,
    tratamento: "Pump up ",
    descricao: "É um procedimento estético feito com ventosas que exercem uma pressão pulsada nos glúteos, com uma massagem desenvolvida para potencializar os efeitos deste aparelho e um produto exclusivo que aumenta a produção de colágeno da região. O Pump Up ,tem o objetivo de levantar e modelar o bumbum. O tratamento também promove a melhora da celulite e da flacidez. O procedimento é rápido, indolor e apresenta resultado logo após a sessão. Além de tratar todos os itens citados acima, também promove o aumento do fluxo sanguíneo local, favorece a produção de colágeno e acelera o metabolismo local, melhorando também a nutrição muscular da região.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/PumpUp.png",  
  },



  {
    id: 1,
    tratamento: "Rejuvenescimento com light pulse ",
    descricao: "O Light Pulse incorpora as mais recentes tecnologias em IPL e garante maior eficiência, conforto e segurança nos tratamentos estéticos. “A luz pulsada da HTM é muito versátil, porque além de ser uma das técnicas mais indicadas para o tratamento de melanose solar, ela é recomendada também para outros tratamentos estéticos como epilação, acne, rejuvenescimento, rugas e terapia vascular”.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/LightPulse.png",  
  },

  {
    id: 1,
    tratamento: "Radiofrequência",
    descricao: "A radiofrequência é procedimento que utiliza a temperatura para estimular a produção de colágeno e elastina no organismo, podendo ser aplicado tanto na região da face, quanto no corpo. Entre seus objetivos, é possível destacar o combate às rugas, linhas de expressão e a diminuição da flacidez no rosto.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/Radiofrequencia.png",  
  },

  {
    id: 1,
    tratamento: "Retirada de sinais",
    descricao: "O laser é uma ótima opção para quem deseja remover as pintas e verrugas. É realizado com anestesia local, o método então é rápido, eficaz e sem dor. O laser esquenta e vaporiza o tecido com grande precisão. São raras as vezes que formam cicatrizes.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/Retirada.png",  
  },

  {
    id: 1,
    tratamento: "Skinbooster",
    descricao: "O Skinbooster é um procedimento que utiliza o ácido hialurônico nas camadas mais profundas da pele. É aplicado por meio de injeções que estimulam uma profunda hidratação e elasticidade na pele, promovem a produção de colágeno e suavizam linhas e rugas finas.",
    resultado: "Em média 02 sessões",
    restricao: "Sem restrições",    
    image: "./images/procedimentos/Skinbooster.png",  
  },
  
];

export default procedimentos;
