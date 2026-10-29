import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'
import {useState} from 'react'

import Header from '../../components/Header'
import Select from '../../components/Forms/Select'
import Button from '../../components/Forms/Button'

function MenuInicial(){
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();
    const [disciplina, setDisciplina] = useState('Matemática');
    const [anoEscolar, setAnoEscolar] = useState('6°');

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/roteiros', {state: {"disciplina": disciplina, "anoEscolar": anoEscolar}})
    }

    return(
        <>
            <Header title = {`Seja bem vindo(a), ${user?.name.toUpperCase()}!`} />
             <section>
                <form>
                    <Select name = "selectAnoEscolar" label = "Selecione o ano escolar:" setValue = {setAnoEscolar} defaultValue = "6" optionsList = {[{"value": "6°"}, 
                        {"value": "7°"}, {"value": "8°"}, {"value": "9°"}
                    ]}/>

                    <Select name = "selectDisciplina" label = "Selecione a disciplina:" setValue = {setDisciplina} defaultValue = "Matemática" optionsList = {[{"value": "Matemática"}, 
                        {"value": "Português"}, {"value": "Artes"}, {"value": "Educação Física"}, {"value": "Geografia"}, {"value": "Ciências"}]}/>

                    <Button type = "submit" handle={handleClick} content = "Avançar"/>
                </form>
            </section>
        </>

    )

}

export default MenuInicial;