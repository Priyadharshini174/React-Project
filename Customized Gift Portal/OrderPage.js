import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = () => {
  const location = useLocation();
  const { product, quantity, paymentMethod } = location.state || {};

  if (!product) {
    return <Typography variant="h5" align="center">No order details available.</Typography>;
  }

  return (
    <>
    <Header/>
    <Box padding={3}>
      <Typography variant="h4" align="center">Order Confirmation</Typography>
      <Box textAlign="center" marginTop={2}>
        <img src={product.imageUrl} alt={product.name} style={{ width: '200px' }} />
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="subtitle1">Quantity: {quantity}</Typography>
        <Typography variant="subtitle1">Payment Method: {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</Typography>
        <Typography variant="subtitle1">Delivery Progress: In Progress</Typography>
      </Box>
    </Box>
 </> );
};

export default OrderPage;
