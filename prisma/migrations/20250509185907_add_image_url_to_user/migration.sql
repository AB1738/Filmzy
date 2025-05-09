/*
  Warnings:

  - You are about to drop the column `genres` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genres";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT NOT NULL;
