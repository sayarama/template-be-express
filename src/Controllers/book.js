const modelBuku = require("../Models/book")

const bookController = {
    _getAllBuku: async (req, res) => {
        try {
            const request = await modelBuku.getAllBuku()

            res.status(200).json({
                status: true,
                message: "Get data success",
                data: request,
            });
        } catch (error) {
            res.status(502).json({
                status: false,
                message: "Something Wrong In Our Server",
                data: []
            });
        }
    }
}

module.exports = bookController;