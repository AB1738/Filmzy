"use server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";

const addToWatchList = async () => {
  try {
    const user = await currentUser();
    if (!user) return; //HANDLE THIS BETTER
    const userIsInDb = await prisma.user.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (!userIsInDb) {
      const newUser = await prisma.user.create({
        data: {
          userId: user.id,
          firstName: user.firstName || "",
        },
      });
      //watchlist logic for new user then return
    }

    //watchlist logic for existing user then return
  } catch (e) {
    console.log(e);
  }
};

export default addToWatchList;
