import mongoose from 'mongoose';
import HttpException from '../../../common/helpers/HttpException';
import postSchema from '../../../schema/postSchema';
import userSchema from '../../../schema/userSchema';

export default async function editCommentService(id_user, id_post, text, id_comment) {
  const post = await postSchema.findById(id_post);
  if(!post){
    throw new HttpException(403, 'bai viet del ton tai')
  }

  const user_comment = await userSchema
    .findById(id_user)
    .select('-password')
    .exec();
  if (!user_comment) {
    throw new HttpException(403, 'nguoi dung del ton tai');
  }
  post.comments = post.comments.map(item => 
    {
        if(item._id.toString() === id_comment){
            item.text = text;
        }
        return item;
    }
    )
  await post.save();
  return post
}
