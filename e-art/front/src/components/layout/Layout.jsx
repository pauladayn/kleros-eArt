import React from 'react'
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';

const Layout = ({handlePopup, handleWallet, getTokens}) => {
    return (
        <div className='mb-12 min-w-screen font-mono'>
            <Navbar getTokens={getTokens} handlePopup={handlePopup} handleWallet={handleWallet} />
            <SecondNavbar />
        </div>
    )
}

export default Layout
