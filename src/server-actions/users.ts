"use server";
import { ConnectMongoDB } from "@/config/db-config";
import { User } from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

ConnectMongoDB();
export const getCurrentUserFromMongoDB = async () => {
  try {
    const clerkUser = await currentUser();
    // already exists in the database
    const user = await User.findOne({
      clerkUserId: clerkUser?.id,
    });
    if (user) {
      return JSON.parse(JSON.stringify(user));
    }
    //not in the database
    const payload = {
      clerkUserId: clerkUser?.id,
      name: clerkUser?.firstName + " " + clerkUser?.lastName,
      userName: clerkUser?.username,
      imageUrl: clerkUser?.imageUrl,
    };

    const newUser = await User.create(payload);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    return {
      error,
    };
  }
};
