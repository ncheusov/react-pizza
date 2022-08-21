import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

function App() {


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Home /> LALALA
                </div>
            </div>
        </div>
    );
}

export default App;
