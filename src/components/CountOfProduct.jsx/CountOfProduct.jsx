import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const CountOfProduct = () => {


    const [count, setCount] = useState(1)


    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleDelete = ()=>{
        setCount(0)
    }

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} gap={2} >
            {count === 1 ? <Button onClick={handleDelete} color='error' variant='contained' sx={{ minWidth: "10px" }} size='small'><DeleteIcon fontSize='medium' /></Button> : <Button onClick={handleDecrement} sx={{ minWidth: "30px" }} size='small' variant='contained' color='error' >-</Button>}
            <Grid>
                <Typography variant='h6'>
                    {count}
                </Typography>
            </Grid>
            <Button onClick={handleIncrement} sx={{ minWidth: "30px" }} size='small' variant='contained' color='success' >+</Button>
        </Grid>
    )
}

export default CountOfProduct