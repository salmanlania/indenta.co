import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, Container, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

import exclusive from './images/banking.png'
import effortless from './images/effortless.png'
import customer from './images/customer.png'
import trust from './images/Trust.png'

import creditCard from './images/credit-Card.png'
import bankingFacilitation from './images/banking-facilitation.png'
import autoLoan from './images/auto-loan.png'
import mortgageLoan from './images/mortgage-loan.png'
import personalLoan from './images/personal-loan.png'
import smeLoan from './images/sme-loan.png'


const carouselData = [
    {
        title: 'Exclusive Banking Partnerships',
        description:
            'As a leading Channel Partner, we collaborate with multiple banks, providing a spectrum of financial options best suited to your financial requirements.',
        image: `${exclusive}`,
    },
    {
        title: 'Effortless Application Process',
        description:
            'We specialize in simplifying complicated financial processes. We act as a channel, facilitating a seamless and hassle-free application process, saving your time and effort.',
        image: `${effortless}`,
    },
    {
        title: 'Customer-Centric Approach',
        description:
            'Your financial well-being is our priority. Our dedicated team is committed to understanding your needs and delivering personalized solutions that align with your goals.',
        image: `${customer}`,
    },
    {
        title: 'Trust and Reliability',
        description:
            'Backed by a network of reputable banking institutions, we stand on the highest standards of trust and reliability in every financial transaction.',
        image: `${trust}`,
    },
];
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

export default function WhyChooseUs() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const autoChange = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => {
            clearInterval(autoChange);
        };
    }, [index]);

    return (
        <Container maxWidth="xl" style={{ marginTop: '1px', background: '#23568B', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingBottom : '4rem'}}>
            <Typography variant="h5" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                Why Choose Us
            </Typography>
            <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            position: 'relative',
                            textAlign: 'center',
                            transform: 'scale(1.1,1)',
                            overflow: 'hidden',
                            color: 'white',
                            height: '30rem',
                            maxWidth: '50rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            transition: 'opacity 0.5s ease-in-out', // Add a transition property
                            opacity: 1, // Set initial opacity to 1
                        }}
                        style={{
                            background: `linear-gradient(rgba(6, 35, 65, 0.8), rgba(6, 37, 68, 0.6)), url(${carouselData[index].image}) center/cover no-repeat`,
                            margin: 'auto', // Center the Paper component
                        }}
                    >
                        <Typography variant="h5" sx={{ marginBottom: '15px', zIndex: 2 }}>
                            {carouselData[index].title}
                        </Typography>
                        <Typography variant="body1" sx={{ zIndex: 2 }}>
                            {carouselData[index].description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    );
}
