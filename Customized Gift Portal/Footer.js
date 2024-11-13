// Footer.js
import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">About Us</Typography>
            <Typography variant="body2">
              GiftPortal offers a wide variety of personalized gifts for every occasion.
              Explore our products to find the perfect gift for your loved ones.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">Links</Typography>
            <Typography>
              <Link href="/about" color="inherit">About</Link>
            </Typography>
            <Typography>
              <Link href="/contact" color="inherit">Contact</Link>
            </Typography>
            <Typography>
              <Link href="/privacy-policy" color="inherit">Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">Follow Us</Typography>
            <Typography>
              <Link href="https://facebook.com" target="_blank" color="inherit">Facebook</Link>
            </Typography>
            <Typography>
              <Link href="https://instagram.com" target="_blank" color="inherit">Instagram</Link>
            </Typography>
            <Typography>
              <Link href="https://twitter.com" target="_blank" color="inherit">Twitter</Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" className="footer-copyright">
          © {new Date().getFullYear()} GiftPortal. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
