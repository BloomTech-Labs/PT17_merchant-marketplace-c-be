const { search } = require('../globalModel');

module.exports = async (req, res, next) => {
  try {
    console.log(Object.keys(req.query).length);
    if (Object.keys(req.query).length > 0) {
      const query = Object.values(req.query).join(' ');
      const results = await search(query);
      res.status(200).json(results);
    } else {
      next();
    }
  } catch {
    next();
  }
};
