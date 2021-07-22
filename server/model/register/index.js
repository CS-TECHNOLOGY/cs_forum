import userSchema from "../../schema/userSchema";

export default async function registerModel(name, pass) {
  const user = new userSchema({ name, password:pass });
  const newUser = await user.save();
  return newUser
}
