import './index.scss'
import { useState } from 'react'

export default function Post (props) {
    const [curtidas, setCurtidas ] = useState (0)

    function Gostei() {
        let result = curtidas + 1
        setCurtidas(result)
    }

    return(
        <div className='Postagem'>
            <div className='dados'>
                            <a href=''><img src={props.a}/></a>
                            <div className='info'>
                                <a href=''>{props.u}</a>
                                <p>2 sem</p>    
                            </div>
                        </div>
                        <div className='imagem'>
                            <img src={props.i} />
                        </div>
                        <div className='interacao-publi'>
                            <div className='card-interagir'>
                                <div className='interagir'>
                                    <button onClick={Gostei}>
                                        <img src="/assets/images/Instagram/Vector (1).png" />
                                    </button>

                                    <button>
                                        <img src="/assets/images/Instagram/Vector (2).png" />
                                    </button>
                                </div>
                                <div className='likes'>
                                    <h1> {props.l} curtidas</h1>
                                </div>
                                <div className='descricao'>
                                    <p> <span>{props.u}</span>{props.d}</p>
                                </div>
                                <div className='hr'></div>
                            </div>
                        </div>
                    </div>              
    )
}