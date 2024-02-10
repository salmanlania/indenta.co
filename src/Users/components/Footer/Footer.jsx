import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';
import { List, ListItem, ListItemText, AppBar, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const provinces = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "Washington DC", "West Virginia", "Wisconsin", "Wyoming", "Other (International)"
];

const countries = ['USA', 'Canada', 'Other'];

const CheckboxMessage = 'By checking the box, I give express written consent to receive sales communication via SMS/MMS from AnswerNet. Carrier rates may apply.';
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
        <section style={{ background: '#23568B', color: 'white', height: '49em', padding: '1rem' }}>
            <div>
                <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        <Typography variant='h5'>Contact Us</Typography>
                        <List>
                            <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '1rem' }}>
                                <LocationOnIcon sx={{ color: 'white' }} />
                                <ListItemText primary="Your Location" sx={{'&:hover': {color : 'red' , transition : '1s' , cursor : 'pointer'}}} />
                            </ListItem>

                            <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '1rem' }}>
                                <PhoneEnabledIcon sx={{ color: 'white' }} />
                                <ListItemText primary="Your Phone Number" sx={{'&:hover': {color : 'red' , transition : '1s' , cursor : 'pointer'}}} />
                            </ListItem>

                            <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '1rem' }}>
                                <PhoneEnabledIcon sx={{ color: 'white' }} />
                                <ListItemText primary="Your Phone Number" sx={{'&:hover': {color : 'red' , transition : '1s' , cursor : 'pointer'}}} />
                            </ListItem>

                            <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '1rem' }}>
                                <EmailIcon sx={{ color: 'white' }} />
                                <ListItemText primary="Your Email Address" sx={{'&:hover': {color : 'red' , transition : '1s' , cursor : 'pointer'}}} />
                            </ListItem>
                        </List>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '23ch' },
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                background: 'white',
                                color: 'black',
                                boxShadow: '0px 20px 15px -3px rgba(0,0,0,0.1),0px -12px 15px -3px rgba(0,0,0,0.1)',
                                width: 'fit-content',
                                padding: '1rem 0.5rem 1rem 1rem',
                                height: '40rem'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    title='Please fill out this field'
                                    style={{ width: '230px' }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    title='Please fill out this field'
                                    style={{ width: '230px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="Area Code"
                                    type="number"
                                    title='Please fill out this field'
                                    style={{ width: '148px' }}
                                />
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="Phone Number"
                                    type="number"
                                    title='Please fill out this field'
                                    style={{ width: '148px' }}
                                />
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="Extension"
                                    type="number"
                                    title='Please fill out this field'
                                    style={{ width: '148px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    required
                                    id="fullWidth"
                                    label="Email"
                                    type="email"
                                    title='Please fill out this field'
                                    style={{ width: '474px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Company"
                                    title='Please fill out this field'
                                    style={{ width: '474px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="State/Province"
                                    title='Please fill out this field'
                                    style={{ width: '272px' }}
                                >
                                    {provinces.map((option, index) => (
                                        <MenuItem key={index} value={option} >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Country"
                                    title='Please fill out this field'
                                    style={{ width: '185px' }}
                                >
                                    {countries.map((option, index) => (
                                        <MenuItem key={index} value={option} >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <FormGroup sx={{ maxWidth: '500px' }}>
                                    <FormControlLabel control={<Checkbox />} label={CheckboxMessage} sx={{ fontSize: '10px !important' }} />
                                </FormGroup>
                                <StyledTextareaAutosize aria-label="empty textarea" minRows={5} Cols={63} sx={{ padding: '0.8rem 0 0 0.7rem' }} />
                                <div>
                                    <Button variant="contained" color="primary" style={{ backgroundColor: 'red', }}>Button</Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </section>
                <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem' , marginTop : '1.5rem' , opacity : '0.9' , cursor : 'pointer' }}>
                    <Typography variant='body1' sx={{fontSize : '0.9rem' , '&:hover': {color : 'red' , transition : '1s'}}}>Home</Typography>
                    <Typography variant='body1' sx={{fontSize : '0.9rem' , '&:hover': {color : 'red' , transition : '1s'}}}>Sitemap</Typography>
                    <Typography variant='body1' sx={{fontSize : '0.9rem' , '&:hover': {color : 'red' , transition : '1s'}}}>Terms & Conditions</Typography>
                    <Typography variant='body1' sx={{fontSize : '0.9rem' , '&:hover': {color : 'red' , transition : '1s'}}}>Privacy Policy</Typography>
                </section>
                <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem' , marginTop : '.5rem' , opacity : '0.9' }}>
                    <Typography variant='body1' sx={{fontSize : '0.9rem' }}>&#169; 2007-2022 Quality Contact Solutions, Inc.</Typography>
                </section>
            </div>
        </section>
    );
};
