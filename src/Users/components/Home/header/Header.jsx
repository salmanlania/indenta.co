import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Paper, Grid, Typography, Container, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import image from './images/carousel-4.jfif'
import TypingEffect from 'react-typing-effect';

import creditCard from './images/credit-Card.png'
import bankingFacilitation from './images/banking-facilitation.png'
import autoLoan from './images/auto-loan.png'
import mortgageLoan from './images/mortgage-loan.png'
import personalLoan from './images/personal-loan.png'
import smeLoan from './images/sme-loan.png'
import { FitScreen } from '@mui/icons-material';

const servicesData = [
    {
        title: 'Credit Card',
        // image: 'https://via.placeholder.com/150',
        image: `${creditCard}`
    },
    {
        title: 'Banking Facilitation',
        // image: 'https://via.placeholder.com/150',
        image: `${bankingFacilitation}`
    },
    {
        title: 'Personal Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${personalLoan}`
    },
    {
        title: 'Auto Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${autoLoan}`
    },
    {
        title: 'Mortgage Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${mortgageLoan}`
    },
    {
        title: 'SME Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${smeLoan}`
    },
];

export default function Header() {
    return (
        <AppBar position="static" style={{ background: `linear-gradient(rgba(6, 35, 65, 0.8), rgba(6, 37, 68, 0.6)), url('${image}') center center`, backgroundSize: 'cover', minHeight: '80vh' }}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem', gap: '3rem' }}>
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                        maxWidth: '60rem',
                        fontSize: '4.4rem',
                    }}
                >
                    Indenta
                </Typography>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                        maxWidth: '60rem',
                    }}
                >
                    <TypingEffect
                        text={[
                            'Indenta DSA is a premier Direct Sales Agency and Consultancy in the heart of the UAE.',
                        ]}
                        speed={50}
                        eraseSpeed={30}
                    />
                </Typography>
                {/* <Typography variant="h5" style={{ fontSize: '2rem', fontWeight: 'bold',  color: 'white' }}>
                    Popular Services
                </Typography> */}
                <Grid container sx={{
                    display: 'flex',
                    justifyContent : 'space-evenly',
                    flexWrap : 'wrap'
                }}>
                    {servicesData.map((service, i) => (
                        <Card style={{
                            // background: 'transparent',
                            borderRadius : '2rem',
                            marginTop: '5rem',
                        }}>
                            <CardMedia
                                component="img"
                                height="100"
                                image={service.image}
                                alt="Your Image Alt Text"
                            />
                        </Card>
                    ))}
                </Grid>
            </Toolbar>

        </AppBar>
    );
};

