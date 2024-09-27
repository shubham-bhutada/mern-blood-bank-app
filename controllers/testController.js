const testController = (req, res) => {
  res.status(200).send({
    message: "Test route working",
    success: true,
  });
};

module.exports = { testController };
