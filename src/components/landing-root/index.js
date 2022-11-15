import './style.css';
import NavBar from '../navbar';

export default function Root() {

    return (
        <div className='landing-container'>

            <NavBar />

            <main className='main-container'>
                <h1>KEEP FOCUSED!</h1>
                <span>We provide tools to keep you focused on your tasks
                    and to increase your learning process.
                </span>
            </main>

        </div >
    )
}