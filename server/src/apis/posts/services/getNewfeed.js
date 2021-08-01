import postSchema from "../../../schema/postSchema";

export default async function getNewFeedService(pageNum) {
  var perPage = 10;
  const newFeed = postSchema
    .find()
    .limit(perPage)
    .skip(perPage * pageNum);
  return newFeed;
}
