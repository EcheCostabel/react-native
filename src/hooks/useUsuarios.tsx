import React, {useState, useRef, useEffect } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
  
    const [ usuarios, setUsuarios ] = useState<Usuario[]>([])
    
    const paginaRef = useRef(0);


   useEffect(() => {
       cargarUsuarios();
   }, [])

   const cargarUsuarios = async() => {
       const resp = await reqResApi.get<ReqResListado>('/users', {
           params: {
               page: paginaRef.current
           }
       })
       if(resp.data.data.length > 0 ) {
           setUsuarios(resp.data.data)
           paginaRef.current ++  // esto es para hacer la paginacion
       } else {
           alert('No hay mas registros')
       }
   }

   return {
    usuarios,
    cargarUsuarios
   }
    
}


