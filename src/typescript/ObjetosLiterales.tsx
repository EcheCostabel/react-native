import React from 'react'


interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

    interface Direccion {
        pais: string;
        casaNo: number
}

export const ObjetosLiterales = () => {


    const persona: Persona = {
        nombreCompleto: 'Exequiel',
        edad: 25,
        direccion: {
            pais: 'Argentina',
            casaNo: 4
        }
    }

  return (
    <div>
        <h3>Objetos Literales</h3>
    </div>
  )
}
