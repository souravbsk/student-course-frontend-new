import Footer from '@/Shared/Footer/Footer'
import Header from '@/Shared/Header/Header'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer></Footer>
        </>
    )
}

export default layout
