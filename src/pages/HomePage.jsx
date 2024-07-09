import React from 'react'
import Navbar from '../components/navbar'
import bottleBanner from '../assets/images/bannerBottle.png'

function HomePage() {
    return (
        <div className='home-container'>
            <section className='header'>
                <Navbar />
                <div className='bottle-banner' />
            </section>
        </div>
    )
}

export default HomePage
