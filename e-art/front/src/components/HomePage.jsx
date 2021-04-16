import React from 'react'
import List from './List';
import CustomCarousel from './CustomCarousel';
import { useSelector } from "react-redux";

const HomePage = () => {
    const urls = useSelector(state => state.nfts)

        return (
        <div className=''>
            <h1 class='font-mono text-8xl text-center text-primary'>E-Art</h1>
            <CustomCarousel />
            <List urls={urls} />
            {/* <List urls={urls}/> */}
            {/* <List urls={urls}/> */}
        </div>
    )
}

export default HomePage
