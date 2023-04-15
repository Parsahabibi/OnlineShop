import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import wordPress from '../../assets/image/wordpress.jpg'
import afzone from '../../assets/image/afzone.jpg'
import html from '../../assets/image/html.jpg'
import js from '../../assets/image/js.jpg'


import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Header = () => {


    const menu = [
        { id: 1, image: wordPress, title: "قالب وردپرس" },
        { id: 2, image: afzone, title: "افزونه وردپرس" },
        { id: 3, image: html, title: "قالب  HTML" },
        { id: 4, image: js, title: "اسکریپت" },
    ]


    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menu.map((text) => (
                    <ListItem key={text.id} disablePadding>
                        <ListItemButton style={{ display: "flex", alignItems: "center", justifyContent: "space-between", alignContent: "center" }}>
                            <ListItemIcon style={{display:"flex" , alignItems:"center" , gap:"5px"}}>
                                <img style={{ width: "20px", height: "20px" }} src={text.image} alt='pic' />
                                <ListItemText primary={text.title} />
                            </ListItemIcon>
                            <KeyboardArrowDownIcon />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Grid display={"flex"} alignItems={"center"} justifyContent={"center"} gap={{ xs: "30%", sm: "70%", md: "2%", lg: "20%" }} boxShadow={5} >
            <Grid display={"flex"} alignItems={"center"}>
                <img style={{ width: "73px", height: "73px" }} src={require('../../assets/image/nahira-logo.jpg')} alt='pic' />
                <Grid display={{ xs: "block", md: "none" }}>
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon color='warning' /> </Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </Grid>
                {/* end designs of mobile menu */}
                <Grid pr={"20px"} display={{ xs: "none", md: "flex" }} gap={2}>
                    {
                        menu.map(item =>
                            <Grid display={"flex"} alignItems={"center"} key={item.id} gap={0.5}>
                                <img style={{ width: "24px", heightL: "24px" }} src={item.image} alt='pic' />
                                <Typography fontSize={{md:"12px" , lg:"16px"}}>{item.title}</Typography>
                                <KeyboardArrowDownIcon />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
            <Grid display={"flex"} gap={2}>
                <Grid display={{ xs: "flex", md: "none" }}>
                    <IconButton color="warning" aria-label="add to shopping cart">
                        <img src={require('../../assets/image/wallet-check.jpg')} alt='pic' />
                    </IconButton>
                    <IconButton color="warning" aria-label="add to shopping cart">
                        <ShoppingBasketOutlinedIcon />
                    </IconButton>
                </Grid>
                {/* button of mobile designs end */}
                <Grid display={{ xs: 'none', md: "flex" }} gap={"24px"} >
                    <Button style={{ borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }} variant='outlined' color='warning'>
                        <img src={require('../../assets/image/wallet-check.jpg')} alt='pic' />
                        <Typography fontSize={{md:"12px" , lg:"16px"}}>پیگیری سفارش</Typography>
                    </Button>
                    <Button style={{ borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }} variant='contained' color='warning'>
                        <Grid container alignItems={"center"} justifyContent={"center"} gap={"5px"} px={"18px"}>
                            <ShoppingBasketOutlinedIcon />
                            <Typography fontSize={{md:"12px" , lg:"16px"}} fontFamily={"Iran"}>سبد خرید</Typography>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header