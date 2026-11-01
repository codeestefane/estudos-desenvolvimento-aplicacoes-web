import Button from '../Forms/Button'

function CardRoteiro({roteiro, professorNome, onAcessar}) {
    return (
        <article className="painel">
            <h2 className="painel-titulo">{roteiro.titulo}</h2>
            <div className="painel-corpo">
                <p><strong>Tema:</strong> {roteiro.tema}</p>
                <p><strong>Professor(a):</strong> {professorNome}</p>
                <p><strong>Tempo estimado:</strong> {roteiro.tempoMinutos} minutos.</p>
                <Button type="button" handle={() => onAcessar(roteiro.id)} content="Acessar" />
            </div>
        </article>
    )
}

export default CardRoteiro;