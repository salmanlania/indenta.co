import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 600, // Set your desired max width for responsiveness
        margin: 'auto',
        marginBottom: 16,
    },
    media: {
        width: 100, // Adjust the image width as needed
        height: 300, // Adjust the image width as needed
        objectFit: 'cover',
    },
    content: {
        flex: 1,
        padding: 16,
    },
});

function HomeVideo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem',  paddingBottom: '1rem' ,  }}>

            <Paper elevation={3} sx={{ maxWidth: 600,  paddingBottom: '2rem', marginLeft: '23rem', boxShadow: 'none' }}>
                <iframe
                style={{border : '1px solid black'}}
                    width="130%"
                    height="435"
                    // src="https://www.youtube.com/embed/JIF5sJVKmD0?si=iFHDbhQRu_jLjFkR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Paper>
            {/* <Box
                sx={{
                    background: '#23568B',
                    color: '#ffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
                    paddingTop: '7em',
                    paddingBottom: '11em'
                }}>
                <Typography variant="body2" component="div" sx={{ fontSize: '1.1rem', maxWidth: '40rem', textAlign: 'center' }}>
                    Three Steps to Success
                </Typography>
                <Typography variant="h2" component="div" sx={{ maxWidth: '30rem', textAlign: 'center' }}>
                    Improve Your Bottom Line
                </Typography>
                <Typography variant="body2" component="div" sx={{ fontSize: '1.1rem', maxWidth: '40rem', textAlign: 'center' }}>
                    We have the tools and expertise needed to reduce your operating costs while improving key performance metrics important to your organization.
                </Typography>
            </Box>

            <Box sx={{ boxShadow: '0px 20px 15px -3px rgba(0,0,0,0.1),0px -12px 15px -3px rgba(0,0,0,0.1)' }}>
                <Paper sx={{ padding: '5em', boxShadow: '0px 20px 15px -3px rgba(0,0,0,0.1),0px -12px 15px -3px rgba(0,0,0,0.1)' }}>
                    <Typography variant='h4'>
                        Stress-free Inbound & Outbound Services and Telemarketing Compliance.
                    </Typography>
                    <Typography variant='h4'>
                        Imagine how it will feel to hit your sales goals, instead of worrying about how to get there.
                    </Typography>
                </Paper>
            </Box> */}
        </div>
    )
}

export default HomeVideo