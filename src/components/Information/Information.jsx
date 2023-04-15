import React from 'react'
import { Grid, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const Information = () => {

    const list = [
        { id: 1, title: "ورژن", description: "1.0.5" },
        { id: 1, title: "تاریخ انتشار ", description: "24 فروردین 1402" },
        { id: 1, title: "موضوع", description: "افزونه وردپرس" },
    ]


    return (
        <Grid display={"flex"} alignItems={"center"} justifyContent={{xs:"center" , md:"flex-start"}} pr={{md:"25px"}} >
            <Grid pt={"16px"} width={{xs:"90%" , md:"70%"}} boxShadow={5} borderRadius={"16px"} >
                <Grid>
                    {
                        list.map(item =>
                            <Grid pr={"20px"} pb={"16px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"90%"} key={item.id} >
                                <Typography>{item.title} </Typography>
                                <Typography>{item.description} </Typography>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid pb={"20px"} width={"90%"} gap={"24px"} display={"flex"} alignItems={"center"} justifyContent={"flex-end"} >
                    <FavoriteBorderIcon color='warning' />
                    <ShareIcon color='warning' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Information