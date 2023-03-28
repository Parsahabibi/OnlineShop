import { Grid } from '@mui/material'
import React from 'react'
import BuyButton from '../BuyButton/BuyButton'

const Product = ({ product }) => {

    return (
        <Grid pt={5} container justifyContent={'center'} gap={1}>
            {
                product.map(item =>
                    <Grid p={2} width={250} border={1} mb={5} key={item.id}>
                        <Grid container justifyContent={'center'} alignItems={"center"}>
                            <img style={{ width: "80px", height: "80px" }} src={item.image} alt='image' />
                        </Grid>
                        <Grid pt={2} container justifyContent={'center'} alignItems={"center"} textAlign={'center'}>{item.title} </Grid>
                        <Grid container justifyContent={'center'} alignItems={"center"} >
                            <Grid pt={2} container justifyContent={'center'} alignItems={"center"}>{item.price}$ </Grid>
                            <BuyButton />
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Product