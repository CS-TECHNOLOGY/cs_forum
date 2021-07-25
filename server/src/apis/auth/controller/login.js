import loginService from '../services/login';

const loginController = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const response = await loginService(email, password);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export default loginController;
