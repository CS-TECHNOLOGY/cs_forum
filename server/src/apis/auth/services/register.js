import jwt from 'jsonwebtoken';
import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function registerService(
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

    return {
      token: jwt.sign(user.id, '123'),
    };
  } catch (error) {
    throw new HttpException(400, error.message);
  }
}
