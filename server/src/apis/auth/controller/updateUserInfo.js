import updateUserInfoService from "../services/updateUserInfo";

const updateUserInfoController = async (req, res, next) => {
  const { id } = req.user;
  const update = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    info: req.body.info,
    avatar: req.body.avatar,
  };
  try {
    const response = await updateUserInfoService(update, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export default updateUserInfoController;
