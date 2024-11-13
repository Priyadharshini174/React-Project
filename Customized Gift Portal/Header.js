import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for user menu
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Toggle drawer (menu)
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Categories for menu
  const categories = ['Cake', 'Flower', 'Mug', 'Key Chain', 'Watch', 'Photo Frame'];

  // Handle user menu click
  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu item click
  const handleMenuItemClick = (path) => {
    navigate(path);
    setAnchorEl(null); // Close the menu
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search on Enter key press
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Navigate to the search results page with the query
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear the input after searching
    }
  };

  return (
    <Box className="header-container">
      {/* Three-line menu icon */}
      <IconButton onClick={() => toggleDrawer(true)} className="menu-button">
        <MenuIcon />
      </IconButton>

      {/* Drawer for category menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box className="drawer-content">
          <Typography variant="h6" className="drawer-title">Categories</Typography>
          <List>
            {categories.map((category, index) => (
              <ListItem button key={index} onClick={() => {
                navigate(`/${category.toLowerCase()}`); // Navigate to the selected category page
                toggleDrawer(false);
              }}>
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Portal logo and name */}
      <Box className="logo-container" onClick={() => navigate('/')}>
        <img src="https://vectorseek.com/wp-content/uploads/2023/09/Gift-Express-Logo-Vector.svg-.png" alt="Portal Logo" className="logo" />
        <Typography variant="h5" className="portal-name"></Typography>
      </Box>

      {/* Search bar */}
      <Box className="search-bar">
        <InputBase
          placeholder="Search for gifts"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress} // Trigger search on Enter key
        />
        <IconButton className="search-button" onClick={() => {
          // Navigate to the search results page when the search button is clicked
          navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
          setSearchQuery(''); // Clear input after searching
        }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons for user actions */}
      <Box className="header-icons">
        <IconButton onClick={() => navigate('/wishlist')} className="icon-button">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton onClick={() => navigate('/cart')} className="icon-button">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton onClick={() => navigate('/home')} className="icon-button">
          <HomeIcon />
        </IconButton>
        <IconButton onClick={handleUserMenuClick} className="icon-button">
          <AccountCircleIcon />
        </IconButton>

        {/* User Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleMenuItemClick('/profile-setting')}>Profile Setting</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/order-details')}>Order Details</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/')}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
