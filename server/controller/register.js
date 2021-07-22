import registerModel from "../model/register";

const registerController = (req, res) => {
    const {name, pass} = req.body;
    try {
        const response = registerModel(name, pass);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    
    
}
export default registerController;