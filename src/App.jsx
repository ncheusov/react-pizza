import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './assets/pizzas.json';

import './scss/app.scss';

function App() {
    const [items, setIems] = useState([]);

    useEffect(() => {
        fetch('https://630001149350a1e548e944d9.mockapi.io/items ')
        .then((res) => res.json())
        .then((arr) => {
            setIems(arr);
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzas.map((obj) => (
                                <PizzaBlock key={obj.id} {...obj}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
