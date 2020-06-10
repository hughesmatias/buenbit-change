exports.index = data => (req, res) => {
  res.render('index', {
    data,
  });
};
