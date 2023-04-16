import { Grid, Typography } from '@mui/material'
import React from 'react'
import Basket from '../Basket/Basket'
import Show from '../Show/Show'

const Main = () => {


    const list = ['گارانتی کیفیت راست چین', 'ضمانت بازگشت 6 ماهه وجه', '6 ماه پشتیبانی رایگان حرفه ای', 'آپدیت رایگان، دسترسی مادام العمر به فایل']


    return (
        <Grid display={{xs:"flex"}} justifyContent={{xs:"center"}} pt={'50px'} pb={"50px"}>
            <Grid width={{xs:"90%"}} borderRadius={"16px"} boxShadow={5}>
                <Grid pr={{ xs: "6.25%" }}>
                    <Grid pt={"72px"} pb={"72px"}>
                        <Typography fontWeight={"bold"} fontSize={{xs:"28px" , md:"32px"}} color={"#FF5500"}>قالب وردپرس استرا </Typography>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"} gap={"5px"}>
                        {
                            list.map((item , index) =>
                                <Grid key={index}>
                                    <Typography fontSize={{xs:"16px" , md:'20px'}}>{item}</Typography>
                                </Grid>
                            )
                        }
                    </Grid>
                    <Grid width={"92%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} pt={"59px"} pb={"66px"}>
                        <Typography fontSize={{xs:"18px" , md:"24px"}} fontWeight={"bold"}>قیمت محصول:</Typography>
                        <Typography fontSize={{xs:"18px" , md:"24px"}}>75,600 تومان</Typography>
                    </Grid>
                    <Grid pl={{xs:"20px" , md:"20px"}} display={"flex"} alignItems={"center"} flexDirection={{ xs: "column", md:"row" }} gap={"20px"} pb={'45px'} >
                        <Basket />
                        <Show />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Main