import { Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
import MainBody from '../components/MainBody/MainBody'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <Grid>
            <Header />
            <MainBody />
            <Footer />
        </Grid>
    )
}

export default Home