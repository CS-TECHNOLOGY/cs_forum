import HttpException from "../../../common/helpers/HttpException";
import postSchema from "../../../schema/postSchema";
export default async function getPostService(id_post) {
  const post = await postSchema.findById(id_post);
  if(!post){
    throw new HttpException(400, 'đéo có bài này đâu, lêu lêu :))))))')
  }
  return post;
}
