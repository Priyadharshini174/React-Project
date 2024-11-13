import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { FavoriteBorder, Favorite, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './YourGiftsPage.css';
import './CustomizePage';

const YourGiftsPage = ({ addToCart, addToWishlist }) => {
  const [giftProducts, setGiftProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Fetch data from JSON file
  useEffect(() => {
    axios.get('/giftProducts.json') // Check that this path is accurate
      .then(response => {
        setGiftProducts(response.data);
        console.log("Fetched gift products:", response.data); // Debugging: Check fetched data
      })
      .catch(error => console.error("Error fetching gift products:", error));
  }, []);

  const handleViewMore = () => {
    setVisibleProducts(prev => prev + 4);
  };

  const handleWishlistToggle = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter(id => id !== product.id));
      // Call to remove from global wishlist here if needed
    } else {
      setWishlist([...wishlist, product.id]);
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleCustomize = (product) => {
    console.log("Navigating to CustomizePage with product ID:", product.id); // Debugging
    navigate(`/customize/${product.id}`);
  };

  return (
    <>
      <Header />
      <Box className="products-section">
        <Typography variant="h5" align="center" className="products-title">Your Gifts</Typography>
        <Grid container spacing={2} justifyContent="center">
          {giftProducts.slice(0, visibleProducts).map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Box className="product-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                  style={{ width: '150px', height: '150px' }}
                />
                <Typography variant="h6" align="center">{product.name}</Typography>
                <Typography variant="body1" align="center">{product.price}</Typography>
                <Box className="product-buttons">
                  <IconButton onClick={() => handleWishlistToggle(product)}>
                    {wishlist.includes(product.id) ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                  <Button className="cart-button" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                  <IconButton className="customize-button" onClick={() => handleCustomize(product)}>
                    <Edit />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
          {visibleProducts < giftProducts.length && (
            <Box textAlign="center" marginTop="20px">
              <Button variant="contained" color="primary" onClick={handleViewMore}>
                View More
              </Button>
            </Box>
          )}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default YourGiftsPage;
