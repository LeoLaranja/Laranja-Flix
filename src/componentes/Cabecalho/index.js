import "./Cabecalho.css";
import { NavLink } from 'react-router-dom';

function Cabecalho() {
    return (
        <div className='cabecalho_Container'>
            <nav>
                <div className='cabecalho_img'>
                    <img src='./imagens/logo4.1.png' alt='logo'></img>
                </div>

                <ul>
                    <NavLink exact to="/" activeClassName="active"><li>HOME</li></NavLink>
                    <NavLink to="/novo-video" activeClassName="active"><li>NOVO VÍDEO</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Cabecalho;
