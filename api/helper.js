module.exports = {
  dbError,
  notFound,
};

function dbError(res) {
  return res.status(500).json({ message: 'Server error' });
}

function notFound(text, res) {
  return res.status(404).json({ message: `There are no ${text}` });
}
