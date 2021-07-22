import loginModel from "../model/login/index.js";

const loginController = (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const response = loginModel(id);
    res.send(response)
}
export default loginController;