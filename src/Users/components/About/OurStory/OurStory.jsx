import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Image from './images/ceo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const ourDescriptionOne = "Indenta DSA stands as a dynamic force in the UAE’s direct sales landscape, experiencing rapid growth under the strategic vision of Kamil Hafeez. Founded on the principles of customer satisfaction, teamwork, and exemplary service, Indenta DSA has emerged as a prominent player, offering an extensive array of services to banks and financial institutions in the UAE. Specializing in personal loans, financing, and credit card sales, Indenta DSA is dedicated to facilitating the financial aspirations of individuals and businesses alike."

const ourDescriptionTwo =
    "Indenta DSA stands out as one of the fastest-growing direct sales agencies in the UAE. Rooted in the principles of customer satisfaction, teamwork, and superior service, Indenta DSA offers an extensive suite of services to banks and financial institutions across the UAE. Specializing in personal loans, financing, and credit card sales, we take pride in being your all-encompassing financial solution. Acting as a strong bridge between banks and customers, our mission is to secure the best finance options for you. If you’re in search of a personal loan, rest assured that Indenta DSA can facilitate loans through leading banks with nominal interest rates, eliminating the need for you to leave your comfort zone. Our dedicated team ensures a hassle-free application process, with the convenience of visits to your location for streamlined processing. Our expertise spans from direct sales to marketing, reflecting our deep industry knowledge and commitment to providing exceptional value. Indenta DSA comprises a team of professional bankers committed to legitimacy and accountability in every endeavor";

const OurStory = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        window.addEventListener('scroll', AOS.refresh);
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        };
    }, []);

    const handleReadMore = () => {
        setShowFullDescription(true);
    };
    const handleToggleDescription = () => {
        setShowFullDescription((prev) => !prev);
      };
    

    return (
        <div style={{ background: 'white' }} component="div" maxWidth={false} disableGutters>
            <Container maxWidth="xl" style={{ background: '#23568B', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" style={{ marginBottom: '1rem', fontWeight: 'bold', color: 'white', display: 'flex', justifyContent: 'center' }}>
                    Our Story
                </Typography>
            </Container>
            <Paper>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <img
                            src={Image}
                            alt="Company Banner"
                            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                            <Typography
                                variant="h4"
                                sx={{ marginTop: 2, fontWeight: 'bold', color: '#2c3e50' , textAlign : 'center' }}
                            >
                                Welcome to Indenta DSA
                            </Typography>
                            <Typography
                                paragraph
                                    sx={{
                                        margin: 0,
                                        padding: '2rem',
                                        paddingBottom: '4rem',
                                        fontSize: 18,
                                        lineHeight: 1.6,
                                        color: '#555',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        zIndex: 999, // Ensure the card is on top
                                        overflowY: 'auto', // Enable vertical scrolling if content exceeds screen height
                                    }}
                            >
                                {isMobile && !showFullDescription
                                ? `${ourDescriptionOne.slice(0, 300)}... `
                                : ourDescriptionOne}
                            {isMobile && (
                                <span style={{ color: '#23568B', cursor: 'pointer', marginLeft : '3px' , textDecoration : 'underline blue' , color : 'blue'}} onClick={handleToggleDescription}>
                                    {showFullDescription ? 'Read less' : 'Read more'}
                                </span>
                            )}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container >
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ mt: 4, textAlign: 'center', width: '100vw', overflow: 'hidden', background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)', height: '3rem', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ margin: 'auto', color: 'white' }}>
                                Our Mission and Specialization
                            </Typography>
                        </Paper>
                        <Card
                            sx={{
                                margin: 0,
                                padding: '2rem',
                                paddingBottom: '4rem',
                                fontSize: 18,
                                lineHeight: 1.6,
                                color: '#555',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                zIndex: 999, // Ensure the card is on top
                                overflowY: 'auto', // Enable vertical scrolling if content exceeds screen height
                            }}
                        >
                            {isMobile && !showFullDescription
                                ? `${ourDescriptionTwo.slice(0, 300)}... `
                                : ourDescriptionTwo}
                            {isMobile && (
                                <span style={{ color: '#23568B', cursor: 'pointer', marginLeft : '3px' , textDecoration : 'underline blue' , color : 'blue'}} onClick={handleToggleDescription}>
                                    {showFullDescription ? 'Read less' : 'Read more'}
                                </span>
                            )}
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default OurStory;
