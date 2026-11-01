import {useState} from 'react'
import './index.css'
import Button from '../Forms/Button'

function Questionario({titulo, questoes, onFechar}) {
    const [respostas, setRespostas] = useState({});  
    const [verificado, setVerificado] = useState(false);
    const [aviso, setAviso] = useState('');

    const escolher = (indiceQuestao, indiceAlternativa) => {
        if (verificado) return;
        setRespostas({ ...respostas, [indiceQuestao]: indiceAlternativa });
        setAviso('');
    }

    const verificar = () => {
        if (Object.keys(respostas).length < questoes.length) {
            setAviso('Responda todas as questões antes de verificar.');
            return;
        }
        setVerificado(true);
    }

    const refazer = () => {
        setRespostas({});
        setVerificado(false);
        setAviso('');
    }

    return (
    <div className="questionario">
        <h2 className="faixa">{titulo}</h2>

        {questoes.map((q, i) => {
            const acertou = respostas[i] === q.correta;
            return (
                <div key={i} className="bloco-questao">
                    <div className="questao">
                        <p>{i + 1}. {q.enunciado}</p>

                        <div className="alternativas">
                            {q.alternativas.map((alt, j) => {
                                let classe = 'alternativa';
                                if (verificado) {
                                    if (j === q.correta) classe += ' correta';
                                    else if (j === respostas[i]) classe += ' errada';
                                }
                                return (
                                    <label key={j} className={classe}>
                                        <input
                                            type="radio"
                                            name={`questao-${i}`}
                                            checked={respostas[i] === j}
                                            onChange={() => escolher(i, j)}
                                            disabled={verificado}
                                        />
                                        {alt}
                                    </label>
                                )
                            })}
                        </div>
                    </div>

                    {verificado && (
                        <div className={acertou ? 'feedback acerto' : 'feedback erro'}>
                            <p>{acertou ? 'Parabéns, você acertou!' : 'Ops, vamos revisar esse conteúdo!'}</p>
                            <p><strong>Resposta correta:</strong> Item {String.fromCharCode(65 + q.correta)}.</p>
                            <p><strong>Justificativa:</strong> {q.justificativa}</p>
                        </div>
                    )}
                </div>
            )
        })}

        {aviso && <div className="feedback erro">{aviso}</div>}

        <div className="acoes">
            {
                verificado ? <Button type="button" handle={refazer} content="Refazer questionário" />
                : <Button type="button" handle={verificar} content="Verificar respostas" />
            }
            <Button type="button" handle={onFechar} content="Fechar questionário" className="secundario" />
        </div>
    </div>
    )
}

export default Questionario;