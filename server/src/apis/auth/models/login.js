import HttpException from '../../../common/helpers/HttpException';
import userSchema from '../../../schema/userSchema';

export default async function loginModel(email, password) {
  const user = await userSchema.findOne({
    email: email,
    password: password,
  });
  if (user) {
    return user;
  } else {
    throw new HttpException(400, 'dang nhap that bai');
  }
}
