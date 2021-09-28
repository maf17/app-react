import React, { useState, useEffect } from 'react'


const FormularioCadastro = (props) => {

    //Variaveis de captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto:'',
        telefone: '',
        email: '',
        endereco: '',
    }


    let [values, setValues] = useState(camposIniciaisDeValores)

    useEffect( () => {
        if(props.currentId == '') {
            setValues({
                ...camposIniciaisDeValores
            })
        } else {
            setValues({
                ...props.dadosContatos[props.currentId]
            })
        }
    }, [props.currentId, props.dadosContatos] )

    
    const manipuladorInputChange = e => {
        let { name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEedit(values)
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Nome Completo" value={values.nomeCompleto}
                onChange={manipuladorInputChange}/>
            </div>

            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Telefone" value={values.telefone}
                    onChange={manipuladorInputChange}/>
                </div>
                
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="E-mail" value={values.email}
                    onChange={manipuladorInputChange}/>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} 
                onChange={manipuladorInputChange} />
            </div>

            <div className="form-group mt-2">
                <input type="submit" value={props.currentId == '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default FormularioCadastro