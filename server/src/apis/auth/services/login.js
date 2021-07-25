import jwt from 'jsonwebtoken';

import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function loginService(email, password) {
  const user = await userSchema.findOne({
    email: email,
    password: password,
  });
  if (user) {
    return {
      token: jwt.sign(user.id, '123'),
    };
  } else {
    throw new HttpException(400, 'dang nhap that bai');
  }
}
