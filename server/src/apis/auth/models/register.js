import userSchema from "../../../schema/userSchema";

export default async function registerModel(
  email,
  password,
  firstName,
  lastName,
  avatar
) {
  const user = await userSchema.create({
    email,
    password,
    firstName,
    lastName,
    avatar,
    info: "",
  });
  // const newUser = await user.save()
  return user;
}
