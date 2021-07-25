import registerModel from "../model/register";

const registerController = async (req, res) => {
  const { email, password, firstname, lastname, avatar } = req.body;
  console.log( email, password, firstname, lastname, avatar )
  try {
    const response = await registerModel( email, password, firstname, lastname, avatar );
    console.log(response)
    res.status(200).json({
        token : response._id,
        message : "success"    
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default registerController;
