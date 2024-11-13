import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Alert, Avatar } from '@mui/material';
import axios from 'axios';
import Header from './Header';
import './UserAccountPage.css';

const UserAccountPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    city: '',
    pincode: '',
    profilePicture: '',
  });
  const [imagePreview, setImagePreview] = useState('');

  // Load user details from localStorage or fetch on component mount
  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedDetails) {
      setUserDetails(storedDetails);
      setImagePreview(storedDetails.profilePicture);
    } else {
      axios.get('/path-to-your-json/userDetails.json')
        .then(response => {
          const data = response.data;
          setUserDetails(data);
          setImagePreview(data.profilePicture);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUserDetails((prevState) => ({
          ...prevState,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userDetails.userName) newErrors.userName = "User Name is required";
    if (!userDetails.email) newErrors.email = "Email ID is required";
    if (!userDetails.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!userDetails.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!userDetails.address) newErrors.address = "Delivery Address is required";
    if (!userDetails.city) newErrors.city = "City is required";
    if (!userDetails.pincode) newErrors.pincode = "Pincode is required";

    return newErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsEditable(false);
      alert('User details saved successfully!');
      
      // Save user details to localStorage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <Header/>
      <Box className="account-page">
        <Typography variant="h4" align="center">Your Account</Typography>

        <form className="account-form">
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Avatar
              src={imagePreview}
              alt="Profile Picture"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={!isEditable}
            />
          </Box>

          <TextField
            label="*User Name"
            name="userName"
            value={userDetails.userName}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.userName}
            helperText={errors.userName}
          /><br />
          <TextField
            label="*Email ID"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.email}
            helperText={errors.email}
          /><br />
          <TextField
            label="*Phone Number"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          /><br />
          <TextField
            label="*Date of Birth"
            name="dateOfBirth"
            type="date"
            value={userDetails.dateOfBirth}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            InputLabelProps={{ shrink: true }}
            error={!!errors.dateOfBirth}
            helperText={errors.dateOfBirth}
          /><br />
          <TextField
            label="*Delivery Address"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.address}
            helperText={errors.address}
          /><br />
          <TextField
            label="*City"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.city}
            helperText={errors.city}
          /><br />
          <TextField
            label="*Pincode"
            name="pincode"
            value={userDetails.pincode}
            onChange={handleChange}
            disabled={!isEditable}
            fullWidth
            className="form-field"
            error={!!errors.pincode}
            helperText={errors.pincode}
          />

          <Box className="account-buttons" display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" onClick={handleEdit} disabled={isEditable}>
              Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSave} disabled={!isEditable}>
              Save
            </Button>
          </Box>

          {Object.keys(errors).length > 0 && (
            <Alert severity="error" className="form-alert">
              Please fill out all required fields.
            </Alert>
          )}
        </form>
      </Box>
    </>
  );
};

export default UserAccountPage;
