const pool = require('../utils/pool');

class Route {
  id;
  title;
  image;
  rating;
  stars;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.image = row.image;
    this.rating = row.rating;
    this.stars = row.stars;
  }

  static async insert(route) {
    const { rows } = await pool.query(
      `INSERT INTO routes (title, image, rating, stars)
      VALUES ($1, $2, $3, $4)
      RETURN *`,
      [route.title, route.image, route.rating, route.stars]
    );

    return new Route(rows[0]);
  }
}

module.exports = Route;
