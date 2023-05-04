import React, { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    nombre: string ;
}


const initialState: AuthState = {
    validando: true,
    token: null,
    userName: '',
    nombre: '',
};

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
    | { type: 'logout'}
    | { type: 'login', payload: LoginPayload }

const authReducer = ( state:AuthState, action: AuthAction ):AuthState => {

    switch(action.type) {
        case 'logout':
            return {
                validando: false,
                token:null,
                nombre: '',
                userName: '',
            }

        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                userName: action.payload.username
            }
        
    }
}

export const Login = () => { 

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'})
        }, 1500)
    }, []);

    const login = () => {
        dispatch({type: 'login', 
        payload: {
            nombre: 'Exequiel',
            username: 'exe123'
        }})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }


    if( state.validando) {
        return (
        <div className='alert alert-info'>
            Validando...
        </div>
        )
    }


  return (
    <>
        <h3>Login</h3>

        {
            (state.token) //si tengo el token es porque estoy autenticado
                ? <div className='alert alert-success'>Autenticado como {state.nombre}</div>
                :<div className='alert alert-danger'>No autenticado</div>
        }


        {
            (state.token)
                ? (   
                <button className='btn btn-danger' onClick={logout}>Logout</button>
                )
                :  (
                <button className='btn btn-primary' onClick={login}>Login</button>
                )
        } 

    </> 
  )
}
