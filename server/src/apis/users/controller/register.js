import registerModel from "../model/register";

const registerController = async (req, res) => {
  const { email, password, firstName, lastName, avatar } = req.body;
  try {
    const response = await registerModel( email, password, firstName, lastName, avatar );
    res.status(200).json({
        token : response._id,
        message : "success"    
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default registerController;
