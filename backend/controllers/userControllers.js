const registerUser = async (req, res) => {
  const { name, email, passsword, pic } = req.body;

  res.json({
    name,
    email,
  });
};

module.exports = { registerUser };
