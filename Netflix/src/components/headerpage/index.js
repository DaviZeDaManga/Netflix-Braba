import { Link } from 'react-router-dom'
import './index.scss'

export default function Header (props) {

    return (
        <div className='Cabecalho'>
            <div className='Cabecalho-logo'>
                <img src="/assets/images/logo1.png"/>
                <h1>Portifolio.me</h1>
            </div>
        </div>
    )
}