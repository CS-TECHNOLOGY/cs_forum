import HttpException from '../../../common/helpers/HttpException';
import postSchema from '../../../schema/postSchema';
import userSchema from '../../../schema/userSchema';

export default async function addCommentService(id_user, id_post, text) {
  const post = await postSchema.findById(id_post).exec();
  if(!post){
    throw new HttpException(403, 'bai viet del ton tai')
  }

  // chen vao 1 thang undefind => crash server
  const user_comment = await userSchema
    .findById(id_user)
    .select('-password')
    .exec();
  if (!user_comment) {
    throw new HttpException(403, 'nguoi dung del ton tai');
  }

  const newComment = {
    user_id: id_user,
    text: text,
    name: user_comment.firstName + ' ' + user_comment.lastName,
    avatar: user_comment.avatar,
  };

  post.comments.push(newComment)
  await post.save()
  return post

  // await
  // const addComment = await postSchema.findOneAndUpdate(
  //   { _id: id_post },
  //   { $push: { comments: newComment } },
  //   function (err, success) {
  //     if (err) {
  //       throw new HttpException(401, err);
  //     }
  //     return success;
  //   }
  // );
  // return addComment;
}
