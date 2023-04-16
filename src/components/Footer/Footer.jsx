import { Grid, Typography } from '@mui/material'
import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import hand from "../../assets/image/Frame 7.jpg"
import principle from "../../assets/image/Frame 8.jpg"
import about from "../../assets/image/Frame 10.jpg"
import whatsApp from "../../assets/image/whatsapp-icon.jpg"
import linkdin from "../../assets/image/linkdin-icon.jpg"
import instagram from "../../assets/image/instagram-icon.jpg"
import image1 from '../../assets/image/digital-media-logo.jpg'
import image2 from '../../assets/image/social-media-logo.jpg'

const Footer = () => {

    const list = [
        { id: 1, image: hand, title: "همکاری با ناهیرا" },
        { id: 2, image: principle, title: "قوانین ناهیرا" },
        { id: 3, image: about, title: "درباره ی ناهیرا" },
    ]


    const icon = [
        { id: 1, image: whatsApp },
        { id: 2, image: linkdin },
        { id: 3, image: instagram },
    ]

    const image = [
        { id: 1, image: image1 },
        { id: 2, image: image2 }
    ]


    return (
        <Grid display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Grid width={'100%'} display={{ xs: "block", md: 'flex' }} justifyContent={{ md: "space-around" }} boxShadow={5} pb={"51px"}>
                <Grid width={{ md: "300%", lg: "130%" }}>
                    {/* right */}
                    <Grid pr={"3%"} pb={"48px"} display={{ xs: "block", md: "flex" }} alignItems={"center"} width={{ xs: "93%", md: "100%" }} pt={"48px"} gap={{ xs: "10px" }} >
                        {/* top */}
                        <Grid display={"flex"} justifyContent={"center"} pl={{xs:"15px" , md:"0px"}} > 
                            <img src={require('../../assets/image/nahira-logo.jpg')} alt='pic' />
                        </Grid>
                        {/* start change */}
                        <Typography textAlign={{xs:"center" , md:"right"}}  fontSize={{ xs: "16px", md: "20px" }}>ناهیرا خدمات مشاوره کسب و کار، برنامه نویسی ، مارکتینگ ، تحلیل کسب کار ، بازاریابی و برندینگ ارائه میدهد. </Typography>
                    </Grid>
                    <Grid display={"flex"} justifyContent={"center"} pr={{ md: "5%" }} >
                        <Grid borderTop={1} width={{ xs: "90%", md: "100%" }}></Grid>
                    </Grid>
                    <Grid display={{ md: "flex" }} alignItems={{ md: "baseline" }}>
                        {/* buttom */}
                        <Grid pr={{ xs: "5%" }} pt={{ xs: "30px", md: "55px" }} display={"flex"} flexDirection={"column"} gap={"20px"}  >
                            {/* right */}
                            <Grid>
                                <Typography fontSize={{ xs: "15px", md: "15px" }} fontWeight={"bold"} >ارتباط با ما</Typography>
                            </Grid>
                            <Grid display={"flex"} alignItems={"center"} gap={"10px"}>
                                <CallOutlinedIcon style={{ width: "24px", height: "24px" }} />
                                <Typography fontSize={{ xs: "15px" }} >021 4421 9671</Typography>
                            </Grid>
                            <Grid display={"flex"} alignItems={"center"} gap={"10px"}>
                                <FmdGoodOutlinedIcon style={{ width: "24px", height: "24px" }} />
                                <Typography fontSize={{ xs: "15px" }} width={{ xs: "80%" }}>چهار راه عمران جنب جهاد کشاورزی، طبقه فوقانی رستوران آرمانی . طبقه ۲ شرکت ناهیرا</Typography>
                            </Grid>
                        </Grid>
                        <Grid width={{ xs: "90%", md: "135%", lg: "105%" }} display={{ xs: "flex", md: "block" }} justifyContent={{ xs: "space-between", md: "none" }} pt={{ xs: "30px" }}>
                            {/* left */}
                            <Grid pb={{ xs: "15px" }} display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={{ xs: "15px", md: "30px" }} pr={{ xs: "5%" }} >
                                {
                                    list.map(item =>
                                        <Grid display={"flex"} gap={"5px"} key={item.id} >
                                            <img src={item.image} alt={"pic"} style={{ width: "24px", height: "24px" }} />
                                            <Typography fontSize={{ xs: "15px", md: "14px" }}>
                                                {item.title}
                                            </Typography>
                                        </Grid>
                                    )
                                }
                            </Grid>
                            <Grid display={"flex"} flexDirection={"column"} gap={"20px"} pr={{ xs: "6.5%", md: "2%", lg: "18%" }} pt={{ md: '30px' }}>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography fontSize={"15px"}>همراه ما باشید!</Typography>
                                </Grid>
                                <Grid display={"flex"} alignItems={"center"} gap={"15px"} pr={{ md: "40%", lg: "35%" }}>
                                    {
                                        icon.map(
                                            item =>
                                                <Grid key={item.id} >
                                                    <img src={item.image} alt='pic' />
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width={{ xs: "97%" }} pt={"30px"} display={"flex"} justifyContent={{ xs: "space-between", md: "center" }} alignItems={{ md: "center" }} >
                    {/* left */}
                    {
                        image.map(
                            item =>
                                <Grid key={item.id}>
                                    <img style={{ width: "130px" }} src={item.image} alt='pic' />
                                </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer