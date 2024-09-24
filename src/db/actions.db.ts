import { connectToDB } from "./connect.db";
import { User } from "./models.db";

interface CreateUserClerkType {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}
export async function createUserByClerk(user: CreateUserClerkType) {
  try {
    await connectToDB();
    const newUser = {
      ...user,
      role: "null",
    };

    const mongoUser = await User.create(newUser);
    return mongoUser;
  } catch (err) {
    console.log("couldn't create user in the database with clerkId");
    console.log(err);
  }
}

export async function updateUserByClerk(
  id: string,
  toUpdate: {
    name: string;
    username: string;
    email: string;
    picture: string;
  }
) {
  try {
    await connectToDB();

    const mongoUser = await User.findOneAndUpdate({ clerkId: id }, toUpdate, {
      new: true,
    });
    return mongoUser;
  } catch (err) {
    console.log("couldn't create user in the database with clerkId");
    console.log(err);
  }
}

export const deleteUserByClerkId = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findOneAndDelete({ clerkId: id });

    if (!user) {
      console.log("no user found to delete in db");
      return "no user found to delete in db";
    }
    return user;
  } catch (err) {
    console.log("error occured during fetching user and deleting by id ");
    console.log(err);
  }
};
export const getUserByClerkId = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      console.log("no user found with give clerk Id");
      return "no user found with give clerk Id";
    }
    return user;
  } catch (err) {
    console.log("error occured during fetching user by clerkId ");
    console.log(err);
  }
};
export const setRole = async (id: string, role: string) => {
  try {
    connectToDB();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      { role },
      { new: true }
    );
    if (!user) {
      console.log("no user found with give clerk Id");
      return "no user found with give clerk Id";
    }
    return user;
  } catch (err) {
    console.log("error occured during fetching user by clerkId ");
    console.log(err);
  }
};

export const getRoleByClerkId = async (clerkId: string) => {
  const user = await User.findOne({ clerkId });
  console.log("the user to find the role of");
  console.log(user);
  return user.role;
};
