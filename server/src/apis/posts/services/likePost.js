import HttpException from '../../../common/helpers/HttpException';
import postSchema from '../../../schema/postSchema';
import userSchema from '../../../schema/userSchema';

export default async function likePostService(id_post, user_id) {
    const post = await postSchema.findById(id_post).select('likes').exec();
    if(!post){
      throw new HttpException(403, 'deo co bai viet nay')
    }
    else {
        console.log('ssssssssss', post)
        const user= await userSchema
        .findById(user_id)
        .select('-password')
        .exec();
      if (!user) {
        throw new HttpException(403, 'nguoi dung deo ton tai ');
      }
      else {
          post.likes.push(user_id)
          await post.save()
          return post
      }
    }
}
