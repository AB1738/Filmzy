/*
  Warnings:

  - The primary key for the `LikedMovie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LikedMovie` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "LikedMovie_userId_movieId_key";

-- AlterTable
ALTER TABLE "LikedMovie" DROP CONSTRAINT "LikedMovie_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "LikedMovie_pkey" PRIMARY KEY ("userId", "movieId");
