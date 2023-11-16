// Your main component file

import React from 'react';
import CategoriesSection from "../CategoriesSection/CategoriesSection.jsx";

const CategoriesData = () => {
    const categories = [
        { id: 1, name: 'New Merch', imageUrl: 'https://via.placeholder.com/100/3498db/ffffff' }, // Blue
        { id: 2, name: 'Outlet', imageUrl: 'https://via.placeholder.com/100/e74c3c/ffffff' }, // Red
        { id: 3, name: 'Combos', imageUrl: 'https://via.placeholder.com/100/2ecc71/ffffff' }, // Green
        // Add more categories with color images as needed
    ];

    return (
        <div>
            <CategoriesSection categories={categories} />
        </div>
    );
};

export default CategoriesData;
