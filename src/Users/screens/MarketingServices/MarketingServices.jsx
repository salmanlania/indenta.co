import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography, Container, Paper, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firsticon from './Images/firsticon.png';
import thirdicon from './Images/thirdicon.png';
import secondicon from './Images/secondicon.png';
import MarketingBg from './Images/marketingBg.png';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import TypingEffect from 'react-typing-effect';

export const MarketingServices = () => {
    useEffect(() => {
        document.title = 'Marketing Services | Indenta';
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
        <div>
            <Navbar />
            <Paper>
                <Grid container >
                    {/* Marketing Services Header */}
                    <Grid item xs={12}>
                        <Card
                            sx={{
                                
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: '"Lora", serif !important',
                                backgroundImage: `linear-gradient(rgba(6, 35, 65, 0.835), rgba(6, 37, 68, 0.855)), url(${MarketingBg})`,
                                width: '100%',
                                height: '20rem',
                            }}
                        >
                            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }} data-aos="fade-up" data-aos-duration="2000">
                                <Typography variant="h2" sx={{ fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                    Marketing Services
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    component="div"
                                    sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                        maxWidth: '60rem',
                                        fontSize: '22px',
                                    }}
                                >
                                    <TypingEffect
                                        text={[
                                            'Indenta DSA stands as a leading financial and marketing consultancy, committed to delivering customer services across diverse channels within the financial industry.',
                                        ]}
                                        speed={30}
                                        eraseSpeed={25}
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Introduction */}

                    {/* Consultation Section */}
                    <Grid item xs={12} sm={6} md={4} >
                        <Card sx={{ display: 'flex', flexDirection: 'column', padding: '4rem', gap: '2rem', alignItems: 'center', width: '100vw', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} data-aos="fade-right" data-aos-duration="400">
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                Consult our Expert
                            </Typography>
                            <Button variant="contained" color="primary" sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                color: 'white',
                                outline: 'none',
                                border: 'none',
                                width: '15em',
                                borderRadius: '4rem',
                                height: '3em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                Book an Appointment
                            </Button>
                        </Card>
                    </Grid>



                    {/* Offered Services Section */}
                    <Grid item xs={12} sx={{background : '#23568B', marginBottom : '1.4rem'}}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                maxWidth: '68rem',
                                margin: 'auto',
                                color : 'white',
                                padding: '2rem',
                                display : 'flex',
                                background : 'transparent',
                                flexDirection : 'column',
                                gap : '2rem',
                                
                            }}
                            data-aos="fade-up-right"
                            data-aos-duration="500"
                        >
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                Our Offered Services
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: '1rem' , fontSize : '1.2rem' }}>
                                Indenta DSA revolves around devising and executing marketing strategies centered on the core of your business. Our commitment extends beyond strategy implementation – we provide steadfast support to help you achieve your business goals and objectives.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid container style={{ display: 'felx', justifyContent: 'center', }}>
                        <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: '2rem' }}>
                            <Card sx={{ borderRadius: '3rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '20rem', height: '40vh' }} data-aos="flip-left" data-aos-duration="500">
                                <img src={firsticon} alt="Icon" style={{ alignItems: 'center', background: '#0f2b52', borderRadius: '50px', color: '#fff', display: 'flex', height: '60px', justifyContent: 'center', marginBottom: '20px', width: '60px' }} />
                                <Typography variant="h2" sx={{ color: '#0f2b52', fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>
                                    Online Marketing
                                </Typography>
                                <Typography variant="p" sx={{ fontWeight: 500, color: '#0f2b52', fontSize: '17px', lineHeight: '24px', marginBottom: '0', maxWidth: '18em' }}>
                                    Swiftly reach your target customers and achieve results with our expertise.
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: '2rem' }}>
                            <Card sx={{ borderRadius: '3rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '20rem', height: '40vh' }} data-aos="flip-left" data-aos-duration="500">
                                <img src={secondicon} alt="Icon" style={{ alignItems: 'center', background: '#0f2b52', borderRadius: '50px', color: '#fff', display: 'flex', height: '60px', justifyContent: 'center', marginBottom: '20px', width: '60px' }} />
                                <Typography variant="h2" sx={{ color: '#0f2b52', fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>
                                    Direct Sales
                                </Typography>
                                <Typography variant="p" sx={{ fontWeight: 500, color: '#0f2b52', fontSize: '17px', lineHeight: '24px', marginBottom: '0', maxWidth: '18em' }}>
                                    Embark on business development and sales activities with our proactive team.
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: '2rem' }}>
                            <Card sx={{ borderRadius: '3rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '20rem', height: '40vh' }} data-aos="flip-left" data-aos-duration="500">
                                <img src={thirdicon} alt="Icon" style={{ alignItems: 'center', background: '#0f2b52', borderRadius: '50px', color: '#fff', display: 'flex', height: '60px', justifyContent: 'center', marginBottom: '20px', width: '60px' }} />
                                <Typography variant="h2" sx={{ color: '#0f2b52', fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>
                                    Telesales
                                </Typography>
                                <Typography variant="p" sx={{ fontWeight: 500, color: '#0f2b52', fontSize: '17px', lineHeight: '24px', marginBottom: '0', maxWidth: '18em' }}>
                                    Via a contact center designed to align with your business goals.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
            <Footer />
        </div >
    );
};
