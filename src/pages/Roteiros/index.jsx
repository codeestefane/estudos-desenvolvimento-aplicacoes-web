import {useState} from 'react'
import { useLocation } from 'react-router'

import Header from '../../components/Header'

function Roteiros () {
    const location = useLocation();
    const roteiro = location.state;

    return(
        <>
            <Header title = {`Roteiros disponíveis para ${roteiro.disciplina.toUpperCase()} do ${roteiro.anoEscolar} ANO!`}/>
        </>
    )
}

export default Roteiros