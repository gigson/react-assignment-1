import React from 'react';

const categoryList = [
    "Computers",
    "Notebooks"
];


function Categories() {
    return (
        <div>
            <select name="category">
            {
                categoryList.map(item => (
                    <option >{item}</option >
                ))

            }
            </select>
        </div>
    );
}

export function isCategoryValid(category){
    return categoryList.includes(category);
}

export default Categories;