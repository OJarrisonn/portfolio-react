import { Separator }  from "./Util";
import ContentHome from "./Main/Home";
import ContentAbout from "./Main/About";
import ContentProjects from "./Main/Projects";
import ContentContact from "./Main/Contact";



const sections = [ "home", "about", "projects", "contact" ];

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


export default function Main() {
    let mainContent = [];
  
    sections.forEach(section => {
        mainContent.push(
            <Separator size={4} orientation={'horizontal'}/>
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
