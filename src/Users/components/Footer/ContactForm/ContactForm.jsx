import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    areaCode: '',
    phoneNumber: '',
    extension: '',
    email: '',
    company: '',
    stateProvince: '',
    country: '',
    consentChecked: false,
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        color: 'black',
        boxShadow: '0px 20px 15px -3px rgba(0,0,0,0.1),0px -12px 15px -3px rgba(0,0,0,0.1)',
        width: 'fit-content',
        padding: '1rem',
        margin: 'auto',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="First Name"
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Last Name"
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            label="Area Code"
            type="number"
            onChange={(e) => handleInputChange('areaCode', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            label="Phone Number"
            type="number"
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            label="Extension"
            type="number"
            onChange={(e) => handleInputChange('extension', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            label="Email"
            type="email"
            onChange={(e) => handleInputChange('email', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            label="Company"
            onChange={(e) => handleInputChange('company', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            select
            label="State/Province"
            onChange={(e) => handleInputChange('stateProvince', e.target.value)}
            fullWidth
          >
            {provinces.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            select
            label="Country"
            onChange={(e) => handleInputChange('country', e.target.value)}
            fullWidth
          >
            {countries.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={CheckboxMessage}
              onChange={(e) => handleInputChange('consentChecked', e.target.checked)}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={12}>
          <StyledTextareaAutosize
            aria-label="empty textarea"
            minRows={5}
            cols={63}
            onChange={(e) => handleInputChange('message', e.target.value)}
            sx={{ padding: '0.8rem 0 0 0.7rem', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: 'red' }}
          >
            Button
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
