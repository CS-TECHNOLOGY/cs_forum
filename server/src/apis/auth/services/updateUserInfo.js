import HttpException from "../../../common/helpers/HttpException";
import userSchema from "../../../schema/userSchema";

export default async function updateUserInfoService(update, id) {
  try {
    console.log(update)
    const user = await userSchema.findOne({ _id: id });
    if (user) {
      throw new HttpException(409, `Your email ${email} already exist.`);
    } else {
      let userUpdate = user;
      userUpdate = {
        ...update,
      };

      return userUpdate;
    }
  } catch (error) {
    throw new HttpException(400, error.message);
  }
}
