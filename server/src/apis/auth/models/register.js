import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function registerModel(
  email,
  password,
  firstName,
  lastName,
  avatar
) {
  try {
    const user = await userSchema.create({
      email,
      password,
      firstName,
      lastName,
      avatar,
      info: '',
    });
    return user;
  } catch (error) {
    throw new HttpException(400, 'dang nhap that bai');
  }
}
