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

exports.updateLocation = async (req, res) => {
    try {
        const location = await locationService.updateLocation(req.params.id, req.body);
        if (!location) return res.status(404).json({ success: false, message: 'Lokasi tidak ditemukan' });
        return res.status(200).json(location);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

exports.deleteLocation = async (req, res) => {
    try {
        const deleted = await locationService.deleteLocation(req.params.id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Lokasi tidak ditemukan' });
        res.status(200).json({ message: "Delete Successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}