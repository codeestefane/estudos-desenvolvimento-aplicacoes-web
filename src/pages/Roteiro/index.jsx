import {useState} from 'react'
import {useParams, useNavigate} from 'react-router'

import Header from '../../components/Header'
import Button from '../../components/Forms/Button'
import RevisaoProfessor from '../../components/RevisaoProfessor'
import TextoApoio from '../../components/TextoApoio'
import Questionario from '../../components/Questionario'

import roteiros from '../../data/roteiros.json'
import professores from '../../data/professores.json'

function Roteiro() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [mostrarQuestionario, setMostrarQuestionario] = useState(false);

    const roteiro = roteiros.find(r => r.id === id);

    // tratamento de identificador inexistente 
    if (!roteiro) {
        return (
            <>
                <Header title="Roteiro não encontrado" />
                <section className="pagina">
                    <p>Não encontramos nenhum roteiro com o identificador "{id}".</p>
                    <Button type="button" handle={() => navigate('/')} content="Voltar ao início" />
                </section>
            </>
        )
    }

    const professor = professores.find(p => p.id === roteiro.professorId);

    const fechar = () => navigate('/roteiros', {
        state: {disciplina: roteiro.disciplina, anoEscolar: roteiro.ano}
    });

    return (
    <>
        <Header
            title={
                mostrarQuestionario ? <>Questionário sobre <b>{roteiro.titulo.toUpperCase()}</b></>
                : <>Roteiro de estudos sobre <b>{roteiro.titulo.toUpperCase()}</b></>
            }
        />
        <section className="pagina">
            {
                mostrarQuestionario ? (
                    <Questionario
                        titulo={roteiro.titulo}
                        questoes={roteiro.questoes}
                        onFechar={() => setMostrarQuestionario(false)}
                    />
                ) : 
                (
                    <article className="painel">
                        <h2 className="painel-titulo">{roteiro.titulo}</h2>
                        <div className="painel-corpo">
                            <p><strong>Professor(a) responsável:</strong> {professor.nome}</p>
                            <p><strong>Tema:</strong> {roteiro.tema}</p>
                            <p><strong>Tempo estimado:</strong> {roteiro.tempoMinutos} minutos</p>

                            <div className="caixa">{roteiro.explicacao}</div>
                            <RevisaoProfessor professor={professor} />

                            <TextoApoio key={roteiro.id} termo={roteiro.termoWikipedia} />

                            <div className="acoes">
                                <Button type="button" handle={() => setMostrarQuestionario(true)} content="Acessar questionário" />
                                <Button type="button" handle={fechar} content="Fechar roteiro" className="secundario" />
                            </div>
                        </div>
                    </article>
                )
            }
        </section>
    </>
    )
}

export default Roteiro