import getUserInfo from '../models/getUserInfo';

const getUserInfoController = async (req, res, next) => {
  const token = req.params.id;
  try {
    const response = await getUserInfo(token);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export default getUserInfoController;
