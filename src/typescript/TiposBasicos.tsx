import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Exe';
    const edad: number = 25;
    const estaActivo: boolean = true;
    
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']



  return (
    <>
        <h3>Tupos Basicos</h3>
        {nombre}, {edad}, {{estaActivo} ? 'activo' : 'no activo'}
        <br />

        {poderes.join(', ')}
    </>
  )
}
