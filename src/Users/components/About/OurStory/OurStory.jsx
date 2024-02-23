import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Image from './images/download.jfif';
// import Image from `https://source.unsplash.com/640x480/?placeholder`;
import AOS from 'aos';
import 'aos/dist/aos.css';

const ourDescriptionTwo = "Indenta DSA stands out as one of the fastest-growing direct sales agencies in the UAE. Rooted in the principles of customer satisfaction, teamwork, and superior service, Indenta DSA offers an extensive suite of services to banks and financial institutions across the UAE. Specializing in personal loans, financing, and credit card sales, we take pride in being your all-encompassing financial solution. Acting as a strong bridge between banks and customers, our mission is to secure the best finance options for you. If you’re in search of a personal loan, rest assured that Indenta DSA can facilitate loans through leading banks with nominal interest rates, eliminating the need for you to leave your comfort zone. Our dedicated team ensures a hassle-free application process, with the convenience of visits to your location for streamlined processing. Our expertise spans from direct sales to marketing, reflecting our deep industry knowledge and commitment to providing exceptional value. Indenta DSA comprises a team of professional bankers committed to legitimacy and accountability in every endeavor";

const ourDescriptionOne = "Indenta DSA stands as a dynamic force in the UAE’s direct sales landscape, experiencing rapid growth under the strategic vision of Kamil Hafeez. Founded on the principles of customer satisfaction, teamwork, and exemplary service, Indenta DSA has emerged as a prominent player, offering an extensive array of services to banks and financial institutions in the UAE. Specializing in personal loans, financing, and credit card sales, Indenta DSA is dedicated to facilitating the financial aspirations of individuals and businesses alike."

export const OurStory = () => {
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

    return (
        <Container component="div" maxWidth={false} disableGutters>
            <Container maxWidth="xl" style={{ background: '#23568B', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography variant="h3" style={{ marginBottom: '1rem', fontWeight: 'bold', color: 'white', display: 'flex', justifyContent: 'center', }}>
                    Our Story
                </Typography>
            </Container>
            <Paper elevation={3} style={{ padding: '4rem', minHeight: '100vh' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} data-aos="fade-up" data-aos-duration="1000">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Typography variant="body1" paragraph>
                                {ourDescriptionOne}
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={6} data-aos="fade-up" data-aos-duration="1000">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img src={Image} alt="" style={{ width: '100%', height: '200px' }} />
                        </Box>
                    </Grid> */}
                </Grid>

                <Grid container spacing={3} style={{ marginTop: '2rem', background: '#23568B', color: 'white' }} data-aos="fade-up" data-aos-duration="1000">
                    {/* <Grid item xs={12} md={6} data-aos="fade-up" data-aos-duration="1000">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img src="https://source.unsplash.com/640x480/?placeholder" alt="" style={{ width: '100%', height: '300px' }} />
                        </Box>
                    </Grid> */}

                    <Box
                        textAlign="center"
                    >
                        <Typography variant="body1" paragraph>
                            {ourDescriptionTwo}
                        </Typography>
                    </Box>

                </Grid>
            </Paper>
        </Container>
    );
};