import HttpException from "../../../common/helpers/HttpException";
import userSchema from "../../../schema/userSchema";

export default async function getUserInfo(token) {
  const info = await userSchema.findById(token);
  if (info) {
    return info;
  } else {
    throw new HttpException(400, 'deo co gi dau');
  }
  // database
}
