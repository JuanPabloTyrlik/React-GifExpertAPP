import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'Shingeki no Kyojin',
        'Kimetsu no Yaiba',
        'One-Punch Man',
        "Jojo's Bizarre Adventure",
    ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
