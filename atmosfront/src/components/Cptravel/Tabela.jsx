function Tabela({ vetor, selecionar }) {

    return (

        <div className="container py-5">
            <div className="container px-2 py-4" id="icon-grid">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Ida</th>
                            <th>Volta</th>
                            <th>R$</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            vetor.map((obj, indice) => (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td>{obj.origem}</td>
                                    <td>{obj.destino}</td>
                                    <td>{obj.dataIda}</td>
                                    <td>{obj.dataVolta}</td>
                                    <td>{obj.preco}</td>
                                    <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default Tabela;