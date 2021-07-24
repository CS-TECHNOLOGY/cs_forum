import registerModel from "../model/register";

const registerController = (req, res) => {
  const { email, password, firstname, lastname, avatar } = req.body;
  console.log( email, password, firstname, lastname, avatar )
  try {
    const response = registerModel( email, password, firstname, lastname, avatar );
    res.status(200).json({
        token : response._id,
        message : "success"    
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default registerController;
