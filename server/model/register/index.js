import userSchema from "../../schema/userSchema";

export default async function registerModel(
  email,
  password,
  firstname,
  lastname,
  avatar
) {
  const user = new userSchema({
    email,
    password,
    firstname,
    lastname,
    avatar,
    info: "",
  });
  const newUser = await user.save()
  return newUser;
}
