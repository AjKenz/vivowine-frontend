import React from 'react'
import Navbar from '../components/navbar'
import bottleBanner from '../assets/images/bannerBottle.png'
import ProductList from '../components/product'
import wine1 from '../assets/images/product-cat/prod1.png'
import wine2 from '../assets/images/product-cat/prod2.png'
import wine3 from '../assets/images/product-cat/prod3.png'

const prodCat = [
    {
        id: '1',
        name: 'Red Wine',
        img: wine1,
    }, {
        id: '2',
        name: 'White Wine',
        img: wine2,
    }, {
        id: '3',
        name: 'Chamoagne',
        img: wine3,
    },
]

const recommended = [
    {
        id: 'a1',
        name: 'Borealis Vintage Cuvee Brut *75cl',
        img: wine1,
        price: '150,300'
    }, {
        id: 'a2',
        name: 'Krone Borealis Vintage Cuvee Brut *75cl',
        img: wine2,
        price: '120,000',
        previousPrice: '180,000'
    }, {
        id: 'a4',
        name: 'Krone Borealis Vintage Cuvee Brut *75cl',
        img: wine3,
        price: '70,000',
    }, {
        id: 'a5',
        name: 'Krone Borealis Vintage Cuvee Brut *75cl',
        img: wine1,
        price: '120,000',
        previousPrice: '150,000'
    }, {
        id: 'a6',
        name: 'Krone Borealis Vintage Cuvee Brut *75cl',
        img: wine1,
        price: '120,000',
        previousPrice: '150,000'
    }, {
        id: 'a7',
        name: 'Krone Borealis Vintage Cuvee Brut *75cl',
        img: wine1,
        price: '120,000',
        previousPrice: '150,000'
    },
]

function HomePage() {
    return (
        <div className='home-container'>
            <section className='header'>
                <Navbar />
                <div className='bottle-banner'>
                    <div className='info-container'>
                        <h1 className='onboarding-text' >Exceptional Wines for <br /> Every Occasion</h1>
                        <button className='vivo-btn'>View Products</button>
                    </div>
                </div>
            </section>
            <section className='product-section'>
                <ProductList
                    cat={true}
                    catName={'Product Category'}
                    description={'Browse through a variety of different wines selections'}
                    data={prodCat}
                />
                <ProductList
                    catName={'Recommended'}
                    data={recommended}
                />
            </section>
        </div>
    )
}

export default HomePage
