import React from 'react'
import FormularioCadastro from './FormularioCadastro'

const Cadastro = () => {
    
    const addEedit = obj => {

    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Lista de Contatos</h1>
                    <p className="lead">Bem-vindo.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro addEedit={addEedit} />
                </div>
                <div>
                    <h2>Lista de contatos</h2>
                </div>
            </div>

        </div>
        
    )
}

export default Cadastro