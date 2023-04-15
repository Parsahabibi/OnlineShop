import { Grid , Button , Typography } from '@mui/material'
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import React from 'react'

const Show = () => {
    return (
        <Grid width={{xs:"92%" , md:"55%"}} >
            <Button style={{ borderRadius: "16px"  , width:"100%"}} variant='outlined' color='warning' >
                <Grid gap={1} display={'flex'} alignItems={'center'} justifyContent={'center'} pr={2.5} pl={2.5} py={{md:"4px" , lg:"1px"}}>
                    <AirplayOutlinedIcon style={{ width: "15px", height: "15px" }} />
                    <Typography fontSize={{md:"12px" , lg:"16px"}}>
                        {'پیش نمایش'}
                    </Typography>
                </Grid>
            </Button>
        </Grid>
    )
}

export default Show