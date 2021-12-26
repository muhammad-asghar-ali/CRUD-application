import React from 'react';
import { Box, Typography } from '@material-ui/core';
import crud from '../assets/images/CRUD.jpg'; 

const Home = () => {
    return (
        <Box>
            <Typography variant='h4' style={{margin:"40px 0 0 33%"}}>CURD Oparetion Application</Typography>
            <img src={crud} alt='CRUD operations' style={{margin:"40px 0 0 30%"}}/>
        </Box>
    )
}

export default Home;

