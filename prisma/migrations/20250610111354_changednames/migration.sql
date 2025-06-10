/*
  Warnings:

  - Changed the type of `users` on the `free_games` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "free_games" DROP COLUMN "users",
ADD COLUMN     "users" INTEGER NOT NULL;
