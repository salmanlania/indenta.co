import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function IndentaInfo() {
    return (
        <div style={{ background: '#23568B', color: 'black' }}>
            <AppBar position="static" sx={{ background: 'white' , color: 'black'}}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem', gap: '2rem', marginBottom: '2rem' }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            margin: 'auto',
                            maxWidth: '90rem',
                            fontSize: '2.4rem',
                            marginBottom: '1rem',
                            fontWeight : 'bold'
                        }}
                    >
                        Careers at Indenta DSA
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            margin: 'auto',
                            maxWidth: '77rem',
                            fontSize: '1.2rem',
                        }}
                    >
                        Indenta DSA transforms individuals into skilled professionals. Renowned for our
                        training excellence, we aspire to be a continuously award-winning direct sales
                        agency in the UAE. We hire individuals for diverse roles across our teams. If you
                        are seeking a career in marketing, sales, or banking sectors, we invite you to
                        explore the opportunities available at Indenta DSA.
                    </Typography>
                    {/* <Typography
            variant="body1"
            component="div"
            sx={{
              textAlign: 'center',
              margin: 'auto',
              maxWidth: '87rem',
              fontSize: '1.1rem',
            }}
          >
            Once you set your teams up for success by leveraging our telemarketing services, you’ll be confident in your ability to successfully achieve company objectives.
          </Typography> */}
                </Toolbar>

            </AppBar>
        </div>
    )
}
