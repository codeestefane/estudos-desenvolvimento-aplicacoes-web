import { useState } from 'react'
import {useNavigate} from 'react-router';

import Button from '../../components/Forms/Button'

function Inicio(){
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
    <section>
        <Button type = "submit" handle = {handleClick} content = "Sou aluno(a)"/>
        <Button type = "submit" handle = {handleClick} content = "Sou professor(a)"/>
    </section>
    )
}

export default Inicio