import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'
import {useState} from 'react'

import Header from '../../components/Header'
import Select from '../../components/Forms/Select'
import Button from '../../components/Forms/Button'

function MenuProfessor(){
    const navigate = useNavigate();
    const location = useLocation();
    const { profile, user } = location.state || {};

    const handleClick = (e) => {
        if(e.target.className == "consultar"){
            navigate('/menu-roteiro', {state: {'profile': profile, 'user': user}});
        } else {
            navigate('/solicitar-roteiro-credencial', {state: {'profile': profile, 'user': user}});
        }
    }

    return(
        <>
            <Header title = {`Seja bem vindo(a), ${user.toUpperCase()}!`} page = "menu" />
            <section>
                <Button type = "submit" handle = {handleClick} content = "Consultar roteiros" className="consultar"/>
                <Button type = "submit" handle = {handleClick} content = "Solicitar novo roteiro" className="solicitar"/>
            </section>
        </>
    )
}

export default MenuProfessor;