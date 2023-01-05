const User = require('../../models/user');

const getUser = (id) => {
  return User.findById(id);
};

const getUsers = () => {
  return User.find();
};

const addUser = (username, email, password) => {
  const user = new User({
    username,
    email,
    password,
  });
  return user.save();
};

const updateUser = (id, username, email, password) => {
  return User.findByIdAndUpdate(id, { username, email, password }, { new: true });
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

const register = async (username, email, password) => {
  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a new user with the hashed password
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  // Save the user to the database and return the user
  return user.save();
};

const login = async (email, password) => {
  // Find the user with the given email
  const user = await User.findOne({ email });
  // If no user was found, return null
  if (!user) return null;
  // Compare the given password with the hashed password stored in the database
  const valid = await bcrypt.compare(password, user.password);
  // If the passwords do not match, return null
  if (!valid) return null;
  // Otherwise, return the user
  return user;
};

module.exports = {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  register,
  login,
};