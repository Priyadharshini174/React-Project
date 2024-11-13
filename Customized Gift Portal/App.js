import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchResults from './SearchResults'; // Search results component
import HomePage from './HomePage'; 
import CustomizePage from './CustomizePage'; 
import CartPage from './CartPage'; 
import WishlistPage from './WishlistPage'; 
import UserAccountPage from './UserAccountPage'; 
import YourGiftsPage from './YourGiftsPage'; 
import ProfileSettingPage from './ProfileSettingPage'; 
import OrderPage from './OrderPage'; // Order page component
import OrderDetails from './OrderDetailsPage'; // Order details component
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

// const products = [
//   { id: 1, name: 'Personalized Key Chains', price: '₹ 425', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTtJC8P23lqET5-0XYc3Wk2rk-fPs70YO8A&s' },
//   { id: 2, name: 'Personalized Pendant', price: '₹ 395', imageUrl: 'https://www.yuvaflowers.com/cdn/shop/files/hearts-in-love-pendent-manual-yuvaflowers-hearts-in-love-pendent-default-title-42166942662936.jpg?v=1711901268' },
//   { id: 3, name: 'Father\'s day gift', price: '₹ 645', imageUrl: 'https://img.ltwebstatic.com/images3_spmp/2023/07/03/16883724121772c302fe7c54ff69ff47af909cf382_thumbnail_720x.webp' },
//   { id: 4, name: 'Mother\'s day gift', price: '₹ 845', imageUrl: 'https://m.media-amazon.com/images/I/71iSpIl9y2L._AC_UF350,350_QL50_.jpg' },
//   { id: 5, name: 'Customizable Coffee Mug', price: '₹ 250', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPAX3b6Gd33IGF2c3yFLQ-fhTFwtRzFD6Tg&s' },
//   { id: 6, name: 'Wedding gift', price: '₹ 499', imageUrl: 'https://m.media-amazon.com/images/I/91iwNWvEgyL._AC_UF1000,1000_QL80_.jpg' },
//   { id: 7, name: 'Customized T-shirts', price: '₹ 499', imageUrl: 'https://5.imimg.com/data5/ECOM/Default/2023/6/317463534/OG/AB/OZ/3712440/anzzs4c.jpg' },
//   { id: 8, name: 'Customized pillow', price: '₹ 499', imageUrl: 'https://www.fnp.com/images/pr/m/v200/cuddly-birthday-personalised-cushion.jpg' },
// ];

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Manage cart items
  const [wishlistItems, setWishlistItems] = useState([]); // Manage wishlist items

  // Add to Wishlist
  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter(item => item.id !== productId));
  };

  // Add to Cart
  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* HomePage route */}
        <Route
          path="/home"
          element={
            <HomePage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              // products={products} // Pass products to HomePage
            />
          }
        />

        {/* Search results route */}
        <Route path="/search" element={<SearchResults />} />

        {/* CustomizePage route */}
        <Route
          path="/customize/:id"
          element={<CustomizePage />} // Customize page based on product ID
        />

        {/* Cart Page route */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* Wishlist Page route */}
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />

        {/* Order Page route */}
        <Route path="/order" element={<OrderPage />} />

        {/* Order details route */}
        <Route path="/order-details" element={<OrderDetails />} />

        {/* User account page route */}
        <Route path="/account" element={<UserAccountPage />} />

        {/* Your gifts page route */}
        <Route
          path="/your-gifts"
          element={
            <YourGiftsPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        {/* Profile settings page route */}
        <Route path="/profile-setting" element={<ProfileSettingPage />} />

        {/* Add any additional routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
