import { Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
import Data from '../data/Data'

const Home = () => {
  return (
    <Grid>
        <Header />
        <Data />
    </Grid>
  )
}

export default Home