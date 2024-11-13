// CartPage.js
import React from 'react';
import Header from './Header';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CartPage = ({ cartItems, removeFromCart }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹ ', '').replace(',', '')), 0);

  return (
    <>
     <Header/>
      <Box className="cart-section" padding={3}>
        <Typography variant="h5" align="center">Your Cart</Typography><br></br>
        <Grid container spacing={2} justifyContent="center">
          {cartItems.length === 0 ? (
            <Typography variant="body1" align="center">Your cart is empty.</Typography>
          ) : (
            <>
              {cartItems.map(item => (
                <Grid item key={item.id} xs={12} sm={6} md={3}>
                  <Box className="cart-item" border={1} borderRadius={2} padding={2}>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
                    <Typography variant="h6" align="center">{item.name}</Typography>
                    <Typography variant="body1" align="center">{item.price}</Typography>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => removeFromCart(item.id)}
                      startIcon={<Delete />}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              ))}

              {/* Total Price */}
              <Grid item xs={12}>
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                  Total Price: {`₹ ${totalPrice.toFixed(2)}`}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
     
    </>
  );
};

export default CartPage;
