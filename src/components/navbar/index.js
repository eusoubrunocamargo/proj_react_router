import '../navbar/style.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <header className='header-container'>
            <div>
                <h1>myDash</h1>
            </div>
            <div className='header-menu'>
                {/* <a href='/'>About</a>
                    <a href='/'>Join</a> */}
                <Link to={`/login`}>Login</Link >
            </div>
        </header >
    )
}
