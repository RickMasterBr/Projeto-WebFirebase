import imgPessoa from './assets/pessoa.png'
import iconeGithub from './assets/github.png'
import iconeLinkedin from './assets/linkedin.png'



function App() {

  return (
    <main>
      <section>
      <p>Olá, seja bem-vindo ao meu portfólio</p>

      <p>Meu nome é <span>Richard</span> e eu sou um desenvolverdor Web</p>

      <div className='redesSociais'>
        <a href='#'>
          <img src={iconeGithub}/>
        </a>
        <a href='#'>
          <img src={iconeLinkedin}/>
        </a>
      </div>

      <a href='#sobreMim'>
        <button>
          Conheça mais sobre mim
        </button>
      </a>

      </section>

      <section>
        <img className='imagemDev' src={imgPessoa}/>
      </section>

    </main>
  )
}

export default App
