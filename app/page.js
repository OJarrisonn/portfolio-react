'use client';
import Image from 'next/image'

const sections = [ "home", "about", "projects", "contact" ];

const menuNames = {
  "home": "Início",
  "about": "Sobre",
  "projects": "Projetos",
  "contact": "Contato"
};

const sectionsTitle = {
  "home": "",
  "about": "Quem sou eu?",
  "projects": "Projetos",
  "contact": "Contato"
};

const sectionsContent = {
  "home": <ContentHome />,
  "about": <ContentAbout />,
  "projects": <ContentProjects />,
  "contact": <ContentContact />
};

const homeTexts = {
  "welcome": "Seja bem-vindo ao meu site!",
  "introduction": "Olá, muito prazer. Eu sou o Harrisonn e este site tem como objetivo ser um portifólio onde irei deixar registrados alguns de meus projetos, quem eu sou e conquistas que alcancei.\nO site foi todo criado por mim, fique a vontade para enviar sugestões de melhorias para a página :)"
};

const projects = [
  {
    "name": "The Spaceship",
    "link": "https://gamejolt.com/games/the_spaceship/461761",
    "description": "The Spaceship é um shooter 2D onde você controla uma pequena espaço-nave em meio a um perigoso cinturão de asteroides. Cuidado com os aliens!",
    "image": "https://m.gjcdn.net/game-screenshot/1500/2734889-ll-ruqvpxky-v4.webp",
    "status": "Encerrado",
    "type": "Jogo"
  }, {
    "name": "Nether Extra Update",
    "link": "https://www.curseforge.com/minecraft/mc-mods/nether-extra-update",
    "description": "Nether EU é um mod de Minecraft lançado para aprimorar a atualização 1.16 do jogo, conhecida como Nether Update.",
    "image": "/imgs/nethereu.png",
    "status": "Encerrado",
    "type": "Jogo"
  }, {
    "name": "IC P4",
    "link": "",
    "description": "Projeto de iniciação científica orientado pelo Prof. Daniel Macêdo Batista no IME-USP com objetivo de utilizar a linguagem P4 para criação de switches inteligentes usando Raspberry Pi.",
    "image": "/imgs/p4logo.jpeg",
    "status": "Em desenvolvimento",
    "type": "Pesquisa"
  },
];

const projectTagClass = {
  "Encerrado": "tag-finished",
  "Em desenvolvimento": "tag-wip",
  "Lançado": "tag-launched",

  "Jogo": "tag-game",
  "Pesquisa": "tag-research",
  "Aplicativo": "tag-app"
}

const aboutTexts = {
  "sections": 3,
  "titles": ["Minhas Origens", "Como Conheci a Computação?", "Meu Futuro"],
  "texts": [
    "Eu me chamo Jorge Harrisonn Mantovanelli Thomes Vieira, sou originário do norte do Espírito Santo e fui criado no interior da cidade de Jaguaré-ES pelos meus avós. Por que fui criado pelos meus avós? Pois sou órfão de pai e mãe, então eles me criaram no interior.\nPor morar no interior, eu cresci um pouco isolado de outras pessoas e com isso, eu passava muito tempo com meus brinquedos e investigando tudo que podia para saber o porquê e o como. Aprender era um dos meus passatempos favoritos.\nEu nunca estava satisfeito com meus brinquedos, eu sempre queria inventar os meus próprios brinquedos. Tinha vários carrinhos, mas eu adorava montar carrinhos de papel. Até que um dia, meus avós resolveram correr atrás de instalar internet e comprar um notebook. Inicialmente eu não gostava de mexer no notebook, pois eu tinha medo de estragar ele, mas com o tempo o medo passou e ali se abriu uma nova janela para eu continuar pesquisando e explorando o incrivel mundo da internet (através de um modem bastante ruim).",
    "Em um dado momento, eu quis descobrir um novo como. Como eram feitos os jogos? Foi aí que eu descobri a programação. Caí em um vídeo do YouTube que ensinava a criar um clone do jogo do dinossauro do Chrome. Tenho esse jogo salvo até hoje. É um jogo bastante simples, com sprites muito mal feitas (eu tinha 12 anos e estava desenhando usando o touchpad do meu notebook), mas era o meu próprio jogo. Eu fiquei encantado com aquilo, embora nenhuma das pessoas para quem eu mostrei o jogo se pareceu muito impressionada. Mas foi aí que eu escolhi a Ciência da Computação como meu futuro.\nMeus anos seguintes foram basicamente desbravando esse mundo da programação para entender como outras coisas eram feitas. Aprendi mais sobre jogos, sobre sites, sobre hardware, sobre mods para Minecraft (meu jogo favorito), mas nunca conseguia me organizar para criar e terminar projetos.\nAté que eu entrei no Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo, também conhecido como IFES. Lá fiz um curso técnico em Automação Industrial integrado ao meu ensino médio. Tive professores que estavam mais ligados à área da computação e por influência de amigos e professores tentei a FUVEST e consegui entrar para a Universidade de São Paulo para fazer o tão sonhado curso de Ciência da Computação.",
    "Agora na USP eu comecei a me aprofundar de fato em campos mais específicos da computação, como sistemas, redes de computadores, desenvolvimento Web e Linux. Meus objetivos para depois da faculdade envolvem trabalhar como desenvolvedor. Eu me sinto feliz criando coisas e é isso que eu quero fazer."
  ]
}

// Main component ==============================================================================================================================
export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

// Header components -----------------------------------------------------------------------------

function Header() {
  return (
    <div className="header">
      <h1>HARRISONN</h1>
      <MenuToggle />
      <Menu />
    </div>
  );
}

function Menu() {
  let buttons = [];
  
  sections.forEach(anchor => {
    buttons.push(
      <MenuButton text={ menuNames[anchor] } anchor={ anchor } />
      );
    });
    
  return (
    <div className="button-set"> { buttons } </div>
  );
}
    
function MenuButton({ text, anchor }) {
  return (
        <button onClick={() => { location.href="#" + anchor; } }>
      { text }
    </button>
  );
}

function MenuToggle() {
  return (
    <button className="button-set-toggle">X</button>
    );
}

// Main components -------------------------------------------------------------------------------
  
function Main() {
  let mainContent = [];

  sections.forEach(section => {
    mainContent.push(
      <Separator height={4}/>
    );
    mainContent.push(
      <Section id={section} content={sectionsContent[section]} />
    );
  });
  
  return (
    <>
      { mainContent }
    </>
  );
}

function Section({ id, content }) {
  const titleComponent = sectionsTitle[id] 
    ? <h1 className="section-title">{ sectionsTitle[id] }</h1> 
    : <></>;
  
  return (
    <section id={ id }>
      { titleComponent }

      <div className="section-content">
        { content }
      </div>
    </section>
  );
}

function ContentHome() {
  return (
    <div className="content-home">
      <h1>{ homeTexts["welcome"] }</h1>
      <p>{ homeTexts["introduction"] }</p>
    </div>
  );
}

function ContentAbout() {
  let contentAbout = [];

  for (let i = 0; i < aboutTexts["sections"]; i++) {
    contentAbout.push(
      <h2>{ aboutTexts["titles"][i] }</h2>
    );
    contentAbout.push(
      <p>{ aboutTexts["texts"][i] }</p>
    );

    if (i < aboutTexts["sections"] + 1) 
      contentAbout.push(
        <Separator height={1}/>
      );
  }

  return (
    <div className="content-about">
      {contentAbout}
    </div>
  );
}

function ContentProjects() {
  let contentProjects = [];

  projects.map(project => {
    contentProjects.push(<Project project={project} />); 
  })

  return (
    <div className="content-projects">
      { contentProjects }
    </div>
  );
}

function Project({ project }) {
  const imgSize = 200;

  return (
    <div className="project" onClick={ {} }>
      <Image src={ project.image } alt={ project.name } width={imgSize} height={imgSize}/>
      <>
        <Separator height={1} />

        <h2>{ project.name }</h2>
        <p>{ project.description }</p>

        <Separator height={1} />

        <div className='tag-set'>
          <p className={'tag ' + projectTagClass[project.status] }>{ project.status }</p>
          <p className={'tag ' + projectTagClass[project.type] }>{ project.type }</p>
        </div>
      </>
      
    </div>
  );
}

function ContentContact() {
  return (
    <p>Content Contact</p>
  );
}

// Separator ===========================================================================================================================================

function Separator({ height }) {
  return <div style={{marginTop: height + "em"}}></div>
}