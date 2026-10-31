import { useState } from 'react'
import {useNavigate} from 'react-router';

import Button from '../../components/Forms/Button'

function Inicio(){
    const [profile, setProfile] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate('/login', {state: {'profile': e.target.className}});
        setProfile(e.target.className);
    }

    return (
    <section>
        <Button type = "submit" handle = {handleClick} content = "Sou aluno(a)" className="aluno"/>
        <Button type = "submit" handle = {handleClick} content = "Sou professor(a)" className="professor"/>
    </section>
    )
}

export default Inicio