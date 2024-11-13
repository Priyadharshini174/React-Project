import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { Box, Typography, Grid } from '@mui/material';
import './SearchResults.css'; // Import the CSS file

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      
      // Mock data for demonstration purposes, including image URLs
      const allProducts = [
        { id: 1, name: 'Chocolate Cake', imageUrl: 'https://bakerstable.in/wp-content/uploads/2022/03/IMG_7371.jpg' },
        { id: 1, name: 'Birthday Chocolate Cake', imageUrl: 'https://5.imimg.com/data5/WS/FS/PW/ANDROID-74556542/img-20200604-wa0009-jpg-250x250.jpg' },
        { id: 1, name: 'Chocolate Cake', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsatcpQ9YcalOhpJgSSFE_EQT1RZewU5z419kpgHK0vMczpSKQQLrEcAuJJPE-b2nA6Y&usqp=CAU' },
        { id: 2, name: 'Flower Bouquet', imageUrl: 'https://i.pinimg.com/236x/11/78/7a/11787a7d68f2dde047d4e3ff7c95b90b.jpg' },
        { id: 3, name: 'Personalized Mug', imageUrl: 'https://betweenboxes.in/cdn/shop/files/cust-mug-600x600-500x500.webp?v=1720606037' },
        { id: 3, name: 'Personalized Mug', imageUrl: 'https://www.fnp.com/images/pr/l/v20200113193740/gorgeous-black-personalised-mug_1.jpg' },
        { id: 3, name: 'Personalized Mug', imageUrl: 'https://giftingaura.co.in/wp-content/uploads/2024/06/img_6025.jpeg' },
        { id: 4, name: 'Key Chain', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/ku04o7k0/key-chain/2/b/u/personalized-bar-keychain-engraved-key-chain-custom-keychain-original-imag77z3mtbcgsyu.jpeg?q=90&crop=false' },
        { id: 4, name: 'Key Chain', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRUI-w98FqdgWznF6vsR_xTQrwydGSwNEJyFXgBAz4wbz-7G5WeFkAL7uFzzBEwKKtPs&usqp=CAU' },
        { id: 5, name: 'Wrist Watch', imageUrl: 'https://m.media-amazon.com/images/I/61ohwG5dzrL._AC_UY1000_.jpg' },
        { id: 5, name: 'Wrist Watch', imageUrl: 'https://lovecraftgift.com/cdn/shop/files/13_ec79bbba-280d-4982-9379-4b6ef1cf1646_480x480@2x.jpg?v=1699619688' },
        { id: 5, name: 'Couples Watch', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/7/c/2/1-1-nityama-women-original-imaggqhdz4fep4av.jpeg?q=20&crop=false' },
        { id: 6, name: 'Photo Frame', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/10/BC/BO/RS/103275948/mpf-99.jpeg' },
      ];

      // Filter products based on the search query
      const filteredResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
      setLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <>
    <Header/>
    <Box className="search-results-container">
      <Typography className="search-results-title" gutterBottom>
        Search Results for: "{searchQuery}"
      </Typography>
      <Grid container spacing={2}>
        {results.length > 0 ? (
          results.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box className="product-box">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="product-image" 
                />
                <Typography className="product-name">{product.name}</Typography>
                {/* You can add more details about the product here */}
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center">No results found.</Typography>
        )}
      </Grid>
    </Box>
  </>);
};

export default SearchResults;
