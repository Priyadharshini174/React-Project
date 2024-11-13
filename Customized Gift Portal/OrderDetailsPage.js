import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import Header from './Header';
import './OrderDetails.css';

const OrderDetails = () => {
  // This data should ideally come from your state management or API
  const orderDetails = [
    {
      id: 1,
      name: 'Personalized Key Chains',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTtJC8P23lqET5-0XYc3Wk2rk-fPs70YO8A&s',
      progress: 'Delivered',
      quantity: 2,
      estimatedDelivery: '2024-10-15',
      shippingProgress: 100 // Complete
    },
    {
      id: 2,
      name: 'Personalized Pendant',
      imageUrl: 'https://www.yuvaflowers.com/cdn/shop/files/hearts-in-love-pendent-manual-yuvaflowers-hearts-in-love-pendent-default-title-42166942662936.jpg?v=1711901268',
      progress: 'In Progress',
      quantity: 1,
      estimatedDelivery: '2024-10-20',
      shippingProgress: 50 // In Progress
    },
  ];

  return (
    <>
    <Header/>
    <Box padding={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Order Details
      </Typography>
      {orderDetails.map(order => (
        <Box key={order.id} display="flex" alignItems="center" marginTop={2} className="order-item">
          <img src={order.imageUrl} alt={order.name} className="order-image" />
          <Box flexGrow={1} marginLeft={2}>
            <Typography variant="h6">{order.name}</Typography>
            <Typography variant="subtitle1">Quantity: {order.quantity}</Typography>
            <Typography variant="subtitle1">Estimated Delivery: {order.estimatedDelivery}</Typography>
            <LinearProgress variant="determinate" value={order.shippingProgress} className="progress-bar" />
            <Typography variant="subtitle2" align="right">
              Status: {order.progress}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </>);
};

export default OrderDetails;
