import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Typography } from '@mui/material';
import './IPOList.css';

const ipoList = [
  {
    id: 1,
    company: 'GO AIR',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    logo: '/images/goair.png',
  },
  {
    id: 2,
    company: 'BAJAJ ENERGY',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    logo: '/images/bajaj.png',
  },
  {
    id: 3,
    company: 'OYO',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    logo: '/images/oyo.png',
  },
];

function IPOListPage() {
  return (
    <Paper className="ipo-list-page">
      <Typography variant="h5" className="page-title">IPO List</Typography>

      <Grid container className="ipo-table-header" spacing={2}>
        <Grid item xs={2}>
          <Typography variant="subtitle1"></Typography>
        </Grid>
      </Grid>
      
      {ipoList.map((ipo) => (
        <Link to={`/details/${ipo.id}`} key={ipo.id} className="ipo-link">
          <Grid container alignItems="center" className="ipo-item">
            <Grid item xs={2}>
              <img src={ipo.logo} alt={ipo.company} className="company-logo" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">{ipo.company}</Typography>
              <Typography variant="caption">{ipo.issueSize}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">Price Range: {ipo.priceRange}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">Min Investment: {ipo.minInvestment}</Typography>
            </Grid>
          </Grid>
        </Link>
      ))}
    </Paper>
  );
}

export default IPOListPage;