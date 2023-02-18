import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProductList from '../components/Products/ProductList'
import Whoweare from '../components/Whoweare/Whoweare'

function HomePage() {
    return (
        <>
            <div className='mb-3'>
                <Header />
            </div>
            <div className='container px-0 mb-5'>
                <Banner />
            </div>
             <div className='container px-0'>
                <ProductList />
            </div>
            
            {/* <Whoweare /> */}
            
            <Footer />
        </>
    )
}

export default HomePage