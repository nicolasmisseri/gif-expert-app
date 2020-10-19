import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { Gifgrid } from './components/Gifgrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        setCategories = setCategories(['Evangelion', ...categories])
    };


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => <Gifgrid
                        key={category}
                        category={category} />)
                }
            </ol>
        </>
    )
}
