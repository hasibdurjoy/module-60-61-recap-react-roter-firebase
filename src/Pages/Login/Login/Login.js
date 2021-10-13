import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, logOut, signInUsingGoogle } = useAuth()
    return (
        <div className='text-center m-5'>
            <h2 className="text-primary">Please Log in</h2><br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Log IN With Google</button>
        </div>
    );
};

export default Login;