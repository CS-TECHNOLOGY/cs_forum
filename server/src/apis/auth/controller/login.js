import loginModel from "../models/login";

const loginController = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  try {
    const response = await loginModel(email, password);
    const hello = { token: response._id, status: "login thanh cong toi" };
    res.status(200).json(hello);
  } catch (error) {
    res.status(400).json(error);
  }
};
export default loginController;
