import '../login/style.css';
import NavBar from '../navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const [user, setUser] = useState(null);
    const handleLogin = () => setUser({ id: 1, name: 'Bruno' });
    const handleLogout = () => setUser(null);

    return (
        <>
            <NavBar />
            <div className="container-login">

                {user ? (

                    <div>
                        <button className='btn-login-logout' onClick={handleLogout}>
                            Sign Out
                        </button>
                    </div>

                ) :

                    <div>
                        <button className='btn-login-logout' onClick={handleLogin}>
                            Sign In
                        </button>
                    </div>
                }

                <div className="card-login">
                    <input className='input-login username' type='text' placeholder='username'></input>
                    <input className='input-login' type='text' placeholder='password'></input>
                    <Link to={`/dashboard`} state={{ data: user }}><button className='btn-login'>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}