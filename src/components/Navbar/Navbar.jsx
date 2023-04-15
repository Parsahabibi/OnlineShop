import { Button, Grid, Typography } from '@mui/material'
import React from 'react'


const Navbar = () => {
    return (
        <Grid display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Grid py={"16px" } px={{xs:"10px"}} borderRadius={"16px"} width={{ xs: "90%" , md:"100%" }} bgcolor={"#EBEBEB"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                <Grid borderRadius={"16px"} px={{xs:"15px" , md:"58px"}} py={{xs:"6px"}} bgcolor={"#FFFFFF"} >
                    <Button>
                        <Typography fontSize={{xs:"12px" , md:"18px"}} color={"#000000"}>
                            {'توضیحات'}
                        </Typography>
                    </Button>
                </Grid>
                <Grid>
                    <Button>
                        <Typography fontSize={{xs:"12px" , md:"18px"}} color={"#000000"}>
                            {'پرسش و پاسخ'}
                        </Typography>
                    </Button>
                </Grid>
                <Grid>
                    <Button>
                        <Typography fontSize={{xs:"12px" , md:"18px"}} color={"#000000"}>
                            {"پشتیبانی"}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar