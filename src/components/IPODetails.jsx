import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paper, Box, Grid, Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import './IPODetails.css';

const ipoDetails = {
  1: {
    company: 'GO AIR',
    issueSize: '₹3,600 - 3,700 Cr.',
    priceRange: '₹50-60',
    minAmount: '₹50,000',
    lotSize: '150 shares/lots',
    issueDates: '12 Dec - 15 Dec 22',
    listedPrice: '₹150',
    listingGain: '₹10 (10.0%)',
    timeline: [
      { label: 'Bidding starts', date: '12 Dec 2023' },
      { label: 'Bidding ends', date: '15 Dec 2023' },
      { label: 'Allotment finalization', date: '18 Dec 2023' },
      { label: 'Refund initiation', date: '18 Dec 2023' },
      { label: 'Demat transfer', date: '18 Dec 2023' },
      { label: 'Listing date', date: '21 Dec 2023' },
    ],
    logo: '/images/goair.png',
  },
  2: {
    company: 'BAJAJ ENERGY',
    issueSize: '₹3,600 - 3,700 Cr.',
    priceRange: '₹50-60',
    minAmount: '₹50,000',
    lotSize: '150 shares/lots',
    issueDates: '12 Dec - 15 Dec 22',
    listedPrice: '₹150',
    listingGain: '₹10 (10.0%)',
    timeline: [
      { label: 'Bidding starts', date: '12 Dec 2023' },
      { label: 'Bidding ends', date: '15 Dec 2023' },
      { label: 'Allotment finalization', date: '18 Dec 2023' },
      { label: 'Refund initiation', date: '18 Dec 2023' },
      { label: 'Demat transfer', date: '18 Dec 2023' },
      { label: 'Listing date', date: '21 Dec 2023' },
    ],
    logo: '/images/bajaj.png',
  },
  3: {
    company: 'OYO',
    issueSize: '₹3,600 - 3,700 Cr.',
    priceRange: '₹50-60',
    minAmount: '₹50,000',
    lotSize: '150 shares/lots',
    issueDates: '12 Dec - 15 Dec 22',
    listedPrice: '₹150',
    listingGain: '₹10 (10.0%)',
    timeline: [
      { label: 'Bidding starts', date: '12 Dec 2023' },
      { label: 'Bidding ends', date: '15 Dec 2023' },
      { label: 'Allotment finalization', date: '18 Dec 2023' },
      { label: 'Refund initiation', date: '18 Dec 2023' },
      { label: 'Demat transfer', date: '18 Dec 2023' },
      { label: 'Listing date', date: '21 Dec 2023' },
    ],
    logo: '/images/oyo.png',
  },
};

function IPODetailsPage() {
  const { id } = useParams();
  const ipo = ipoDetails[id];
  const isMobile = useMediaQuery('(max-width:600px)');

  if (!ipo) {
    return <Typography>IPO not found</Typography>;
  }

  return (
    <Paper className="ipo-details-page">
       <Box className="navigation">
        <Link to="/">Home</Link> &gt; Market Watch: {ipo.company}
      </Box>

      <Grid container alignItems="center" className="ipo-details-header">
        <Grid item xs={2}>
          <img src={ipo.logo} alt={ipo.company} className="company-logo" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" className="company-name">{ipo.company}</Typography>
          <Typography variant="body1">{ipo.company} Private Limited</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className="apply-button">Apply Now</Button>
        </Grid>
      </Grid>

      <Box className="ipo-details-info">
        <Typography variant="h6">IPO Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>Issue Size: {ipo.issueSize}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Price Range: {ipo.priceRange}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Minimum Amount: {ipo.minAmount}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Lot Size: {ipo.lotSize}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Issue Dates: {ipo.issueDates}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Listed Price: {ipo.listedPrice}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Listing Gains: {ipo.listingGain}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="ipo-timeline">
        <Typography variant="h6">IPO Timeline</Typography>
        <Stepper activeStep={6} orientation={isMobile ? 'vertical' : 'horizontal'}>
          {ipo.timeline.map((event, index) => (
            <Step key={index}>
              <StepLabel>{event.label}: {event.date}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>


      <Box className="about-company">
        <Typography variant="h6">About the Company</Typography>
        <Typography>A company profile is a concise but comprehensive overview of your business, usually in the form of an About page. It introduces people to your business while presenting a cohesive, compelling brand identity.</Typography>
      </Box>
    </Paper>
  );
}

export default IPODetailsPage;