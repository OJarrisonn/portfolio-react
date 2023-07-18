import content from '/app/styles/content.module.css'

const homeTexts = {
    "welcome": "Seja bem-vindo ao meu site!",
    "introduction": "Olá, muito prazer. Eu sou o Harrisonn e este site tem como objetivo ser um portifólio onde irei deixar registrados alguns de meus projetos, quem eu sou e conquistas que alcancei.\nO site foi todo criado por mim, fique a vontade para enviar sugestões de melhorias para a página :)"
};
  

export default function ContentHome() {
    return (
        <div className={ content.home }>
            <h1>{ homeTexts["welcome"] }</h1>
            <p>{ homeTexts["introduction"] }</p>
        </div>
    );
}
  