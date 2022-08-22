// import { useState } from 'react';

function Categories({ value, onClickCategory }) {
    // const [activeIndex, setActiveIndex] = useState(0);

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
                {categoriesList.map((categoryName, i) => (
                        <li 
                            key={i}
                            onClick={() => onClickCategory(i)} 
                            className={value === i ? 'active' : ''}> 
                                {categoryName}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;