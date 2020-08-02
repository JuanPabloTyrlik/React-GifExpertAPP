import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);
    // const [categories, setCategories] = useState([
    //     'Shingeki no Kyojin',
    //     'Kimetsu no Yaiba',
    //     'One-Punch Man',
    //     "Jojo's Bizarre Adventure",
    // ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}

export default GifExpertApp;
