import React from 'react'

export const GifGridItem = ({id,tittle,url}) => {
    console.log({id,tittle,url});
    return (
        <div className='card animate__animated animate__flash'> 
            <img src = {url} alt = {tittle}/>
            <p>{tittle}</p>
        </div>
    )
}
