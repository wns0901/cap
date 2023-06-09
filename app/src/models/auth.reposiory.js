const db = require("../config/db");

class Repository {
  static async register(id, password) {
    const query = `INSERT INTO user_info (id, password) VALUES (?,?)`;

    return (await db.query(query, [id, password]))[0];
  }

  static async login(id) {
    const query = `SELECT no AS userNo, id, password FROM user_info WHERE id = ?`;

    return (await db.query(query, [id]))[0][0];
  }
}

module.exports = Repository;
