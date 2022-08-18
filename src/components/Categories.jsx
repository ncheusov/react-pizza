import { useState } from 'react';

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categoriesList = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ];

    

    return (
        <div className="categories">
            <ul>
                {
                    categoriesList.map((value, i) => (
                        <li 
                            key={i}
                            onClick={() => setActiveIndex(i)} 
                            className={activeIndex === i ? 'active' : ''}> 
                                {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;