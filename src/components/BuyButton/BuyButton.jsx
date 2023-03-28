import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const BuyButton = () => {

    const [button, setButton] = useState(true)

    const [count, setCount] = useState(1)


    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    
    const handleShowButton = () => {
        setButton(!button)
    }



    return (
        <Grid pt={1}>
            {button === false ? <Grid container justifyContent={'center'} alignItems={'center'} gap={2} >
                {count === 0 ? setButton(!button) : count === 1 ? <Button onClick={handleShowButton} color='error' variant='contained' sx={{ minWidth: "10px" }} size='small'><DeleteIcon fontSize='medium' /></Button> : <Button onClick={handleDecrement} sx={{ minWidth: "30px" }} size='small' variant='contained' color='error' >-</Button>}
                <Grid>
                    <Typography variant='h6'>
                        {count}
                    </Typography>
                </Grid>
                <Button onClick={handleIncrement} sx={{ minWidth: "30px" }} size='small' variant='contained' color='success' >+</Button>
            </Grid>
                :
                <Button onClick={handleShowButton} variant='contained' color='warning' >Add To Cart</Button>
            }
        </Grid>
    )
}

export default BuyButton