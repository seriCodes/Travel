import React from 'react'
import {Header} from './Header'
import {MainContent} from './MainContent'
import {FooterContainer} from './Footer/FooterContainer'

export const AppContainer = () => {
    return (
        <div className="app-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>


            <Header></Header>
            <MainContent></MainContent>
            <FooterContainer></FooterContainer>
        </div>
    )
}
