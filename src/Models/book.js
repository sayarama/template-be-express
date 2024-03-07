const database = require("../db");

const modelBuku = {
    getAllBuku: async () => {
        const request = await database`SELECT * FROM book`;

        return request;
    },
}

module.exports = modelBuku;