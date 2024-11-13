import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Alert } from '@mui/material';
import './UserAccountPage.css';

const UserAccountPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    userName: '', // Sample data
    email: '', // Sample data
    phoneNumber: '', // Sample data
    dateOfBirth: '', // Sample data
    address: '', // Sample data
    city: '', // Sample data
    pincode: '', // Sample data
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Remove the error when the user starts typing in a field
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Enable the form for editing
  const handleEdit = () => {
    setIsEditable(true);
  };

  // Validate the form fields before saving
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

  // Save the updated form data
  const handleSave = () => {
    const formErrors = validateForm();
    
    // If there are no errors, save the data
    if (Object.keys(formErrors).length === 0) {
      setIsEditable(false);
      alert('User details saved successfully!');
      // Logic to submit updated user details to the backend goes here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Box className="account-page">
      <Typography variant="h4" align="center">Your Account</Typography>

      <form className="account-form">
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

        <Box className="account-buttons">
          {!isEditable ? (
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Edit
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleSave}>
              Save
            </Button>
          )}
        </Box>

        {Object.keys(errors).length > 0 && (
          <Alert severity="error" className="form-alert">
            Please fill out all required fields.
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default UserAccountPage;
