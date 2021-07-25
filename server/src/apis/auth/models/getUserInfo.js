import userSchema from "../../../schema/userSchema";

export default async function getUserInfo(token) {
  const info = await userSchema.findById(token);
  if (info) {
    return info;
  } else {
    throw { err: "deo co gi dau " };
  }
  // database
}
