import './Sobre.css';

export const Sobre = ({categoria}) => {
    return (
        <div id={categoria}>
            <div className='resumo'>
                <h2>
                    Sobre mim
                </h2>

                <p>
                    Sou um desenvolvedor web apaixonado por criar experiências digitais envolventes e funcionais. Com uma sólida formação em desenvolvimento front-end, tenho experiência em HTML, CSS, JavaScript e frameworks modernos como React. Adoro transformar ideias em realidade através do código, sempre buscando soluções criativas e eficientes. Estou constantemente aprendendo e me atualizando com as últimas tendências da indústria para oferecer o melhor em cada projeto que realizo.
                </p>
            </div>

            <div className='meusConhecimentos'>
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
}