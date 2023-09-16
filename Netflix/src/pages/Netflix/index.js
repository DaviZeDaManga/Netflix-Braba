import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Netflix () {
    const [filme, setFilme] = useState ("")
    const [filmes, setFilmes] = useState ([])

    const [mostNada, setMostNada] = useState (true)
    const [mostPPagina, setMostPPagina] = useState (false)

    const [vpagina, setVpagina] = useState (1)

    function RecarregarPagiga () {
        window.location.reload()
    }

    async function BuscarFilmes() {
        let url = 'https://www.omdbapi.com?apikey=7dae2eff&s=' + filme 

        Response = await axios.get(url)
        setFilmes(Response.data.Search)
        setMostNada(false)
        setMostPPagina(true)
    }

    function handleKeyPress(event) {
        console.log(event.key);
        if (event.key === "Enter") {
          event.preventDefault();
        }
    }

    function ProximaPagina () {
        setVpagina(vpagina + 1)
    }

    function VoltarPagina () {
        setVpagina(vpagina - 1)

        if (vpagina == 1) {
            setVpagina(1)
        }
    }

    return(
        <div className='Netflix'>
            <div className='Netflix-main'>
                <nav className='up'>
                    <div className='left'>
                        <img onClick={RecarregarPagiga} src="/assets/images/logoBranca.png" />
                        <h1>Portifolio.me</h1>
                        <p>Inicio</p>
                        <p>Series</p>
                        <p>Filmes</p>
                        <p>Bombando</p>
                        <p>Minha Lista</p>
                    </div>

                    <div className='right'>
                        <div className='pesquisar'>
                            <input type="text" placeholder='Pesquise pelo titulo' value={filme} onChange={e => setFilme(e.target.value)}/>
                            <button onClick={BuscarFilmes} onKeyPress={(event) => {handleKeyPress(event)}}>
                                <img src="/assets/images/lupa.png" />
                            </button>
                        </div>
                        <h1>Piroquinha123</h1>
                        <img src="/assets/images/sininhi.png" />
                        <img src="/assets/images/fotinha.png" />
                        <img src="/assets/images/novoLogin.png" />
                    </div>
                </nav>

                <div className='down'>
                    <main className='newFilme'>
                        <h1>Friends</h1>
                        <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                        <button>Assistir</button>
                    </main>
                </div>

            </div>

            <div className='Netflix-Filmes'>
                <div className='Filmes'>
                    {filmes.map( item =>
                    <div className='cardFilme'>
                        <img src={item.Poster} />
                        <div className='infoMovie'> 
                            <div className='titulo'>
                                <p>{item.Title}</p>
                            </div>    
                            <div className='ano'>
                                <p>{item.Year}</p>
                            </div>
                        </div>    
                    </div>
                    )}
                </div>

                {mostNada == true &&
                <div className='semNada'>
                    <h1>Opa! Parece que voce pesquisou nada ainda..</h1>
                </div>}

                {mostPPagina == true &&
                <div className='ProximaPagina'>
                    <button onClick={VoltarPagina}>
                        Voltar a pagina
                    </button>
                    <p>Pagina {vpagina}</p>
                    <button onClick={ProximaPagina}>
                        Proxima Pagina
                    </button>
                </div>}
            </div>
        </div>
    )
}