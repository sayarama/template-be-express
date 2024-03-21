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
            const id = Number(req.params.id)
            const request = await modelBuku.getDetailBuku(id)

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
            name: "required|minLength:1|maxLength:100",
            author: "required|minLength:1|maxLength:50",
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
    _addBuku: async (req, res) => {
        try {
            const {name, author, price, release} = req.body

            const request = await modelBuku.addBuku({
                name,
                author,
                price,
                release,
            });

            if (request.length > 0) {
                res.status(201).json({
                    status: true,
                    message: "Insert Data Success",
                });

                return;
            }
        } catch {error} {
            res.status(502).json({
                status:false,
                message: "Insert Data Failed, Something Wrong On Our Server",
                data:[]
            });
        }
    },
    _deleteBuku: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const request = await modelBuku.deleteBuku(id);
            res.status("200").json({
                status: true,
                message: "Data Deleted",
                data: request,
            })
        } catch (error) {
            res.status("502").json({
                status: false,
                message: 'something wrong with our server',
                data:[]
            })
        }
    }
}

module.exports = bookController;