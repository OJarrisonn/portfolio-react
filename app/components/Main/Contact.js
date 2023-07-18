import Image from 'next/image'

import content from '../../styles/content.module.css'

let contacts = [
    {
        "name": "OJarrisonn",
        "image": "/imgs/github.png",
        "link": "http://github.com/OJarrisonn"
    }, {
        "name": "@ojarrisonn_",
        "image": "/imgs/instagram.png",
        "link": "https://www.instagram.com/ojarrisonn_/"
    }, {
        "name": "Jorge Harrisonn Mantovanelli Thomes Vieira",
        "image": "/imgs/linkedin.png",
        "link": "https://www.linkedin.com/in/jorge-harrisonn-mantovanelli-thomes-vieira-7a2775200/"
    }, {
        "name": "jorge.harrisonn@usp.br",
        "image": "/imgs/gmail3.png",
        "link": "mailto:jorge.harrisonn@usp.br"
    },
]
  

export default function ContentContact() {
    let contentContact = [];
  
    contacts.map((contact) => {
        contentContact.push(<Contact contact={contact}/>);
    });
  
    return (
        <div className={ content.contacts }>
            { contentContact }
        </div>
    );
}
  
// TODO: Add link
function Contact({ contact }) {
    return (
        <a className={ content.contact } href={ contact.link } target='_blank'>
            <Image src={ contact.image } alt={ contact.name } width={100} height={100} />
            <p>{ contact.name }</p>
        </a>
    );
}
  