const dbConn = require('../db/dbConnection.js');

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  try {
    const queryText =
      ' SELECT first_name, last_name, rsvp, meal_option FROM usertable JOIN meal ON meal.id = usertable.meal_id';
    const data = await dbConn.query(queryText);
    res.locals.allUsers = data.rows;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = userController;
