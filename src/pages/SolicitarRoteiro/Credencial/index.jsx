import {useState} from 'react'
import { useLocation } from 'react-router'

import { useNavigate } from 'react-router';

import Input from '../../../components/Forms/Input'
import Button from '../../../components/Forms/Button'
import Header from '../../../components/Header'

function Credencial(){
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, user } = location.state || {};

  const handleClick = async (e) => {
    e.preventDefault();

    if(email && nome){
        if(!email.endsWith("@escola.educa.gov.br")){
            alert("O e-mail deve terminar com @escola.educa.gov.br!");
        } else {
            navigate('/solicitar-roteiro-info', {state: {'profile': profile, 'user': user, 'nome': nome, 'email': email}})
        }
    } else {
      alert("Preencha todos os campos!");
    }

  };

  return (
    <>
    <Header title = {''} />
    <section>
      <form>
        <Input type="text" name="nome" label="Digite seu nome completo:" setValue = {setNome}/>
        <Input type="email" name="email" label="Digite seu e-mail institucional" setValue = {setEmail}/>
        <Button type = "submit" handle = {handleClick} content = "Avançar" className="avançar"/>
      </form>
    </section>
    </>
  )
}

export default Credencial;