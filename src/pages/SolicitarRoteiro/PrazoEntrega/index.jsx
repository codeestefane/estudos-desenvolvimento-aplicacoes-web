import {useState} from 'react'
import { useLocation } from 'react-router'

import { useNavigate } from 'react-router';

import Input from '../../../components/Forms/Input'
import Select from '../../../components/Forms/Select'
import Button from '../../../components/Forms/Button'
import Header from '../../../components/Header'

import dayjs from 'dayjs';

function PrazoEntrega(){
    const [qtdQuestoes, setQtdQuestoes] = useState('3');
    const [prazo, setPrazo] = useState('');
    const navigate = useNavigate();
    const dataAtual = dayjs().format('YYYY-MM-DD');
    const location = useLocation();
    const { profile, user, nome, email, disciplina, anoEscolar} = location.state || {};

    const handleClick = (e) => {
        e.preventDefault();

        if(prazo && qtdQuestoes){
            let prazoDias = dayjs(prazo).diff(dayjs(dataAtual), 'days');
    
            if(prazoDias < 7){
                alert("O prazo de entrega deve ser de pelo menos 7 dias a partir de hoje!");
            } else {
                alert("Solicitação de roteiro cadastrada com sucesso!");
                navigate('/menu-professor', {state: {'profile': profile, 'user': user}});
            }

        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <>
            <Header title = {``} />
            <section>
            <form>
                <Input type="number" name="number" label="Selecione a quantidade de questões:" setValue = {setQtdQuestoes} min = "3" max = "9" defaultValue = "3"/>
                <Input type="date" name="date" label="Para quando você precisa do roteiro?" setValue = {setPrazo}/>

                <Button type = "submit" handle={handleClick} content = "Enviar"/>
            </form>
            </section>
        
        </>

    )
}

export default PrazoEntrega;