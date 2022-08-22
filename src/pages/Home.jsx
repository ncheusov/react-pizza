import { useState, useEffect } from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';


const Home = () => {
    const [items, setIems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://630001149350a1e548e944d9.mockapi.io/items?category=' + categoryId)
        .then((res) => res.json())
        .then((arr) => {
            setIems(arr);
            setIsLoading(false);
        });
    }, [categoryId, sortType]);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => 
                    setCategoryId(i)} />
                <Sort value={sortType} onChangeSort={(i) => 
                    setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) 
                : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    );
};

export default Home;