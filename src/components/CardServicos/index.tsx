import "./style.css"

export default function CradServico(props:any){
    return(
        <>
            <div className="servico">
                <div className="topo_servico">
                    <h3>{props.titulo_vaga}</h3>
                    <span>{props.valor}</span>
                </div>
                <p>{props.descricao}</p>
                <div className="techs">
                {
                        props.techs.map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        </>
    )
}
