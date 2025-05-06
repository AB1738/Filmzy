"use server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";

const addToWatchList = async () => {
  try {
    const user = await currentUser();
    if (!user) return; //HANDLE THIS BETTER
  } catch (e) {
    console.log(e);
  }
};

export default addToWatchList;
