import '../errorpage/style.css';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='error-container'>
            <div className='error-content'>
                <h1>Sorry!</h1>
                <h2>The page you're looking for is not available.</h2>
            </div>
        </div>
    )
}