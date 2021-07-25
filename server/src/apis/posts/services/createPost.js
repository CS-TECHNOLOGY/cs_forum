import HttpException from '../../../common/helpers/HttpException';
import postSchema from '../../../schema/postSchema';
import userSchema from '../../../schema/userSchema';

export default async function createPostService(title, content, arthur_id) {
    console.log(123, arthur_id);
  const user = await userSchema.findById(arthur_id).select('-password').exec();
  if (!user) throw new HttpException(400, 'User id is not exist');

  const newPost = new postSchema({
    title,
    content,
    name_arthur: user.firstName + ' ' + user.lastName,
    avatar_arthur: user.avatar,
    arthur_id,
  });
  const post = await newPost.save();
  return post;
}
