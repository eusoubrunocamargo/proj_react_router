import '../dashboard/style.css';
import { useLocation } from 'react-router-dom';
import ErrorPage from '../errorpage';

export default function Dashboard() {

    const location = useLocation();
    let name;

    try {
        if (location.state) {
            name = location.state?.data.name;
        }

    } catch (error) {
        return (
            <ErrorPage />
        )
    }

    return (

        <div className='dashboard-container'>

            <div className='dashboard-left'>
                <h1>mydash</h1>
                <button className='dash-btn'>Main</button>
                <button className='dash-btn'>Tools</button>
            </div>

            <div className='dashboard-right'>
                <span>Olá, {name}</span>
            </div>

        </div>

    )
}