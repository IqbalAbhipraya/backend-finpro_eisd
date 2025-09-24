const locationService = require('../services/location.service');

exports.getAllLocations = async (req, res) => {
    try {
        const result = await locationService.getAllLocation(req.query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await locationService.getLocationById(id);
        if (!result) {
            return res.status(404).json({ message: 'Lokasi tidak ditemukan '});
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.createLocation = async (req, res) => {
    try {
        const location = await locationService.createLocation(req.body);
        return res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Tambah Lokasi berhasil",
            data: location,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}