import React from 'react'
import List from './List';
import CustomCarousel from './CustomCarousel';

const HomePage = (props) => {
        return (
        <div className=''>
            <h1 class='font-mono text-8xl text-center text-primary'>E-Art</h1>
            <CustomCarousel />
            <List />
            <List />
            <List />
        </div>
    )
}

export default HomePage
