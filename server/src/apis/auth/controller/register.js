import registerService from "../services/register";

const registerController = async (req, res, next) => {
  const { email, password, firstName, lastName, avatar } = req.body;
  try {
    const response = await registerService(
      email,
      password,
      firstName,
      lastName,
      avatar
    );
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export default registerController;
