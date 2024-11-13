import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Box, Typography, Button, TextField, Input, Grid, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import './CustomizePage.css';

const CustomizePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from both JSON files
        const [productsResponse, giftsResponse] = await Promise.all([
          axios.get('/products.json'),
          axios.get('/giftProducts.json')
        ]);

        const combinedProducts = [...productsResponse.data, ...giftsResponse.data];
        const product = combinedProducts.find((p) => parseInt(p.id) === parseInt(id));
        setSelectedProduct(product || null);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleImageUpload = (e) => setImage(e.target.files[0]);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/order', { state: { product: selectedProduct, quantity } });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" marginTop={3}>
        <CircularProgress />
      </Box>
    );
  }

  if (!selectedProduct) {
    return (
      <Typography variant="h5" align="center">
        Product not found
      </Typography>
    );
  }

  return (
    <>
      <Header />
      <Box className="customize-section" padding={3}>
        <Typography variant="h5" align="center">Customize Your {selectedProduct.name}</Typography>

        <Grid container spacing={3} justifyContent="center" marginTop={3}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Price: {selectedProduct.price}</Typography>

            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Size (Optional)"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              fullWidth
              margin="normal"
            />

            <Input
              type="file"
              onChange={handleImageUpload}
              fullWidth
              margin="normal"
            />
            {image && <Typography>Uploaded: {image.name}</Typography>}

            <TextField
              label="Custom Details (Optional)"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePlaceOrder}
              style={{ marginTop: '20px' }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomizePage;
