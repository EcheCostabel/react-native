import { useUsuarios } from "../hooks/useUsuarios";
import {  Usuario } from "../interfaces/reqRes";




export const Usuarios = () => {

    const { usuarios , paginaAnterior, paginaSiguiente } = useUsuarios()   //saco usuarios y cargarUsuarios de useUsuarios


    const renderItem = ({id, avatar, first_name, email, last_name}: Usuario) => { //Desestructuro todo esto de 'usuario'
        return (
        <tr key={id.toString()}>
            <td>
                <img src={avatar} alt={first_name} style={{width: 35, borderRadius: 100}}/>
            </td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td> 
        </tr>
        )
    }

  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>email</th> 
                </tr>
            </thead>

            <tbody>
               {
                    usuarios.map(renderItem)
               }
            </tbody>
        </table>


        <button className="btn btn-primary" onClick={paginaAnterior} >
            Anteriores
        </button>
        <button className="btn btn-primary" onClick={paginaSiguiente} >
            Siguientes
        </button>
    </>
  )
}
