import {useState, useEffect} from 'react'
import Button from '../Forms/Button'

function TextoApoio({termo}) {
    const [estado, setEstado] = useState('carregando'); // 'carregando', 'erro' e 'sucesso'
    const [dados, setDados] = useState(null);
    const [tentativa, setTentativa] = useState(0);

    useEffect(() => {
        let ativo = true;

        async function buscar() {
            try {
                const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
                const resposta = await fetch(url, {signal: AbortSignal.timeout(8000)});
                if(!resposta.ok) throw new Error(`Erro ${resposta.status}`);
                const json = await resposta.json();
                if(ativo) {
                    setDados(json);
                    setEstado('sucesso');
                }
            } catch {
                if(ativo) setEstado('erro');
            }
        }

        buscar();
        return () => {ativo = false};
    }, [termo, tentativa]);

    const tentarNovamente = () => {
        setEstado('carregando');
        setTentativa(t => t + 1);
    }

    if (estado === 'carregando') {
        return (
            <div className="apoio">
                <strong>Texto de apoio:</strong>
                <div className="caixa">Carregando texto de apoio...</div>
            </div>
        )
    }

    if (estado === 'erro') {
        return (
            <div className="apoio">
                <strong>Texto de apoio:</strong>
                <div className="caixa">
                    <p>Não foi possível carregar o texto de apoio.</p>
                    <div className="acoes">
                        <Button type="button" handle={tentarNovamente} content="Tentar novamente" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="apoio">
            <strong>Texto de apoio:</strong>
            <div className="caixa">{dados.extract}</div>
            <small className="direita">
                Fonte: <a href={dados.content_urls?.desktop?.page} target="_blank" rel="noreferrer">Wikipédia</a>
            </small>
        </div>
    )
}

export default TextoApoio;