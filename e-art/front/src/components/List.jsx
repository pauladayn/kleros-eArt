import React from 'react'
import Card from './Card';

const List = ({urls}) => {
    
    return (
        <div className='w-9/12 h-auto mx-auto pb-20'>
            <p className='font-mono mb-3'>Lorem ipsum</p>
            <hr />
            <div className='bg-secondary w-11/12 mx-auto flex overflow-x-scroll'>
                {urls && urls.map((url, i) => {
                 return <Card data={url} key={i} />
                })}
            </div>
        </div>
    )
}

export default List