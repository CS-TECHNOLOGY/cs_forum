import loginModel from '../models/login';

const loginController = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const response = await loginModel(email, password);
    const hello = { token: response._id, status: 'login thanh cong toi' };
    res.status(200).json(hello);
  } catch (error) {
    next(error);
  }
};
export default loginController;
