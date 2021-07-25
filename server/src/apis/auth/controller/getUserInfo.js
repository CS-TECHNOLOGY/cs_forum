import getUserInfo from "../services/getUserInfo";

const getUserInfoController = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await getUserInfo(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export default getUserInfoController;
