import registerModel from '../models/register';

const registerController = async (req, res, next) => {
  const { email, password, firstName, lastName, avatar } = req.body;
  try {
    const response = await registerModel(
      email,
      password,
      firstName,
      lastName,
      avatar
    );
    res.status(200).json({
      token: response._id,
      message: 'success',
    });
  } catch (error) {
    next(error);
  }
};
export default registerController;
