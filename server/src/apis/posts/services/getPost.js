import postSchema from "../../../schema/postSchema";
import userSchema from "../../../schema/userSchema";

export default async function getPostService(userid, pageNum) {
  const user = await userSchema.findById(userid).select("-password").exec();
  if (!user) throw new HttpException(400, "User id is not exist");
  var perPage = 10;
  const newfeed = postSchema
    .find()
    .limit(perPage)
    .skip(perPage * pageNum);
  return newfeed;
}
