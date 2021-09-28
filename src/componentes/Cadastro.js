import React, {useState, useEffect} from 'react'
import FormularioCadastro from './FormularioCadastro'
import {getdadosContatos, api} from '../services/Api'
import axios from 'axios'


const Cadastro = () => {

    let[dadosContatos, setDadosContatos] = useState({})

    let [currentId, setCurrentId] = useState('')

    useEffect(() => {
        const getdadosContatos = async () => {
          const initialData = await getdadosContatos();
          setDadosContatos(initialData.dadosContatos.results)
        }
        getdadosContatos()
      }, [])

    
    //Lista
    useEffect( () =>{
        axios.create('contatos').on('value', dbPhoto => {
            if(dbPhoto.val() !=null) {
                setDadosContatos({
                    ...dbPhoto.val()
                })
            }else {
                setDadosContatos({})
            }
        })
    }, [] )
    
    const addEedit = obj => {

        if (currentId == '') {
            
            api.child('camposIniciaisDeValores').push(
                obj,
                err => {
                    if(err) {
                        console.log(err)
                    }else {
                        setCurrentId('')
                    }
                }
            )
        } else {
            api.child(`camposIniciaisDeValores/${currentId}`).set(
                obj,
                err => {
                    if(err)
                        console.log(err)
                }
            )
        }
    }
    

    const onDelete = key => {
        if( window.confirm('Bora deleta gente') ) {
            api.child(`api/${key}`).remove(
                err => {
                    if(err)
                        console.log(err)
                }
            )
        }
    }

    return (

        <React.Fragment>

        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Lista de Contatos</h1>
                    <p className="lead">Bem-vindo.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro {...({addEedit, currentId, dadosContatos})} />
                </div>

                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light"> 
                            <tr>
                                <th> Nome Completo </th>
                                <th> Telefone </th>
                                <th> E-mail </th>
                                <th> Endereço </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosContatos).map( id => {
                                    return <tr key={id}>
                                        <td> {dadosContatos[id].nomeCompleto} </td>
                                        <td> {dadosContatos[id].telefone} </td>
                                        <td> {dadosContatos[id].email} </td>

                                        <td>
                                            <a className="btn btn-primary" onClick={ () => {setCurrentId(id)} }>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn btn-danger" onClick={ () => onDelete(id)}>
                                            <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Cadastro