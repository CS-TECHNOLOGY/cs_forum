import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function updateUserInfoService(update, id) {
  let ob = JSON.parse(JSON.stringify(update));
  console.log(ob);
  try {
    const user = await userSchema.findById(id).select('-password');
    if (!user) {
      throw new HttpException(409, `Your email already exist.`);
    }

    Object.keys(ob).forEach((key) => {
      user[key] = ob[key];
    });
    await user.save();
    return user;
  } catch (error) {
    throw new HttpException(400, error.message);
  }
}
