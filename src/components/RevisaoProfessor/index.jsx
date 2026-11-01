import './index.css'

function RevisaoProfessor({professor}) {
    return (
        <aside className="revisao">
            <span><strong>*Conteúdo gerado por IA</strong></span>
            <span>
                Revisado por {professor.nome}, professor(a) de {professor.disciplina} na {professor.escola}.
            </span>
        </aside>
    )
}

export default RevisaoProfessor;