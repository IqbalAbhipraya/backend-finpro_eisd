const { Location, User } = require('../models');
const { Op } = require('sequelize');

exports.getAllLocation = async (params) => {
    const  { page = 1, limit = 10, search, city, province } = params;
    const offset = (page - 1) * limit;

    const whereClause = {};

    if (search) {
        whereClause[Op.or] = [
            { name: { [Op.iLike]: `%$${search}%` } },
            { address: { [Op.iLike]: `%$${search}%` } },
            { description: { [Op.iLike]: `%$${search}%` } },
        ];
    }

    if (city) {
        whereClause.city = { [Op.iLike]:  `%${city}%` };
    }

    if (province) {
        whereClause.province = { [Op.iLike]:  `%${province}%` };
    }

    const { count, rows: locations } = await Location.findAndCountAll({
        where: whereClause,
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [['createdAt', 'DESC']]
    });

    return {
        locations,
        pagination: {
            currentPage: parseInt(page),
            totalPages: Math.ceil(count / limit),
            totalItems: count,
            itemsPerPage: parseInt(limit)
        }
    };
}

exports.getLocationById = async (id) => {
    const location = await Location.findByPk(id);
    return location;
}

exports.createLocation = async (data) => {
    const location = await Location.create(data);
    return location;
}