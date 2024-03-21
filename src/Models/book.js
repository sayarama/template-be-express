const database = require("../db");

const modelBuku = {
    getAllBuku: async () => {
        const request = await database`SELECT * FROM book`;

        return request;
    },
    getDetailBuku: async (id) => {
        const request = await database`SELECT * FROM book WHERE id=${id}`;

        return request;
    },
    getNewBuku: async () => {
        const request = await database`SELECT * FROM book ORDER BY id DESC LIMIT 1`;

        return request;
    },
    addBuku: async (payload) => {
        const { name, author, price, release } = payload;
        const request = await database`INSERT INTO book (name, author, price, release) values (${name}, ${author}, ${price}, ${release}) RETURNING id`;

        return request;
    }
}

module.exports = modelBuku;