
import Image from 'next/image'

import { Separator } from '../Util';

import content from '/app/styles/content.module.css'

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
        "status": "Lançado",
        "type": "Jogo"
    }, {
        "name": "IC P4",
        "link": "",
        "description": "Projeto de iniciação científica orientado pelo Prof. Daniel Macêdo Batista no IME-USP com objetivo de utilizar a linguagem P4 para criação de switches inteligentes usando Raspberry Pi.",
        "image": "/imgs/p4logo.jpeg",
        "status": "Encerrado",
        "type": "Pesquisa"
    }, {
        "name": "diysh",
        "link": "https://crates.io/crates/diysh",
        "description": "Uma biblioteca para criação de interfaces de texto estilo shell para aplicações em Rust",
        "image": "https://user-images.githubusercontent.com/1149913/62262785-f920bb80-b3e7-11e9-9003-cc21146c4278.png",
        "status": "Lançado",
        "type": "Aplicativo"
    },
];
  
const projectTagClass = {
    "Encerrado": content.tagFinished,
    "Em desenvolvimento": content.tagWip,
    "Lançado": content.tagLaunched,
  
    "Jogo": content.tagGame,
    "Pesquisa": content.tagResearch,
    "Aplicativo": content.tagApp
}

  

export default function ContentProjects() {
    let contentProjects = [];
  
    projects.map(project => {
      contentProjects.push(<Project project={project} />); 
    })
  
    return (
      <div className={ content.projects }>
        { contentProjects }
      </div>
    );
  }
  
// TODO: Add link
function Project({ project }) {
    const imgSize = 500;

    return (
    <a className={ content.project } href={ project.link } target='_blank'>
        <Image src={ project.image } alt={ project.name } width={imgSize} height={imgSize}/>
        
        <>
            <Separator size={1} orientation={'horizontal'} />

            <h2>{ project.name }</h2>
            <p>{ project.description }</p>

            <Separator size={1} orientation={'horizontal'} />

            <div className={ content.tagSet }>
                <p className={ content.tag + ' ' + projectTagClass[project.status] }>{ project.status }</p>
                <p className={ content.tag + ' ' + projectTagClass[project.type] }>{ project.type }</p>
            </div>
        </>
        
    </a>
    );
}