import { useEffect } from "react";
import axios from "axios";



export const Usuarios = () => {


    useEffect(() => {
        axios('https://reqres.in/api/users')
    }, [])


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

            </tbody>
        </table>
    </>
  )
}
