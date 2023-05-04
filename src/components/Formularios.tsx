import { useForm } from '../hooks/useForm';


export const Formularios = ( ) => {

    const { formulario, email, password, onChange } = useForm({
        email: 'exe@test.com',
        password: '123456'
    });

    return (

        <>
        <h3>Formularios</h3>

        <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={formulario.email}
        onChange={(e) => onChange(e.target.value , 'email')}
        />

        <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={formulario.password}
        onChange={(e) => onChange(e.target.value , 'password')}

        />

        <code>
            <pre>{JSON.stringify(formulario, null, 2)}</pre>
        </code>
    </>

)
}