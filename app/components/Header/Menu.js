'use client';

const sections = [ "home", "about", "projects", "contact" ];

const menuNames = {
    "home": "Início",
    "about": "Sobre",
    "projects": "Projetos",
    "contact": "Contato"
};



export function Menu() {
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


export function MenuToggle() {
    return (
        <button className="button-set-toggle">X</button>
    );
}