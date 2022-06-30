import './styles/App.css';
import logoReact from './logo.svg';
import logoWordpress from './logo-wordpress.svg';
import StaticPage from './pages/StaticPage';
import { useEffect, useState } from 'react';

function App() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function loadPage() {
            const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';
            const response = await fetch(baseUrl + '/wp-json/wp/v2/pages/2');
            if (!response.ok) {
                return;
            }

            const page = await response.json();
            setPage(page);
        }

        loadPage();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <span>
                    <img src={logoReact} className="App-logo" alt="logo react"/>
                    <img src={logoWordpress} className="App-logo" alt="logo wordpress"/>
                </span>
                <StaticPage page={ page } />
            </header>
        </div>
    );
}

export default App;
