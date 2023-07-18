'use client'

import { Separator } from "./Util";



const sections = [ "home", "about", "projects", "contact" ];

const menuNames = {
    "home": "Início",
    "about": "Sobre",
    "projects": "Projetos",
    "contact": "Contato"
};
  



export default function Header() {
    return (
      <div className="header">
        <h1>HARRISONN</h1>
        <Separator size={2} orientation={'vertical'}/>
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
  