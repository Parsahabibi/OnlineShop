import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Basket = () => {
    return (
        <Grid width={{ xs: "92%", md: "65%" }}>
            <Button style={{ borderRadius: "16px", width: '100%' }} variant='contained' color='warning' >
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} pr={2.5} pl={2.5}>
                    <AddOutlinedIcon style={{ width: "25px", height: "25px" }} />
                    <Typography fontSize={{md:"12px" , lg:"16px"}}>
                        {'افزودن به سبد کالا'}
                    </Typography>
                </Grid>
            </Button>
        </Grid>
    )
}

export default Basket