// WishlistPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from './Header';
import './WishlistPage.css';

const WishlistPage = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <>
    <Header/>
    <Box className="wishlist-container">
      <Typography variant="h4" align="center">Your Wishlist</Typography>
      <Box className="wishlist-items">
        {wishlistItems.length === 0 ? (
          <Typography variant="body1" align="center">Your wishlist is empty!</Typography>
        ) : (
          wishlistItems.map((item) => (
            <Box key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.name} className="wishlist-item-image" />
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2">Price: {item.price}</Typography>
              <Button variant="contained" color="secondary" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
            </Box>
          ))
        )}
      </Box>
    </Box>
  </>);
};

export default WishlistPage;
