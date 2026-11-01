import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router'

import Header from '../../components/Header'
import Select from '../../components/Forms/Select'
import CardRoteiro from '../../components/CardRoteiro'

import roteiros from '../../data/roteiros.json'
import professores from '../../data/professores.json'

function Roteiros() {
    const location = useLocation();
    const navigate = useNavigate();
    const {disciplina, anoEscolar} = location.state;
    const [temaFiltro, setTemaFiltro] = useState('Todos');

    const doFiltro = roteiros.filter(r => r.disciplina === disciplina && r.ano === anoEscolar);
    const temas = [...new Set(doFiltro.map(r => r.tema))];
    const visiveis = doFiltro.filter(r => temaFiltro === 'Todos' || r.tema === temaFiltro);

    return (
    <>
        <Header title={<>Roteiros disponíveis para <b>{disciplina.toUpperCase()}</b> do <b>{anoEscolar} ANO</b></>} />
        <section className="pagina">
            {
                doFiltro.length === 0 ? (
                    <p>Ainda não há roteiros para esta combinação de disciplina e ano.</p>
                ) : 
                (
                    <>
                        <div className="filtro">
                            <Select
                                name="selectTema"
                                label="Visualize por tema:"
                                setValue={setTemaFiltro}
                                defaultValue="Todos"
                                optionsList={[{ value: 'Todos' }, ...temas.map(t => ({ value: t }))]}
                            />
                        </div>
                        {visiveis.map(r => (
                            <CardRoteiro
                                key={r.id}
                                roteiro={r}
                                professorNome={professores.find(p => p.id === r.professorId)?.nome}
                                onAcessar={(id) => navigate(`/roteiros/${id}`)}
                            />
                        ))}
                    </>
                )
            }
        </section>
    </>
    )
}

export default Roteiros