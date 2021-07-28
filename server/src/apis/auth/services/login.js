import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function loginService(email, password) {
  const user = await userSchema.findOne({ email: email });
  if (!user) {
    throw new HttpException(409, `Email is not exist!`);
  } else {
    const isMatchPass = await bcrypt.compare(password, user.password); // kiem tra bang nhau :)))
    if (!isMatchPass) throw new HttpException(400, "Wrong password");
    else {
      return {
        token: jwt.sign(user.id, '123'),
      };
    }
  }
}
