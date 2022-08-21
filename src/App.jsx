import React, { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

function App() {
<<<<<<< HEAD
  const [items, setItems] = useState([]);
  
  fetch('https://630001149350a1e548e944d9.mockapi.io/items ')
      .then(res => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);  
      });
=======
    
>>>>>>> 4514049629d1506b9de9546105ccf3540203a681

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
