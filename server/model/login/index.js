import userSchema from "../../schema/userSchema";
export default async function loginModel(email, password) {
  const user = await userSchema.findOne({
    email: email,
    password: password,
  });
  if (user) {
    return user;
  } else {
    throw { err: "dang nhap that bai " };
  }
  // database
}
