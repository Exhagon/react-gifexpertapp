import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = ()=>{
    // const categories = ['Naruto','Kimetsu no Yaiba','Inazuma Eleven'];
    const [categories, setCategories] = useState(['Inazuma Eleven']);
    // const handleAdd = ()=>{
    //     // setCategories(...categories, 'El pepe');
    //     setCategories(cats => [...cats,'el pepe']);
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            category = {category}
                            key = {category}
                        />
                    ))
                }
            </ol>
        </>

    );
}