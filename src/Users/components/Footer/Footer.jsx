import * as React from 'react';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';
import { List, ListItem, ListItemText, AppBar, Typography, Grid, TextField } from '@mui/material';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from './ContactForm/ContactForm';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledTextareaAutosize = styled(TextareaAutosize)(
  ({ theme }) => `
        box-sizing: border-box;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
        
        &:focus-visible {
          outline: 0;
        }
    `,
);

export const Footer = () => {

  return (
    <section style={{ background: '#23568B', color: 'white', padding: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant='h5'>Contact Us</Typography>
            <List>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
                <LocationOnIcon sx={{ color: 'white' }} />
                <ListItemText primary="Your Location" sx={{ '&:hover': { color: 'red', transition: '1s', cursor: 'pointer' } }} />
              </ListItem>

              <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
                <PhoneEnabledIcon sx={{ color: 'white' }} />
                <ListItemText primary="Your Phone Number" sx={{ '&:hover': { color: 'red', transition: '1s', cursor: 'pointer' } }} />
              </ListItem>

              <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
                <PhoneEnabledIcon sx={{ color: 'white' }} />
                <ListItemText primary="Your Phone Number" sx={{ '&:hover': { color: 'red', transition: '1s', cursor: 'pointer' } }} />
              </ListItem>

              <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
                <EmailIcon sx={{ color: 'white' }} />
                <ListItemText primary="Your Email Address" sx={{ '&:hover': { color: 'red', transition: '1s', cursor: 'pointer' } }} />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <div>
            <ContactForm />
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '1.5rem', opacity: '0.9', cursor: 'pointer' }}>
        <Grid item>
          <Typography variant='body1' sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}>Home</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}>Sitemap</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}>Terms & Conditions</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}>Privacy Policy</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '.5rem', opacity: '0.9' }}>
        <Grid item>
          <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>&#169; 2007-2022 Quality Contact Solutions, Inc.</Typography>
        </Grid>
      </Grid>
    </section>
  );
};
