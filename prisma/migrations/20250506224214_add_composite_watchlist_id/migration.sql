/*
  Warnings:

  - The primary key for the `LikedMovie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WatchList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,movieId]` on the table `LikedMovie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,movieId]` on the table `WatchList` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "LikedMovie" DROP CONSTRAINT "LikedMovie_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "LikedMovie_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WatchList" DROP CONSTRAINT "WatchList_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WatchList_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "LikedMovie_userId_movieId_key" ON "LikedMovie"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchList_userId_movieId_key" ON "WatchList"("userId", "movieId");
