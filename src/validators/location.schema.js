const Joi = require('joi');

const createLocationSchema = Joi.object({
  name: Joi.string().required().min(3).max(255),
  address: Joi.string().required().min(5).max(500),
  city: Joi.string().required().min(2).max(100),
  province: Joi.string().required().min(2).max(100),
  description: Joi.string().optional().max(2000),
  mainImage: Joi.string().optional().uri(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  accessibilityFeatures: Joi.array().items(Joi.string()).optional()
});

const updateLocationSchema = Joi.object({
  name: Joi.string().optional().min(3).max(255),
  address: Joi.string().optional().min(5).max(500),
  city: Joi.string().optional().min(2).max(100),
  province: Joi.string().optional().min(2).max(100),
  description: Joi.string().optional().max(2000),
  mainImage: Joi.string().optional().uri(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  accessibilityFeatures: Joi.array().items(Joi.string()).optional()
});

const getLocationsSchema = Joi.object({
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional(),
  search: Joi.string().optional().max(255),
  city: Joi.string().optional().max(100),
  province: Joi.string().optional().max(100)
});

const getLocationByIdSchema = Joi.object({
  id: Joi.number().integer().positive().required()
});

const getLocationCommentsSchema = Joi.object({
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional()
});

module.exports = {
  createLocationSchema,
  updateLocationSchema,
  getLocationsSchema,
  getLocationByIdSchema,
  getLocationCommentsSchema
};
