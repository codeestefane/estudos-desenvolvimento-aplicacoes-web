import {useState} from 'react'
import { useLocation } from 'react-router'

import { useNavigate } from 'react-router';
import usersList from '../../data/users.json';

import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = location.state || {};

  const handleLogin = async (e) => {
    e.preventDefault();

    if(email && password){
      const loggedUser = usersList.find(user => user.email == email && user.password == password);
      setUser(loggedUser.name);
  
      if(loggedUser){

        if(profile == "aluno"){
          navigate('/menu-roteiro', {state: {'profile': profile, 'user': loggedUser.name}});
        } else {
          navigate('/menu-professor', {state: {'profile': profile, 'user': loggedUser.name}});
        }

      } else {
        alert("Usuário ou senha inválidos!");
      }
    } else {
      alert("Preencha todos os campos!");
    }

  };

  return (
    <section>
      <form>
        <Input type="email" name="email" label="Digite seu e-mail institucional:" setValue = {setEmail}/>
        <Input type="password" name="password" label="Digite sua senha:" setValue = {setPassword}/>
        <Button type = "submit" handle = {handleLogin} content = "Login"/>
      </form>
    </section>
  )
}

export default Login