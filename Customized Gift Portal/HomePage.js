import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Header from './Header';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { FavoriteBorder, Favorite, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';

const HomePage = ({ addToCart, addToWishlist }) => {
  const [visibleProducts, setVisibleProducts] = useState(8); // Display 4 products initially
  const [wishlist, setWishlist] = useState([]); // State to track wishlist items
  const [products, setProducts] = useState([]); // State to store fetched products
  const navigate = useNavigate();

  // Fetch products from JSON file using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json'); // Use axios to fetch data
        setProducts(response.data); // Store the products in the state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle view more products
  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  // Handle wishlist toggle
  const handleWishlistToggle = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter((id) => id !== product.id)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, product.id]); // Add to wishlist
      addToWishlist(product); // Add to the global wishlist state
    }
  };

  // Handle "Add to Cart"
  const handleAddToCart = (product) => {
    addToCart(product); // Add to cart in the global state
  };

  // Handle navigation to the customize page
  const handleCustomize = (product) => {
    navigate(`/customize/${product.id}`); // Navigate to the customize page with the product id
  };

  // Navigate to "Your Gifts" page
  const handleSeeYourGifts = () => {
    navigate('/your-gifts');
  };

  return (
    <>
      {/* Include the Header component here */}
    <Header/>
      {/* Filters */}
      <Box className="filters">
        <Button variant="outlined">Occasions</Button>
        <Button variant="outlined">Same Day Delivery</Button>
        <Button variant="outlined">Recipients</Button>
        <Button variant="outlined">Photo Gifts</Button>
        <Button variant="outlined">Name Gifts</Button>
        <Button variant="outlined">Home Decor</Button>
        <Button variant="outlined">Fashion & Accessories</Button>
      </Box>

      {/* Quick Filters */}
      <Box className="quick-filters">
        <Button className="quick-filter-btn">
          <img
            src="https://www.shutterstock.com/image-vector/food-delivery-man-riding-red-600nw-1327144634.jpg"
            alt="Same Day Delivery"
            style={{ width: '100px', height: '100px'}}
          />
          <Typography>Quick Delivery</Typography>
        </Button>
        <Button className="quick-filter-btn">
          <img
            src="https://img.myloview.com/stickers/happy-birthday-gifts-vector-template-design-happy-birthday-text-in-pink-frame-with-gift-boxes-ribbon-and-lasso-surprise-elements-for-birth-day-greeting-card-decoration-vector-illustration-700-262542036.jpg"
            alt="Birthday Gifts"
            style={{ width: '100px', height: '100px' }}
          />
          <Typography>Birthday Gifts</Typography>
        </Button>
        <Button className="quick-filter-btn">
          <img
            src="https://m.media-amazon.com/images/I/61VRL+cF3EL._AC_UF1000,1000_QL80_.jpg"
            alt="Anniversary Gifts"
            style={{ width: '100px', height: '100px' }}
          />
          <Typography>Anniversary Gifts</Typography>
        </Button>
        <Button className="quick-filter-btn">
          <img
            src="https://m.media-amazon.com/images/I/819b0VlzPpL._AC_UF1000,1000_QL80_.jpg"
            alt="Gift Hampers"
            style={{ width: '100px', height: '100px' }}
          />
          <Typography>Gift Hampers</Typography>
        </Button>
      </Box>

      {/* Product Grid */}
      <Box className="products-section">
        <Typography variant="h5" align="center" className="products-title">Customized Gifts</Typography>
        <Grid container spacing={2} justifyContent="center">
          {products.slice(0, visibleProducts).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Box className="product-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                  style={{ width: '150px', height: '150px'}}
                />
                <Typography variant="h6" align="center">{product.name}</Typography>
                <Typography variant="body1" align="center">{product.price}</Typography>
                <Box className="product-buttons">
                  {/* Wishlist Button (Heart Icon) */}
                  <IconButton onClick={() => handleWishlistToggle(product)}>
                    {wishlist.includes(product.id) ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>

                  {/* Add to Cart Button */}
                  <Button 
                    className="cart-button" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>

                  {/* Customize Button */}
                  <IconButton 
                    className="customize-button"
                    onClick={() => handleCustomize(product)}
                  >
                    <Edit />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}

          {/* "View More" Button */}
          {visibleProducts < products.length && (
            <Box textAlign="center" marginTop="20px">
              <Button variant="contained" color="primary" onClick={handleViewMore}>
                View More
              </Button>
            </Box>
          )}
        </Grid>

        {/* "See Your Gifts" Button */}
        <Box textAlign="center" marginTop="20px">
          <Button variant="contained"color="primary" onClick={handleSeeYourGifts}>
            See Your Gifts
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default HomePage;
