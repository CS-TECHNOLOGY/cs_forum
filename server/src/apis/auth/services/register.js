import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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
    const user = await userSchema.findOne({ email: email });
    if (user) {
      throw new HttpException(409, `Your email ${email} already exist.`);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await userSchema.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        avatar,
        info: '',
      });

      return {
        token: jwt.sign(user.id, '123'),
      };
    }
  } catch (error) {
    throw new HttpException(400, error.message);
  }
}
