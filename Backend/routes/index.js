import express from 'express';
const router = express.Router();

// Import controllers
import adminController from '../controllers/adminController.js';
import userController from '../controllers/userController.js';
import productController from '../controllers/productController.js';
import cropController from '../controllers/cropController.js';
import farmController from '../controllers/farmController.js';
import bookingController from '../controllers/bookingController.js';

// Import model Contact
import Contact from '../db/User/ContactSchema.js';

// Admin routes
router.post('/alogin', adminController.adminLogin);
router.post('/asignup', adminController.adminSignup);

// User routes
router.post('/ulogin', userController.userLogin);
router.post('/usignup', userController.userSignup);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/useredit/:id', userController.updateUser);
router.delete('/userdelete/:id', userController.deleteUser);

// Product routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/deleteproduct/:id', productController.deleteProduct);

// Crop routes
router.get('/cropsdata', cropController.getCropsData);
router.get('/cropsdata/:name', cropController.getCropByName);
router.get('/getcrop/:id', cropController.getCropById);
router.get('/getcrops/:userId', cropController.getCropsByUserId);
router.post('/addcrop', cropController.addCrop);
router.put('/editcrop/:id', cropController.updateCrop);
router.delete('/deletecrop/:id', cropController.deleteCrop);

// Farm routes
router.post('/addfarm', farmController.addFarm);
router.get('/getfarm/:id', farmController.getFarmById);
router.get('/farms', farmController.getAllFarms);
router.get('/getfarms/:userId', farmController.getFarmsByUserId);
router.put('/editfarm/:id', farmController.updateFarm);
router.delete('/deletefarm/:id', farmController.deleteFarm);

// Booking routes
router.post('/orderproduct', bookingController.orderProduct);
router.get('/getbookings/:userId', bookingController.getBookingsByUserId);

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    
    res.status(201).json({ status: 'success', message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ status: 'error', message: 'Failed to send message.' });
  }
});

export default router;