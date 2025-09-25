const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');
const authenticate = require('../middleware/auth.middleware');
const authorize = require('../middleware/rbac.middleware');

// publik
router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocationById);

// ada rbac sama auth
router.post('/', authenticate, authorize(['admin']), locationController.createLocation);
router.put('/:id', authenticate, authorize(['admin']), locationController.updateLocation);
router.delete('/:id', authenticate, authorize(['admin']), locationController.deleteLocation);

module.exports = router;

