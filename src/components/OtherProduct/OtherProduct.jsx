import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Basket from '../Basket/Basket';
const OtherProduct = () => {
    return (
        <Grid pt={"22px"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Grid width={"90%"}>
                <Grid>
                    <Typography color={"#FF5500"} fontSize={"32px"} fontWeight={'bold'}>
                        محصولات مشابه
                    </Typography>
                </Grid>
                <Grid display={{ xs: "block", md: "flex" }} gap={{ xs: "0", md: "48px" }} pt={"24px"} pb={"68px"}>
                    <Grid pb={{ xs: "22px", md: "0" }}>
                        <Card sx={{ maxWidth: '391px' }}>
                            <CardActionArea>
                                <img width={"100%"} src={require('../../assets/image/commerce-img.jpg')} alt='pic' />
                                <CardContent>
                                    <Grid display={{ xs: "block", md: "flex" }} alignItems={"center"} justifyContent={{ xs: "center", md: "space-between" }}>
                                        <Basket />
                                        <Typography pt={{ xs: "15px", md: "0" }} textAlign={"center"} fontSize={{Xs:"20px" , md:"18px"}}>
                                            419,000 تومان
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card sx={{ maxWidth: '391px' }}>
                            <CardActionArea>
                                <img width={"100%"} src={require('../../assets/image/amazon-clone-img.jpg')} alt='pic' />
                                <CardContent>
                                    <Grid display={{ xs: "block", md: "flex" }} alignItems={"center"} justifyContent={{ xs: 'center', md: "space-between" }}>
                                        <Basket />
                                        <Typography pt={{ xs: "15px", md: "0" }} textAlign={"center"} fontSize={{Xs:"20px" , md:"18px"}}>
                                            219,000 تومان
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OtherProduct