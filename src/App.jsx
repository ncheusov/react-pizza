import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

function App() {
    // test CodeSandbox
    // const [items, setItems] = React.useState();

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;
