const modelBuku = require("../Models/book")

const {Validator} = require("node-input-validator");

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
    },
    _getDetailBuku: async (req, res) => {
        try {
            const request = await modelBuku.getDetailBuku()

            res.status(200).json({
                status: true,
                message: "Get data success",
                data: request,
            })
        } catch (error) {
            res.status(502).json({
                status: false,
                message: "Something Wrong In Our Server",
                data: []
            });
        }
    },
    _getNewBuku: async (req, res) => {
        try{
            const request = await modelBuku.getNewBuku()

            res.status(200).json({
                status: true,
                message: "Get data success",
                data: request,
            })
        } catch (error) {
            res.status(502).json({
                status: false,
                message: "Something Wrong In Our Server",
                data: [],
            })
        }
    },
    _inputValidation: async (req, res, next) => {
        const schema = new Validator(req.body, {
            name: "required|minLength:5|maxLength:100",
            author: "required|minLength:5|maxLength:50",
        });

        schema.check().then((matched) => {
            if (!matched) {
                res.status(422).send({
                    status: false,
                    message: schema.errors,
                    data:null,
                });
            } else {
                next();
            }
        })
    },
    _addBuku
}

module.exports = bookController;