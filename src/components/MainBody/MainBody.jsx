import { Grid } from '@mui/material'
import React from 'react'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'
import Information from '../Information/Information'
import OtherProduct from '../OtherProduct/OtherProduct'
const MainBody = () => {
    return (
        <Grid>
            <Grid display={{ md: "flex" }} pr={{lg:"7%"}} gap={{lg:"0%"}}>
                <Grid width={{md:"75%" , lg:"42%"}}>
                    <Main />
                </Grid>
                <Grid display={{ xs: "flex" }} alignItems={{ xs: "center", md: "none" }} justifyContent={{ xs: "center", md: "none" }} >
                    <img src={require('../../assets/image/astera-pic-1.jpg')} alt='pic' style={{ width: "90%", height: "568px", borderRadius: "16px" }} />
                </Grid>
            </Grid>
            <Grid display={{ md: "flex" }} gap={{ lg: "50px" }} pr={{ lg: "100px" }} >
                <Grid width={{ md: "55%" , lg:"52.5%" }} pt={{ md: "48px" }} pr={{ md: "30px" }}>
                    {/* right */}
                    <Navbar />
                    <Body />
                </Grid>
                <Grid width={{ md: "50%", lg: "41%" }}>
                    {/* left */}
                    <Main />
                    <Information />
                </Grid>
            </Grid>
            <Grid pr={{ lg: "4.5%" }}>
                <OtherProduct />
            </Grid>

        </Grid>
    )
}

export default MainBody