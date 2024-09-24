"use server";
import { redirect } from "next/navigation";
import { connectToDB } from "./connect.db";
import { User } from "./models.db";
import { auth } from "@clerk/nextjs/server";

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
    // await redirect("/role");
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
    // ----------error while return the raw object --------//
    // return user;
  } catch (err) {
    console.log("error occured during fetching user by clerkId ");
    console.log(err);
  }
};

export const getRoleByClerkId = async (clerkId: string) => {
  try {
    console.log("getRole was called");
    const user = await User.findOne({ clerkId });
    if (!user) {
      console.log("no user with this clerkId could be found");
      return;
    }
    // console.log(user);
    console.log(user.role);
    return user.role;
  } catch (e) {
    console.log("error occured during getRole");
  }
};

export async function RoleCheck() {
  const { userId } = auth();

  const userRole = await getRoleByClerkId(userId!);
  if (userRole === "null") {
    redirect("/role");
  }
}
