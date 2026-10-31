import {useState} from 'react'
import { useLocation } from 'react-router'

import { useNavigate } from 'react-router';

import Input from '../../../components/Forms/Input'
import Select from '../../../components/Forms/Select'
import Button from '../../../components/Forms/Button'
import Header from '../../../components/Header'

function EspecificacaoRoteiro(){
    const [disciplina, setDisciplina] = useState('Matemática');
    const [anoEscolar, setAnoEscolar] = useState('6°');
    const [tema, setTema] = useState('');
    const location = useLocation();
    const { profile, user, nome, email} = location.state || {};

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if(anoEscolar && disciplina && tema){
            navigate('/solicitar-roteiro-prazo', {state: {'profile': profile, 'user': user, 'nome': nome, 'email': email, 'disciplina': disciplina, 'anoEscolar': anoEscolar}});
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <>
            <Header title = {``} />
            <section>
            <form>
                <Select name = "selectDisciplina" label = "Selecione a disciplina:" setValue = {setDisciplina} defaultValue = "Matemática" optionsList = {[{"value": "Matemática"}, 
                    {"value": "Português"}, {"value": "Artes"}, {"value": "Educação Física"}, {"value": "Geografia"}, {"value": "Ciências"}]}/>
                
                <Select name = "selectAnoEscolar" label = "Selecione o ano escolar:" setValue = {setAnoEscolar} defaultValue = "6°" optionsList = {[{"value": "6°"}, 
                    {"value": "7°"}, {"value": "8°"}, {"value": "9°"}]}/>

                <Input type="text" name="tema" label="Digite o tema do roteiro:" setValue = {setTema}/>

                <Button type = "submit" handle={handleClick} content = "Avançar"/>
            </form>
            </section>
        
        </>

    )
}

export default EspecificacaoRoteiro;