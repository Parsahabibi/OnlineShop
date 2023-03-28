import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product/Product'

const Data = () => {


    const [product, setProduct] = useState([])

    const handleGetData = async () => {
        await axios.get('https://fakestoreapi.com/products').then((res)=>{setProduct(res.data)} , ()=>{console.log('error')})
        
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <Grid>
            <Product product={product} />
        </Grid>
    )
}

export default Data