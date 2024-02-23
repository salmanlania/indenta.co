import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firstImage from './images/firstImage.jpg';
import secondImage from './images/secondImage.jpg';
import thirdImage from './images/thirdImage.jpg';
import fourthImage from './images/fourthImage.jpg';

// Initialize AOS outside the component
AOS.init({
  duration: 1000,
  once: false,
});

const useStyles = makeStyles({
  CoreCompetencies: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '2rem',
    marginTop: '2rem',
  },
  CoreCompetenciesHeading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  CoreCompetenciesHeadingTiles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '15rem',
    height: '23.4rem',
    backgroundColor: 'rgba(13, 36, 77, 0.9254901961)',
    color: 'white',
  },
  cardContent: {
    padding: '1rem',
  },
});

export const CoreCompetencies = () => {
  const classes = useStyles();

  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh();
  }, []);

  return (
    <div data-aos="zoom-in-up" data-aos-duration="1200">
      <hr />
      <div className={classes.CoreCompetencies}>
        <section className={classes.CoreCompetenciesHeading}>
          <Typography variant="h3">Core Competencies</Typography>
          <Typography>
            We have a set of diverse knowledge and technical capacities that empower businesses to adeptly navigate the intricate needs of our clients.
            Through these competencies, we not only establish a lasting footprint but also cultivate a robust reputation and brand image, solidifying our position in the market.
          </Typography>
        </section>
        <section className={classes.CoreCompetenciesHeadingTiles}>
          <Grid container spacing={2}>
            {[
              { image: firstImage, title: 'Leadership', content: 'Leading by example, fostering relationships, and motivating teams to excel while being accountable for staff development and knowledge sharing.' },
              { image: secondImage, title: 'Client Focus', content: 'Placing customers first, ensuring positive experiences by understanding their needs and fortifying relationships.' },
              { image: thirdImage, title: 'Technology', content: 'Crafting robust technology infrastructure and staying updated with advancements.' },
              { image: fourthImage, title: 'Result Orientation', content: 'Achieving company goals by setting challenging targets, directing efforts accordingly, and surpassing expectations.' },
            ].map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <img className="w-full" src={item.image} alt={item.title} />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    </div>
  );
};
