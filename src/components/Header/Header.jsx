import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const Header = () => {
    const [form, setForm] = useState()
    const handleChange = (e) => {
        setForm({ ...form, title: e.target.value })
        console.log(form)
    }
    return (
        <Grid gap={10}>
            <Grid container justifyContent={'center'}>
                <h2>Shopify</h2>
            </Grid>
            <Grid container justifyContent={'center'}>
                <TextField onChange={handleChange} style={{ width: "60%" }} id="outlined-basic" label="Search" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Header