
import Image from 'next/image'

import { Separator } from '../Util';



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

  

export default function ContentProjects() {
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
  
// TODO: Add link
function Project({ project }) {
    const imgSize = 500;

    return (
    <a className="project" href={ project.link } target='_blank'>
        <Image src={ project.image } alt={ project.name } width={imgSize} height={imgSize}/>
        
        <>
            <Separator size={1} orientation={'horizontal'} />

            <h2>{ project.name }</h2>
            <p>{ project.description }</p>

            <Separator size={1} orientation={'horizontal'} />

            <div className='tag-set'>
                <p className={'tag ' + projectTagClass[project.status] }>{ project.status }</p>
                <p className={'tag ' + projectTagClass[project.type] }>{ project.type }</p>
            </div>
        </>
        
    </a>
    );
}