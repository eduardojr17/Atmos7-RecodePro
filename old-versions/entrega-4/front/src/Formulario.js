
function Formulario({botao, eventoTeclado, cadastrar , obj, cancelar, remover, alterar}){

    return(
        
        <form>
            <input type='text' value={obj.origem} onChange={eventoTeclado} name='origem'    placeholder='Origem'        className='form-control' />
            <input type='text' value={obj.destino} onChange={eventoTeclado} name='destino'   placeholder='Destino'       className='form-control' />
            <input type='text' value={obj.dataIda} onChange={eventoTeclado} name='dataIda'   placeholder='Data da Ida'   className='form-control' />
            <input type='text' value={obj.dataVolta} onChange={eventoTeclado} name='dataVolta' placeholder='Data da Volta' className='form-control' />
            <input type='text' value={obj.preco} onChange={eventoTeclado} name='preco'     placeholder='Preco'         className='form-control' />

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
                :
                <div>
                    <input type='button' value='Alterar'  onClick={alterar} className='btn btn-warning'   />
                    <input type='button' value='Remover'  onClick={remover} className='btn btn-danger'    />
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary' />
                </div>
            }

            
        </form>
    )

}

export default Formulario;