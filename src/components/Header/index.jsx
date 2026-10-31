import './index.css'

import iconExit from '../../assets/exit.png'
import iconReturn from '../../assets/return.png'

import { useNavigate } from 'react-router'

function Header(props){
    const navigate = useNavigate();

    const returnLastPage = () => {
        if(props.page == "menu"){
            navigate('/login')
        } else {
            navigate(-1);
        }
    }

    const exitApp = () => {
        navigate('/');
    }

    return (
        <header>
            <nav>
                <img src={iconReturn} onClick = {() => returnLastPage()} alt="sair"></img>
                <img src={iconExit} onClick = {() => exitApp()} alt="voltar"></img>
            </nav>
            <h1>
                {props.title}
            </h1>
        </header>
    )
}

export default Header;