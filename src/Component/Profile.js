import { useState } from "react";

const isValid = (values, setError) => {
    if (!values?.userName || values?.userName?.trim() === '') {
        setError('name is required');
        setTimeout(() => setError(''), 3000);
        return false;
    }
    if (!values?.email || values?.email?.trim() === '') {
        setError('email is required');
        setTimeout(() => setError(''), 3000);
        return false;
    }
    if (!values?.password || values?.password?.trim() === '') {
        setError('password is required');
        setTimeout(() => setError(''), 3000);
        return false;
    }
    if (!values?.password || values?.password?.trim()?.length < 8) {
        setError('password must be greater than 8 characters in length');
        setTimeout(() => setError(''), 3000);
        return false;
    }
    return true;
}

function App() {

    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const inptChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (isValid(formState, setError)) {
            alert('submitted successfully');
            setFormState({
                userName: '',
                email: '',
                password: '',
            });
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='userName'>Name</label>
                <input name='userName' value={formState.userName} onChange={inptChange} type='text' />
                <br />

                <label htmlFor='email'>Email</label>
                <input name='email' value={formState.email} onChange={inptChange} type='email' />
                <br />

                <label htmlFor='password'>Password</label>
                <input name='password' value={formState.password} onChange={inptChange} type='password' />
                <br />

                <button type="submit">Submit</button>
            </form>
            {
                error ? <p style={{ color: 'red' }}>{error}</p> : null
            }
        </>
    );
}

export default App;
